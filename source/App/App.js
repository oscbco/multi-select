import React, { useState } from 'react';

import MultiSelect from '../MultiSelect/MultiSelect';
import './_App.scss';

import cssBasic from './sass/basic.scss';
import cssOrange from './sass/orange.scss';
import cssDark from './sass/dark.scss';
import cssBlue from './sass/blue.scss';
import cssGreen from './sass/green.scss';
import cssOrangeWithSeparators from './sass/orangeWithSeparators.scss';
import cssOrangeWithDashes from './sass/orangeWithDashes.scss';

import { programmingLanguages } from './data';

export default function App () {
  const [tags, setTags] = useState([]);
  return (
    <>
      <h1>MultiSelect</h1>
      <h2>Styling Examples</h2>

      <h3>Style: background: Monochrome</h3>
      <div className={cssBasic.wrapper}>
        <span className={cssBasic.lblBasic}>
          <span>
            Text Label:&nbsp;
          </span>
        </span>
        <input type='text' defaultValue='a' className={cssBasic.txtControl} />
        <MultiSelect id='id' label='label' items={programmingLanguages} width='400px' classes={cssBasic} setSelected={setTags} selected={tags} placeholder='Select tags' />
      </div>

      <h3>Monochrome</h3>
      <MultiSelect id='id' label='label' items={programmingLanguages} width='400px' classes={cssGreen} setSelected={setTags} selected={tags} placeholder='Select tags' />

      <h3>Orange</h3>
      <MultiSelect id='id' label='label' items={programmingLanguages} width='400px' classes={cssOrange} setSelected={setTags} selected={tags} placeholder='Select tags' />

      <h3>Orange gradient with separators</h3>
      Orange gradient with separators: <MultiSelect id='id' label='label' items={programmingLanguages} width='400px' classes={cssOrangeWithSeparators} setSelected={setTags} selected={tags} placeholder='Select tags' />

      <h3>Orange with dashes</h3>
      <MultiSelect id='id' label='label' items={programmingLanguages} width='400px' classes={cssOrangeWithDashes} setSelected={setTags} selected={tags} placeholder='Select tags' />

      <h3>Dark</h3>
      <MultiSelect id='id' label='label' items={programmingLanguages} width='400px' classes={cssDark} setSelected={setTags} selected={tags} placeholder='Select tags' />

      <h3>Blue</h3>
      <MultiSelect id='id' label='label' items={programmingLanguages} width='400px' classes={cssBlue} setSelected={setTags} selected={tags} placeholder='Select tags' />

      <h3>Style: background: green</h3>
      <MultiSelect id='id' label='label' items={programmingLanguages} width='400px' classes={cssGreen} setSelected={setTags} selected={tags} placeholder='Select tags' />

    </>
  );
}
