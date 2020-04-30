import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import MultiSelect from './MultiSelect';

const fontSizes = [
  {
    label: '9px',
    value: '9'
  }, {
    label: '10px',
    value: '10'
  }, {
    label: '11px',
    value: '11'
  }, {
    label: '12px',
    value: '12'
  }
];

afterEach(cleanup);

describe('multi-select', () => {
  it('shows correct placeholder', () => {
    render(<MultiSelect placeholder='Select tags' />);
    expect(screen.getAllByPlaceholderText('Select tags').length).toBe(2);
  });
});
