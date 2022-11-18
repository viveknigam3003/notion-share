import { Box, BoxProps, createStyles } from "@mantine/core";
import React from "react";

const ModalSection: React.FC<BoxProps & { children: React.ReactNode }> = ({
  children,
  ...props
}) => {
  const { classes } = useStyles();
  return (
    <Box
      className={classes.root}
      pt="1rem"
      pb="1rem"
      pl="0.75rem"
      pr="0.75rem"
      {...props}
    >
      {children}
    </Box>
  );
};

export default ModalSection;

const useStyles = createStyles((theme) => ({
  root: {
    // padding: "1rem 0.75rem 1rem 0.75rem",
  },
}));
