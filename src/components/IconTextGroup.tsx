import { Box, createStyles, Group, Text } from "@mantine/core";

interface IconTextGroupProps {
  /**
   * Title for the group. Could be a name or a label
   */
  title: string;
  /**
   * Secondary line of text to show under the title
   */
  description?: string;
  /**
   * Icon to show on the left side of the group
   */
  leftNode?: React.ReactNode;
}

const IconTextGroup: React.FC<IconTextGroupProps> = ({
  title,
  description,
  leftNode,
}) => {
  const { classes } = useStyles();
  return (
    <Group align={"center"} className={classes.group}>
      {leftNode}
      <Box className={classes.root}>
        <Text className={classes.title}>{title}</Text>
        <Text className={classes.description}>{description}</Text>
      </Box>
    </Group>
  );
};

export default IconTextGroup;

const useStyles = createStyles((theme) => ({
  group: {
    gap: "0.5rem",
  },
  root: {
    lineHeight: "1.25rem",
  },
  title: {
    fontSize: "1rem",
  },
  description: {
    fontSize: "0.875rem",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[2]
        : theme.colors.gray[6],
  },
}));
