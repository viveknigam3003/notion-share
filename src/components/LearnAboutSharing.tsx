import { createStyles, Group, Text } from "@mantine/core";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";

interface LearnAboutSharingProps {
  /**
   * Link to the documentation page
   */
  href?: string;
}

const LearnAboutSharing: React.FC<LearnAboutSharingProps> = ({
  href = "https://github.com/viveknigam3003/notion-share#readme",
}) => {
  const { classes } = useStyles();
  return (
    <Group className={classes.leftGroup}>
      <HiOutlineQuestionMarkCircle fontSize={"14px"} color="gray" />
      <Text
        className={classes.learnMore}
        color="gray"
        component="a"
        href={href}
      >
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
