import React, { PureComponent } from 'react';

import MultiSelect from '../MultiSelect/MultiSelect';
// import styles from './_App.scss';

import { programmingLanguages } from './data';

export default class App extends PureComponent {
  render () {
    return (
      <React.Fragment>
        <h1>MultiSelect</h1>
        <MultiSelect items={programmingLanguages} />
      </React.Fragment>
    );
  }
}
