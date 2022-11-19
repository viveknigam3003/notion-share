import { Button, createStyles } from "@mantine/core";
import React from "react";
import { HiOutlineLink } from "react-icons/hi";

interface Props {}

const CopyLink = (props: Props) => {
  const { classes } = useStyles();
  return (
    <Button
      className={classes.root}
      variant="subtle"
      color={"gray"}
      size="xs"
      leftIcon={<HiOutlineLink />}
    >
      Copy link
    </Button>
  );
};

export default CopyLink;

const useStyles = createStyles((theme) => ({
  root: {
    height: "2rem",
    fontSize: "0.875rem",
    padding: "0.25rem",
    color: theme.colors.dark[5],
  },
}));
