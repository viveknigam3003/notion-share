import { createStyles, Switch, SwitchProps } from "@mantine/core";
import React from "react";

const ThemedSwitch: React.FC<SwitchProps> = ({...props}) => {
  const { classes } = useStyles();
  return <Switch color={"violet"} className={classes.root} {...props}/>;
};

export default ThemedSwitch;

const useStyles = createStyles((theme) => ({
  root: {
    ".mantine-Switch-body": {
      justifyContent: "center",
      alignItems: "center",
    },
    ".mantine-Switch-track": {
      height: "1.5rem",
      width: "2.75rem",
      borderRadius: "0.75rem",
    },
    ".mantine-Switch-thumb": {
      width: "1.25rem",
      height: "1.25rem",
    },
    "input:checked+*>.mantine-Switch-thumb": {
      left: "calc(100% - 1.25rem - 2px)",
    },
  },
}));
