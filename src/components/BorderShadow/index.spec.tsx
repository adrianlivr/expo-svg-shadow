import React from 'react';
import { render, cleanup } from 'react-native-testing-library';
import BorderShadow from '.';

afterEach(cleanup);

describe('<BorderShadow />', () => {
  it('should be defined', () => {
    const rendered = render(<BorderShadow />).toJSON();

    expect(rendered).toMatchSnapshot();
  });
});
