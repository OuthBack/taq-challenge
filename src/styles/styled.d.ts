// styled.d.ts

import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    font: {
      family: string;
      colors: {
        white: "#FFFFFF";
        grey700: "#0a2130";
        blue500: "#23a5be";
        blue400: "#2dd6f7";
        green700: "#217566";
        green500: "#44a443";
        green300: "#54b743";
        green200: "#7af944";
      };
    };

    colors: {
      white: "#FFFFFF";
      grey700: "#0a2130";
      blue500: "#23a5be";
      blue400: "#2dd6f7";
      green700: "#217566";
      green500: "#44a443";
      green300: "#54b743";
      green200: "#7af944";
    };
  }
}
