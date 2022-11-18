import { MantineThemeOverride } from "@mantine/core";
import { ButtonTheme } from "./ButtonTheme";
import { InputTheme } from "./InputTheme";

export const theme: MantineThemeOverride = {
  fontFamily: "Inter, Helvetica, Arial, sans-serif",
  components: {
    Button: ButtonTheme,
    TextInput: InputTheme,
  },
  focusRingStyles: {
    styles: (theme) => ({
      outline: `2px solid ${theme.colors.violet[5]}`,
      outlineOffset: "2px",
    }),
    inputStyles: (theme) => ({
      outline: `2px solid ${theme.colors.violet[5]}`,
    }),
  },
};
