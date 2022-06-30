import { DarkTheme, DefaultTheme } from "@react-navigation/native";

import { color as palette } from "../theme";

export const lightTheme = {
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    background: palette.white
  }
};

export const darkTheme = {
  ...DarkTheme,
  colors: {
    ...lightTheme.colors,
    background: palette.greyDarkest,
    foreground: palette.white,
    text: palette.white,
    tabBar: palette.black,
    iconWhite: palette.black,
    iconBlack: palette.white,
    ...palette
    // offBlack: palette.white,
    //     dynamicBackground: palette.dynamicBlack,
    //     shadow: palette.transparent,
    //     borderColor: palette.borderColorDark
  }
};
