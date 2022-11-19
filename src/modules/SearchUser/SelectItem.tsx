import { Avatar, Box, createStyles, Group, Text } from "@mantine/core";
import { User } from "../../types";

const SelectItem: React.FC<User & {onSelect: (id: string) => void}> = ({ id, users, avatar, name, onSelect }) => {
  const { classes } = useStyles();
  return (
    <Box className={classes.root} onClick={() => onSelect(id)}>
      <Group noWrap spacing={"xs"}>
        {users && users.length > 0 ? (
          <Avatar size={"sm"} src={avatar} color="violet">
            {avatar}
          </Avatar>
        ) : (
          <Avatar size={"sm"} src={avatar} radius="xl" />
        )}
        <Text>{name}</Text>
      </Group>
    </Box>
  );
};

export default SelectItem;

const useStyles = createStyles((theme) => ({
  root: {
    padding: "0.5rem 0.5rem 0.5rem 0.5rem",
    cursor: "pointer",
    borderRadius: "0.25rem",
    "&:hover": {
      backgroundColor: theme.colors.gray[1],
    },
  },
}));