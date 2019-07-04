import React, { useState, useRef, useEffect } from 'react';

import { DownArrow } from './Shapes';
import toTitleCase from './titleCase';

import css from './_MultiSelect.scss';

export default function MultiSelect (props) {
  const itemListRef = useRef(null);
  const [height, setHeight] = useState(0);
  const txtRef = useRef();
  const [active] = useState(-1);
  const [isOpen, open] = useState(false);
  const [filterText, setFilterText] = useState('');
  const [selected, setSelected] = useState([]);
  const [focused, setFocused] = useState(false);

  const handleFilterChange = (e) => {
    setFilterText(e.target.value);
  };

  const openSelect = (event) => {
    event.preventDefault();
    // Ignore clicks from cmdRemoveItem
    if (event.target.id === css.cmdRemoveItem) {
      return;
    }
    // Clicks on txtFilter always open the select
    if (event.target.id === css.txtFilter) {
      setHeight(itemListRef.current.offsetHeight);
      open(true);
      return;
    }
    setHeight(itemListRef.current.offsetHeight);
    open(!isOpen);
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
    const label = item[props.label] ? item[props.label] : toTitleCase(item[props.id]);
    const check = selected.includes(item[props.id]) ? '✓' : '';
    const activeItem = index === active ? props.classes.activeItem : '';
    return (
      <div className={css.item + ' ' + activeItem + ' ' + props.classes.item} key={item[props.id]} data-value={item[props.id]}>
        {label} <span data-value={item[props.id]}>{check}</span>
      </div>
    );
  });

  const selectedItems = selected.map(function (itemValue, index) {
    const item = props.items.find((elem) => {
      /* eslint eqeqeq:0 */
      return elem[props.id] == itemValue;
    });
    const label = item[props.label] ? item[props.label] : toTitleCase(item[props.id]);
    return (
      <div className={css.selectedItem + ' ' + props.classes.selectedItem} key={item[props.id]}>
        {label}
        <span id={css.cmdRemoveItem} className={css.cmdRemoveItem + ' ' + props.classes.cmdRemoveItem} data-value={item[props.id]}>×</span>
      </div>
    );
  });

  const empty = selectedItems.length === 0;

  useEffect(() => {
    console.log('itemListRef.current.offsetHeight', itemListRef.current.offsetHeight);
    setHeight(itemListRef.current.offsetHeight);
  });

  return (
    <div tabIndex={-1} className={css.select + ' ' + props.classes.select} onFocus={() => setFocused(true)} onBlur={(event) => handleBlur(event)} onClick={selectItem} style={{ width: props.width, zIndex: (focused ? '9999' : '1') }}>
      <div className={css.header + ' ' + props.classes.header} onClick={openSelect}>
        <div>
          <div>
            {selectedItems}
          </div>
          <input data-open={isOpen} id={css.txtFilter} className={css.txtFilter + ' ' + props.classes.input} style={{ display: (empty ? 'inline-block' : 'none') }} type='text' onChange={handleFilterChange} value={filterText} ref={txtRef} />
        </div>

        <div>
          <DownArrow id={css.downArrow} className={css.downArrow + ' ' + props.classes.downArrow} />
        </div>
      </div>

      <div className={css.itemContainer + ' ' + props.classes.itemContainer} style={{ height: (isOpen === true ? height : '0') }}>
        <div ref={itemListRef}>
          <input data-open={isOpen} id={css.txtFilter} className={css.txtFilter + ' ' + props.classes.input} style={{ display: (!empty ? 'inline-block' : 'none') }} type='text' onChange={handleFilterChange} value={filterText} ref={txtRef} />
          <div className={css.itemList + ' ' + props.classes.list}>
            {items}
          </div>
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
  },
  id: 'id',
  label: 'label'
};
