import React, { PureComponent } from 'react';

import MultiSelect from '../MultiSelect/MultiSelect';
import './_App.scss';

import cssExample1 from './sass/example1.scss';
import cssExample2 from './sass/example2.scss';
import cssExample3 from './sass/example3.scss';
import cssExample4 from './sass/example4.scss';
import cssExample5 from './sass/example5.scss';
import cssExample6 from './sass/example6.scss';
import cssExample7 from './sass/example7.scss';

import { programmingLanguages } from './data';

export default class App extends PureComponent {
  render () {
    return (
      <React.Fragment>
        <h1>MultiSelect</h1>
        <h2>Usage Examples</h2>
        <h3>Style: background: green</h3>
        <MultiSelect items={programmingLanguages} width='400px' classes={cssExample1} />

        <h3>Style: background: orange</h3>
        <MultiSelect items={programmingLanguages} width='400px' classes={cssExample2} />

        <h3>Style: background: dark</h3>
        <MultiSelect items={programmingLanguages} width='400px' classes={cssExample3} />

        <h3>Style: background: light</h3>
        <MultiSelect items={programmingLanguages} width='400px' classes={cssExample4} />

        <h3>Style: background: green</h3>
        <MultiSelect items={programmingLanguages} width='400px' classes={cssExample5} />

        <h3>Style: background: orange</h3>
        <MultiSelect items={programmingLanguages} width='400px' classes={cssExample6} />

        <h3>Style: background: orange</h3>
        <MultiSelect items={programmingLanguages} width='400px' classes={cssExample7} />

        <h3>Width: auto</h3>
        <MultiSelect items={programmingLanguages} />

        <h3>Width: auto, but parent's width is 300px</h3>
        <div style={{ width: '300px' }}>
          <MultiSelect items={programmingLanguages} width='auto' />
        </div>
      </React.Fragment>
    );
  }
}
