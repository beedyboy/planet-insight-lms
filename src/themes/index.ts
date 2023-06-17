import { extendTheme, type ThemeConfig } from '@chakra-ui/react';
import { customComponents as components } from './components';
import colors from './colors';

const fonts = {
  heading: 'Rubik, sans-serif',
  body: 'Rubik, sans-serif'
};

export const config: ThemeConfig = {
  cssVarPrefix: 'pi'
};

const customTheme = {
  textStyles: {
    p: {
      fontSize: '16px'
    }
  },
  colors,
  fonts,
  components,
  config,
  styles: {
    global: {
      '.chakra-tabs__tab': {
        position: 'relative',
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: '0',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '0',
          height: '2px',
          bg: '#EC5656',
          transition: 'width 0.3s',
        },
        '&.half-underline': {
          '&[aria-selected="true"]': {
            '&::after': {
              width: '50%',
            },
            color: '#EC5656',
          },
        },
        '&.full-underline': {
          '&[aria-selected="true"]': {
            '&::after': {
              width: '100%',
            },
            color: '#EC5656',
          },
        },
      },
    },
  },
};

const theme = extendTheme(customTheme);

export default theme;
