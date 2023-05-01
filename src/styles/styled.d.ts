import 'styled-components';
import { ColorTypes } from '@styles/theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: ColorTypes;
  }
}
