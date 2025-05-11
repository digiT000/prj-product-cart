import 'styled-components';
export const theme = {
  colors: {
    primary: '#C73B0F',
    rose_900: '#260F08',
    rose_500: '#87635A',
    rose_400: '#AD8A85',
    rose_300: '#CAAFA7',
    rose_100: '#F5EEEC',
    rose_50: '#FCF8F6',
    green: '#1EA575',
    black: '#121212',
    white: '#ffffff',
  },
} as const;

type ThemeType = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
