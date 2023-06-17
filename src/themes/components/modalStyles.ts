import { type ComponentStyleConfig } from '@chakra-ui/react';

export const ModalStyles: ComponentStyleConfig = {
  variants: {
    b4b: (props) => ({
      dialog: {
        maxH: 'calc(100vh - 50px)',
        maxW: '680px',
        overflowY: 'scroll',
        borderRadius: '4px',
        bgColor: 'transparent',
        'button.chakra-modal__close-btn': {
          _hover: {
            transform: 'scale(1.1)',
            path: {
              fill: 'red.400'
            }
          },
          path: {
            fill: 'white'
          }
        },
        '.chakra-modal__body': {
          bgColor: props.colorMode === 'dark' ? 'gray.800' : 'white',
          mt: '63px',
          borderRadius: '4px 4px 0 0',
          pos: 'relative',
          maxH: '60vh',
          overflowY: 'scroll',
          _before: {
            content: '""',
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            bgColor: 'green.900',
            borderRadius: '4px 4px 0 0',
            h: '10px'
          }
        },
        '.chakra-modal__footer': {
          bgColor: props.colorMode === 'dark' ? 'gray.700' : 'white',
          h: '100px'
        }
      }
    })
  }
};

export default ModalStyles;
