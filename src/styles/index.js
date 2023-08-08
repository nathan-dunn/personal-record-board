import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const light = '#F9F9F9';
const dark = '#282828';
const black = '#000';
const lightBlack = '#282828';
const gray = '#505050';
const orange = '#FF7C36'; // old horn strength
// const teal = '#00d0d0';
const teal = '#00BBBB';
const hornOrange = '#FF541C';
const hornBlue = '#081832';

export const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: true,
  },
  colors: {
    light,
    dark,
    black,
    lightBlack,
    orange,
    teal,
    gray,
    hornOrange,
    hornBlue,
  },
  styles: {
    global: props => ({
      body: {
        bg: black,
        color: light,
      },
    }),
  },
});
