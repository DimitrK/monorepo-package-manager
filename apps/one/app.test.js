import React from 'react';
import {render} from '@testing-library/react';
import App from './app'

describe('app', () => {
  test('matches snapshot', () => {
    const {container} = render(<App/>);
    expect(container).toMatchSnapshot();
  })
})