import { HeadingProps } from "@chakra-ui/react";

interface IHeadingStyles {
    baseStyle: any;
    sizes: any;
    variants: Record<string, HeadingProps | ((props: any) => HeadingProps)>;
    defaultProps: Record<string, HeadingProps>;
}
export const HeadingStyles: IHeadingStyles = {
    // Styles for the base style
    baseStyle: {
        fontWeight: "500",
        fontFamily: "Rubik",
        fontSize: "1.5rem",
        lineHeight: "1.778rem",
    },
    // Styles for the size variations
    sizes: {
        title: {
            fontSize: "4.25rem",
            fontWeight: "700",
            lineHeight: "5.036rem",
            fontFamily: "Rubik",
        },
        sectionHeader: {
            fontWeight: "500",
            fontFamily: "Rubik",
            fontSize: "1.5rem",
            lineHeight: "1.778rem",
        },
    },
    // Styles for the visual style variations
    variants: {},
    // The default `size` or `variant` values
    defaultProps: {},
};

export default HeadingStyles;
