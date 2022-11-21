import { createStyles, Group, Text } from "@mantine/core";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";
import ModalSection from "./ModalSection";

interface Props {
  /**
   * Left side items for the footer strip
   */
  leftItems?: React.ReactNode;
  /**
   * Right side items for the footer strip
   */
  rightItems?: React.ReactNode;
}

const FooterStrip: React.FC<Props> = ({ leftItems, rightItems }) => {
  const { classes } = useStyles();
  return (
    <ModalSection className={classes.root} pt="0.5rem" pb="0.5rem">
      <Group align={"center"} position="apart">
        {leftItems}
        {rightItems}
      </Group>
    </ModalSection>
  );
};

export default FooterStrip;

const useStyles = createStyles((theme) => ({
  root: {
    backgroundColor: theme.colors.gray[1],
  },
}));
