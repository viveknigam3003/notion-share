import { Box, createStyles, Group, Text } from "@mantine/core";

interface Props {
  title: string;
  description?: string;
  leftNode?: React.ReactNode;
}

const IconTextGroup: React.FC<Props> = ({ title, description, leftNode }) => {
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
