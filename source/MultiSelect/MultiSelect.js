import React, { useState, useRef } from 'react';
import { DownArrow } from './Shapes';
import css from './_MultiSelect.scss';
import toTitleCase from './titleCase';

export default function MultiSelect (props) {
  const [isOpen, open] = useState(false);
  const itemListRef = useRef(null);
  const height = useRef();
  const [selected, setSelected] = useState([]);
  const [active, setActive] = useState(-1);
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
      // setActive(value);
      // open(false);
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
      <div className={css.selectedItem} key={item.value}>
        {label}
        <span data-value={item.value}>
          ❌
        </span>
      </div>
    );
  });

  return (
    <div tabIndex={-1} className={css.select} onFocus={() => setFocused(true)} onBlur={() => handleBlur(false)} onClick={selectItem} style={{ width: props.width, zIndex: (focused ? '9999' : '1') }}>
      <div className={css.header}>
        <div>
          {selectedItems}
          <input type='text' onChange={(e) => { props.onFilterChange(e.target.value); }} />
        </div>
        <div onClick={openSelect}>
          <DownArrow className={css.downArrow} />
        </div>
      </div>
      <div className={css.itemContainer} style={{ height: (isOpen === true ? height.current : '0') }}>
        <div className={css.itemList} ref={itemListRef}>
          {items}
        </div>
      </div>
    </div>
  );
}

MultiSelect.defaultProps = {
  onFilterChange: () => {},
  width: 'auto'
};
