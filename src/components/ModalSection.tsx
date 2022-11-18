import { Box, BoxProps, createStyles } from "@mantine/core";
import React from "react";

const ModalSection: React.FC<BoxProps & { children: React.ReactNode }> = ({
  children,
}) => {
  const { classes } = useStyles();
  return <Box className={classes.root}>{children}</Box>;
};

export default ModalSection;

const useStyles = createStyles((theme) => ({
  root: {
    padding: "1rem 0.75rem 1rem 0.75rem",
  },
}));
