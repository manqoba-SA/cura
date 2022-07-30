import { DefaultTheme } from "@react-navigation/native";
import COLORS from "../constants/COLORS";

export default {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: COLORS.primary.text,
    background: COLORS.light.background,
  },
};
