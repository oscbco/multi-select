import React, { useState, useRef, useEffect } from 'react';

import { DownArrow } from './Shapes';
import toTitleCase from './titleCase';

import css from './_MultiSelect.scss';

export default function MultiSelect (props) {
  const itemListRef = useRef(null);
  const [height, setHeight] = useState(0);
  const [active] = useState(-1);
  const [isOpen, open] = useState(false);
  const [filterText, setFilterText] = useState('');
  // const [selected, setSelected] = useState([]);
  const [focused, setFocused] = useState(false);

  const handleFilterChange = (e) => {
    setFilterText(e.target.value);
    open(true);
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
      const item = props.items.find((elem) => {
        /* eslint eqeqeq:0 */
        return elem[props.id] == value;
      });
      const indexOf = props.selected.indexOf(item[props.id]);
      if (indexOf === -1) {
        props.setSelected(props.selected.concat([item[props.id]]));
      } else {
        props.setSelected([...props.selected.slice(0, indexOf), ...props.selected.slice(indexOf + 1)]);
      }
    }
  };

  const items = props.items.filter((item) => {
    return item[props.label] ? item[props.label].includes(filterText) : item[props.id].includes(filterText);
  }).map(function (item, index) {
    const label = item[props.label] ? item[props.label] : toTitleCase(item[props.id]);
    const check = props.selected.includes(item[props.id]) ? '✓' : '';
    const activeItem = index === active ? props.classes.activeItem : '';
    return (
      <div className={css.item + ' ' + activeItem + ' ' + props.classes.item} key={item[props.id]} data-value={item[props.id]} style={{ color: item.menuColor || 'inherit', backgroundColor: item.menuBackground || 'inherit' }}>
        {label} <span data-value={item[props.id]}>{check}</span>
      </div>
    );
  });

  const selectedItems = props.selected.map(function (itemValue, index) {
    const item = props.items.find((elem) => {
      /* eslint eqeqeq:0 */
      return elem[props.id] == itemValue;
    });
    const label = item[props.label] ? item[props.label] : toTitleCase(item[props.id]);
    return (
      <div className={css.selectedItem + ' ' + props.classes.selectedItem} key={item[props.id]} style={{ color: item.selectedColor || 'inherit', backgroundColor: item.selectedBackground || 'inherit' }}>
        {label}
        <span id={css.cmdRemoveItem} className={css.cmdRemoveItem + ' ' + props.classes.cmdRemoveItem} data-value={item[props.id]}>×</span>
      </div>
    );
  });

  const empty = selectedItems.length === 0;

  useEffect(() => {
    setHeight(itemListRef.current.offsetHeight);
  });

  return (
    <div tabIndex={-1} className={css.select + ' ' + props.classes.select} onFocus={() => setFocused(true)} onBlur={(event) => handleBlur(event)} onClick={selectItem} data-is-open={isOpen} style={{ width: props.width, zIndex: (focused ? '9999' : '1') }}>
      <div className={css.header + ' ' + props.classes.header} onClick={openSelect}>
        <div>
          <div>
            {selectedItems}
          </div>
          <input placeholder={props.placeholder} data-open={isOpen} id={css.txtFilter} className={css.txtFilter + ' ' + props.classes.input} style={{ display: (empty ? 'inline-block' : 'none') }} type='text' onChange={handleFilterChange} value={filterText} />
          {selectedItems.length === 0 ? <div className={css.selectedItem + ' ' + props.classes.selectedItem} style={{ visibility: 'hidden' }}>&nbsp;</div> : null}
        </div>

        <div>
          <DownArrow id={css.downArrow} className={css.downArrow + ' ' + props.classes.downArrow} />
        </div>
      </div>

      <div className={css.itemContainer + ' ' + props.classes.itemContainer} data-is-open={isOpen} style={{ height: (isOpen === true ? height : '0') }}>
        <div ref={itemListRef}>
          <input placeholder={props.placeholder} data-open={isOpen} id={css.txtFilter} className={css.txtFilter + ' ' + props.classes.input} style={{ display: (!empty ? 'inline-block' : 'none') }} type='text' onChange={handleFilterChange} value={filterText} />
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
