import React, { PureComponent } from 'react';

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

export default class App extends PureComponent {
  render () {
    return (
      <React.Fragment>
        <h1>MultiSelect</h1>
        <h2>Styling Examples</h2>
        <h3>Monochrome</h3>
        <MultiSelect items={programmingLanguages} width='400px' classes={cssBasic} />

        <h3>Orange</h3>
        <MultiSelect items={programmingLanguages} width='400px' classes={cssOrange} />

        <h3>Orange gradient with separators</h3>
        <MultiSelect items={programmingLanguages} width='400px' classes={cssOrangeWithSeparators} />

        <h3>Orange with dashes</h3>
        <MultiSelect items={programmingLanguages} width='400px' classes={cssOrangeWithDashes} />

        <h3>Dark</h3>
        <MultiSelect items={programmingLanguages} width='400px' classes={cssDark} />

        <h3>Blue</h3>
        <MultiSelect items={programmingLanguages} width='400px' classes={cssBlue} />

        <h3>Style: background: green</h3>
        <MultiSelect items={programmingLanguages} width='400px' classes={cssGreen} />
      </React.Fragment>
    );
  }
}
