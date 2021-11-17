import React from 'react';
import { render, cleanup } from 'react-native-testing-library';
import BoxShadow from '.';

afterEach(cleanup);

describe('<BoxShadow />', () => {
  it('should be defined', () => {
    const rendered = render(<BoxShadow />).toJSON();

    expect(rendered).toMatchSnapshot();
  });
});
