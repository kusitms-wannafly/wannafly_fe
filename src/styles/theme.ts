import { DefaultTheme } from 'styled-components';

const colors = {
  wht: '#ffffff',
  blk: '#000000',
  red_caution: '#F25651',
  yellow1: '#FFF6D1',
  yellow2: '#FFE79E',
  yellow3: '#FDD16A',
  yellow4: '#CC942D',
  yellow5: '#9A6A22',
  navy1: '#D1DDFF',
  navy2: '#9EB3FF',
  navy3: '#6A81FC',
  navy4: '#414FCC',
  navy5: '#1F2B99',
  grey1: '#F6F8FB',
  grey2: '#E8EAEF',
  grey3: '#D0D4DB',
  grey4: '#ABAEB4',
  grey5: '#919499',
  grey6: '#47494B',
  grey7: '#353638',
  grey8: '#1E1F20',
  blue: '#163CFC',
  red: '#FF4242',
  green: '#A0CD664D',
  purple1: '#E5D1FF',
  pink1: '#FFD1E8',
  green1: '#D1FFF0',
  orange1: '#FFDFD1',
  blue1: '#D1EBFF',
};

export type ColorTypes = typeof colors;

export const theme: DefaultTheme = {
  colors,
};
