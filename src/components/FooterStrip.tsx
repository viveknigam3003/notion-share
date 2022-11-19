import { Box, Button, createStyles, Group, Text } from "@mantine/core";
import ModalSection from "./ModalSection";
import { HiOutlineQuestionMarkCircle, HiOutlineLink } from "react-icons/hi";

interface Props {}

const FooterStrip = (props: Props) => {
  const { classes } = useStyles();
  return (
    <ModalSection className={classes.root} pt="0.5rem" pb="0.5rem">
      <Group align={"center"} position="apart">
        <Group className={classes.leftGroup}>
          <HiOutlineQuestionMarkCircle fontSize={"14px"} color="gray" />
          <Text className={classes.learnMore} color="gray">
            learn about sharing
          </Text>
        </Group>
        <Button
          className={classes.button}
          variant="subtle"
          color={"gray"}
          size="xs"
          leftIcon={<HiOutlineLink />}
        >
          Copy link
        </Button>
      </Group>
    </ModalSection>
  );
};

export default FooterStrip;

const useStyles = createStyles((theme) => ({
  root: {
    backgroundColor: theme.colors.gray[1],
  },
  leftGroup: {
    gap: "0.5rem",
  },
  learnMore: {
    fontSize: "0.875rem",
  },
  button: {
    height: "2rem",
    fontSize: "0.875rem",
    padding: "0.25rem",
    color: theme.colors.dark[5],
  },
}));
