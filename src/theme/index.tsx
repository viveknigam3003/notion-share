import { MantineThemeOverride } from "@mantine/core";
import { ButtonTheme } from "./ButtonTheme";

export const theme: MantineThemeOverride = {
  fontFamily: 'Inter, Helvetica, Arial, sans-serif',
  components: {
    Button: ButtonTheme,
  },
};
