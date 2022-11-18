import { Box, createStyles, Group, Switch, Text } from "@mantine/core";
import { HiGlobe } from "react-icons/hi";

interface Props {}

const IconTextGroup = (props: Props) => {
  const { classes } = useStyles();
  return (
    <Box>
      <Group align={"center"} position='apart'>
        <Group align={"center"}>
          <HiGlobe fontSize={"2rem"} color="gray" />
          <Box className={classes.root}>
            <Text className={classes.title}>Share to web</Text>
            <Text className={classes.description}>
              Publish and share link with anyone
            </Text>
          </Box>
        </Group>
        <Switch color={'violet'} className={classes.switch} />
      </Group>
    </Box>
  );
};

export default IconTextGroup;

const useStyles = createStyles((theme) => ({
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
  switch: {
    '.mantine-Switch-body': {
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
