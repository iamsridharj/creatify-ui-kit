import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import {theme} from './theme';


interface StyledThemeProviderProps {
    children: ReactNode;
}

export default function StyledThemeProvider({children}: StyledThemeProviderProps) {
  return (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  )
}
