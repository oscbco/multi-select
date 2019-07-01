import React, { PureComponent } from 'react';

import MultiSelect from '../MultiSelect/MultiSelect';
import './_App.scss';

import { programmingLanguages } from './data';

export default class App extends PureComponent {
  render () {
    return (
      <React.Fragment>
        <h1>MultiSelect</h1>
        <h2>Usage Examples</h2>
        <h3>Style: background: orange</h3>
        <MultiSelect items={programmingLanguages} width='400px' style={{
          background: 'orange'
        }} listStyle={{
        }} />
        <h3>Style: background: dark</h3>
        <MultiSelect items={programmingLanguages} width='400px'
          style={{
            background: '#333'
          }}
          listStyle={{
            background: '#555'
          }}
          headerStyle={{
          }}
          selectedItemStyle={{
            background: '#999',
            color: '#222'
          }} />
        <h3>Style: background: light</h3>
        <MultiSelect items={programmingLanguages} width='400px'
          style={{
            background: '#eee',
            border: '1px solid #999'
          }}
          listStyle={{
          }}
          headerStyle={{
          }}
          selectedItemStyle={{
            background: 'lightblue',
            border: '1px solid #7E9EA8',
            boxShadow: '#555 0px 0px 2px',
            color: '#222'
          }} />
        <h3>Style: background: light2</h3>
        <MultiSelect items={programmingLanguages} width='400px'
          style={{
            background: 'white',
            border: '1px solid #999'
          }}
          listStyle={{
          }}
          headerStyle={{
          }}
          selectedItemStyle={{
            background: 'lightblue',
            color: '#222'
          }} />

        <h3>Width: auto</h3>
        <MultiSelect items={programmingLanguages} />
        <h3>Width: 300px</h3>
        <MultiSelect items={programmingLanguages} width='300px' />
        <h3>Width: auto, but parent's width is 300px</h3>
        <div style={{ width: '300px' }}>
          <MultiSelect items={programmingLanguages} width='auto' />
        </div>
      </React.Fragment>
    );
  }
}
