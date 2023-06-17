import { type ComponentStyleConfig } from '@chakra-ui/react';

export const LinkStyles: ComponentStyleConfig = {
  baseStyle: {
    _hover: {
      textDecoration: 'none',
      color: 'primary.main',
    },
    _focus: {
      boxShadow: 'none'
    }
  }
};

export default LinkStyles;
