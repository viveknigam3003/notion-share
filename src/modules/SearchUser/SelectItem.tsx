import { Box, createStyles, Group, Text } from "@mantine/core";
import { getHotkeyHandler } from "@mantine/hooks";
import { useEffect, useRef } from "react";
import UserAvatar from "../../components/UserAvatar";
import { User } from "../../types";

const SelectItem: React.FC<User & { onSelect: (id: string) => void, selected: boolean }> = ({
  id,
  users,
  avatar,
  name,
  onSelect,
  selected,
}) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const { classes } = useStyles();

  useEffect(() => {
    if (selected) {
      itemRef.current?.focus();
    }
  }, [selected]);

  return (
    <Box
      className={classes.root}
      onClick={() => onSelect(id)}
      tabIndex={0}
      onKeyDown={getHotkeyHandler([
        ["Enter", () => onSelect(id)],
        ["Space", () => onSelect(id)],
      ])}
      ref={itemRef}
    >
      <Group noWrap spacing={"xs"}>
        <UserAvatar
          src={avatar}
          isGroup={users && users?.length > 0}
          alt={name}
          size="sm"
        />
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
    "&:focus:not(:focus-visible)": {
      outline: "none",
    },
    "&:focus-visible": {
      outline: "none",
      backgroundColor: theme.colors.gray[1],
    },
  },
}));
