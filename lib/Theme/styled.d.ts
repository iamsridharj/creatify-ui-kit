import {} from 'styled-components';
import { CustomTheme } from './theme'; // Import type from above file
declare module 'styled-components' {
  export interface DefaultTheme extends CustomTheme {} // extends the global DefaultTheme with our ThemeType.
}
