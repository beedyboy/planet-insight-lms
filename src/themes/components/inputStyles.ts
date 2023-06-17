import { type ComponentStyleConfig } from "@chakra-ui/react";

export const InputStyles: ComponentStyleConfig = {
    baseStyle: {
        fontWeight: 400,
        fontSize: "1rem",
        lineHeight: "1.185rem",
        color: "#000921",
        height: "56px",
        bgColor: "#F3F5F7",
        border: "0.6px solid rgba(103, 108, 123, 0.24)",
        borderRadius: "6px",
        _placeholder: {
            color: "#A1A5AD",
        },
    },
    variants: {
        outline: {
            fontWeight: 400,
            fontSize: "1rem",
            lineHeight: "1.185rem",
            color: "red",
            height: "56px",
            bgColor: "#F3F5F7",
            border: "0.6px solid rgba(103, 108, 123, 0.24)",
            borderRadius: "6px",
            _placeholder: {
                color: "#A1A5AD",
            },
        },
    },
    defaultProps: {
        variants: "outline",
    },
};

export default InputStyles;
