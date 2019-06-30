import React, { useState, useRef } from 'react';

import { DownArrow } from './Shapes';
import toTitleCase from './titleCase';

import css from './_MultiSelect.scss';

export default function MultiSelect (props) {
  const itemListRef = useRef(null);
  const height = useRef();
  const [active] = useState(-1);
  const [isOpen, open] = useState(false);
  const [selected, setSelected] = useState([]);
  const [focused, setFocused] = useState(false);

  const openSelect = () => {
    open(!isOpen);
    height.current = itemListRef.current.offsetHeight;
  };

  const handleBlur = () => {
    setFocused(false);
    open(false);
  };

  const selectItem = (event) => {
    const { value } = event.target.dataset;
    if (value !== undefined) {
      const indexOf = selected.indexOf(value);
      if (indexOf === -1) {
        setSelected(selected.concat([value]));
      } else {
        setSelected([...selected.slice(0, indexOf), ...selected.slice(indexOf + 1)]);
      }
    }
  };

  const items = props.items.map(function (item, index) {
    const label = item.label ? item.label : toTitleCase(item.value);
    const check = selected.includes(item.value) ? '✓' : '';
    const activeItem = index === active ? css.activeItem : '';
    return (
      <div className={css.item + ' ' + activeItem} key={item.value} data-value={item.value}>
        {label} <span data-value={item.value}>{check}</span>
      </div>
    );
  });

  const selectedItems = selected.map(function (itemValue, index) {
    const item = props.items.find((elem) => {
      return elem.value === itemValue;
    });
    const label = item.label ? item.label : toTitleCase(item.value);
    return (
      <div className={css.selectedItem} key={item.value} style={props.selectedItemStyle}>
        {label}
        <span className={css.removeButton} data-value={item.value}>×</span>
      </div>
    );
  });

  return (
    <div tabIndex={-1} className={css.select} onFocus={() => setFocused(true)} onBlur={() => handleBlur(false)} onClick={selectItem} style={{ width: props.width, zIndex: (focused ? '9999' : '1'), ...props.style }}>
      <div className={css.header} style={props.headerStyle}>
        <div>
          {selectedItems}<div className={css.selectedItem} style={{ visibility: 'hidden', maxWidth: '0', ...props.selectedItemStyle }}>&nbsp;</div>
          <input type='text' onChange={(e) => { props.onFilterChange(e.target.value); }} />
        </div>
        <div onClick={openSelect}>
          <DownArrow className={css.downArrow} />
        </div>
      </div>
      <div className={css.itemContainer} style={{ height: (isOpen === true ? height.current : '0') }}>
        <div className={css.itemList} ref={itemListRef} style={props.listStyle}>
          {items}
        </div>
      </div>
    </div>
  );
}

MultiSelect.defaultProps = {
  onFilterChange: () => {},
  width: 'auto',
  style: {},
  listStyle: {},
  headerStyle: {},
  selectedItemStyle: {}
};
