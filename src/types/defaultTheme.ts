// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      bg: string;
      primary: string;
      white: string;
      black: string;
    };
    fonts: {
      sizes: {
        h1: string;
        h2: string;
        h3: string;
        h4: string;
        h5: string;
        xxl: string;
        xl: string;
        lg: string;
        normal: string;
        small: string;
        light: string;
      };
      weights: {
        w300: number;
        w400: number;
        w500: number;
        w600: number;
        w700: number;
        w800: number;
        w900: number;
      };
      FontFace: {
        primary: string;
        secondary: string;
      };
    };
    border: {
      width: {
        light: string;
        normal: string;
        large: string;
      };
      radius: {
        sm: string;
        md: string;
        lg: string;
      };
    };
  }
}
