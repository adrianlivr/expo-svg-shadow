import React from 'react';
import { hexColorToRgb } from './hexColorToRgb';

describe('hexColorToRgb', () => {
  it('should be defined', () => {
    expect(hexColorToRgb).toBeDefined();
  });

  it('should be return a RGB color array', () => {
    expect(hexColorToRgb('#000')).toEqual([0, 0, 0]);
  });
});
