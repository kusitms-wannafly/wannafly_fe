import { DefaultTheme } from 'styled-components';

const colors = {
  yellow: '#fdc942',
  grey: '#EFEFEF',
  lightyellow: '#CCFF001A',
  white: '#FFFFFF',
  blue: '#163CFC',
  black: '#000000',
};

export type ColorTypes = typeof colors;

export const theme: DefaultTheme = {
  colors,
};
