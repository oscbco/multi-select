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

  const openSelect = () => {
    open(!isOpen);
    height.current = itemListRef.current.offsetHeight;
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

  return (
    <div>
      <div className={css.select} >
        {JSON.stringify(selected, null, 2)}
        <br />
        <input type='text' />
        <DownArrow className={css.downArrow} handleClick={openSelect} />
        <div className={css.itemContainer} style={{ height: (isOpen === true ? height.current : '0') }}>
          <div className={css.itemList} ref={itemListRef} onClick={selectItem}>
            {items}
          </div>
        </div>
      </div>
    </div>
  );
}
