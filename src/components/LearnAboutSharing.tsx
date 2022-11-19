import { createStyles, Group, Text } from "@mantine/core";
import React from "react";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";

interface Props {}

const LearnAboutSharing = (props: Props) => {
  const { classes } = useStyles();
  return (
    <Group className={classes.leftGroup}>
      <HiOutlineQuestionMarkCircle fontSize={"14px"} color="gray" />
      <Text className={classes.learnMore} color="gray" component="a" href="#">
        learn about sharing
      </Text>
    </Group>
  );
};

export default LearnAboutSharing;

const useStyles = createStyles((theme) => ({
  leftGroup: {
    gap: "0.5rem",
  },
  learnMore: {
    fontSize: "0.875rem",
    "&:hover": {
      textDecoration: "underline",
    },
  },
}));
