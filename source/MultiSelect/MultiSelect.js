import React, { useState, useRef } from 'react';

import { DownArrow } from './Shapes';
import toTitleCase from './titleCase';

import css from './_MultiSelect.scss';

export default function MultiSelect (props) {
  const itemListRef = useRef(null);
  const height = useRef();
  const txtRef = useRef();
  const [active] = useState(-1);
  const [isOpen, open] = useState(false);
  const [selected, setSelected] = useState([]);
  const [focused, setFocused] = useState(false);

  const openSelect = (event) => {
    event.preventDefault();
    // Ignore clicks from cmdRemoveItem
    if (event.target.id === css.cmdRemoveItem) {
      return;
    }
    // Clicks on txtFilter always open the select
    if (event.currentTarget.id === css.txtFilter) {
      open(true);
      height.current = itemListRef.current.offsetHeight;
      return;
    }
    open(!isOpen);
    height.current = itemListRef.current.offsetHeight;
  };

  const handleBlur = (event) => {
    const relatedTarget = event.relatedTarget !== null ? event.relatedTarget : document.createElement('p');
    if (event.currentTarget.contains(relatedTarget) === false) {
      setFocused(false);
      open(false);
    }
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
    const activeItem = index === active ? props.classes.activeItem : '';
    return (
      <div className={css.item + ' ' + activeItem + ' ' + props.classes.item} key={item.value} data-value={item.value}>
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
      <div className={css.selectedItem + ' ' + props.classes.selectedItem} key={item.value}>
        {label}
        <span id={css.cmdRemoveItem} className={css.cmdRemoveItem + ' ' + props.classes.cmdRemoveItem} data-value={item.value}>×</span>
      </div>
    );
  });

  const renderInput = isOpen || (selectedItems.length === 0);

  return (
    <div tabIndex={-1} className={css.select + ' ' + props.classes.select} onFocus={() => setFocused(true)} onBlur={(event) => handleBlur(event)} onClick={selectItem} style={{ width: props.width, zIndex: (focused ? '9999' : '1') }}>
      <div className={css.header + ' ' + props.classes.header}>
        <div>
          <div onClick={openSelect}>
            {selectedItems}
          </div>
          <input id={css.txtFilter} onClick={openSelect} className={css.txtFilter + ' ' + props.classes.input} style={{ display: (renderInput ? 'initial' : 'none') }} type='text' onChange={(e) => { props.onFilterChange(e.target.value); }} ref={txtRef} />
        </div>
        <div onClick={openSelect}>
          <DownArrow id={css.downArrow} className={css.downArrow + ' ' + props.classes.downArrow} />
        </div>
      </div>

      <div className={css.itemContainer + ' ' + props.classes.itemContainer} style={{ height: (isOpen === true ? height.current : '0') }}>
        <div className={css.itemList + ' ' + props.classes.list} ref={itemListRef}>
          {items}
        </div>
      </div>
    </div>
  );
}

MultiSelect.defaultProps = {
  onFilterChange: () => {},
  width: 'auto',
  classes: {
    selectClass: '',
    headerClass: '',
    inputClass: '',
    selectedItemClass: '',
    itemContainerClass: '',
    listClass: ''
  }
};
