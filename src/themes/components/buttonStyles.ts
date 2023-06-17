import { ComponentStyleConfig } from "@chakra-ui/react";

export const ButtonStyles: ComponentStyleConfig = {
    baseStyle: {
        fontSize: "1rem",
        fontWeight: "500",
        fontFamily: "Rubik",
        borderRadius: "6px",
        minH: "36px",
        _disabled: {
            opacity: 0.6,
            cursor: "not-allowed",
            boxShadow: "none",
        },
    },
    sizes: {
        sm: {
            minW: "85px",
            h: "36px",
        },
        md: {
            minW: "120px",
            h: "46px",
        },
        lg: {
            minW: "160px",
            h: "56px",
        },
        full: {
            minW: "100%",
        },
    },
    variants: {
        primary: {
            bg: "primary.main",
            color: "white",
            _hover: {
                bg: "primary.sub",
                color: "text.primary",
            },
        },
        secondary: {
            bg: "secondary.main",
            color: "white",
            _hover: {
                bg: "secondary.sub",
                color: "text.primary",
            },
        },
        outline: {
            border: "1px solid",
            borderColor: "primary.main",
            color: "primary.main",
            backgroundColor: "transparent",
        },
        secondaryOutline: {
            border: "1px solid",
            borderColor: "secondary.main",
            color: "secondary.main",
            backgroundColor: "transparent",
        },
        error: {
            bg: "red.600",
            color: "white",
            _hover: {
                bg: "secondary.sub",
                color: "text.primary",
            },
        },
        ghost: {
            color: "text.primary",
        },
    },
    defaultProps: {
        variant: "primary",
        size: "md"
    },
};

export default ButtonStyles;