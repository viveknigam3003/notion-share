import { Box, Button, createStyles, Group } from "@mantine/core";
import { useEffect, useRef, useState } from "react";
import { getUsers } from "../../apis/getUsers";
import AccessSelector from "../../components/AccessSelector";
import FooterStrip from "../../components/FooterStrip";
import LearnAboutSharing from "../../components/LearnAboutSharing";
import { PERMISSION_LEVEL, User } from "../../types";
import SearchInput from "./SearchInput";
import UserList from "./UserList";

interface Props {}

const SearchUserModal = (props: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [selectedUsers, setSelectedUsers] = useState<User[]>([]);
  const [permissionLevel, setPermissionLevel] = useState<PERMISSION_LEVEL>(
    PERMISSION_LEVEL.VIEW
  );
  const { classes } = useStyles();

  useEffect(() => {
    // Get users from db
    if (users.length === 0) {
      const data = getUsers();
      setUsers(data);
      setFilteredUsers(data);
    }
  }, []);

  const searchUsers = (search: string) => {
    setSearch(search);
    const f = users.filter(
      (user) =>
        user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.email?.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredUsers(f);
  };

  const handleSelect = (id: string) => {
    // Find user in users array
    const user = users.find((user) => user.id === id);

    // If user is not found, return
    if (!user) return;

    // Add user to selectedUsers array
    setSelectedUsers([...selectedUsers, user]);

    // Remove user from users array
    const newUsers = users.filter((user) => user.id !== id);
    setUsers(newUsers);

    // Clear search
    setSearch("");
    setFilteredUsers(newUsers);

    // Focus on input
    inputRef.current?.focus();
  };

  const handleRemove = (id: string) => {
    // Find user in selectedUsers array
    const user = selectedUsers.find((user) => user.id === id);

    // If user is not found, return
    if (!user) return;

    // Remove user from selectedUsers array
    setSelectedUsers(selectedUsers.filter((user) => user.id !== id));

    // Add user to users array
    const newArray = [...users, user].sort((a, b) =>
      Number(a) > Number(b) ? 1 : -1
    );

    setUsers(newArray);
    setFilteredUsers(newArray);

    // Focus on input
    inputRef.current?.focus();
  };

  return (
    <Box>
      <Box className={classes.root}>
        <SearchInput
          ref={inputRef}
          searchValue={search}
          selectedUsers={selectedUsers}
          handleSearch={searchUsers}
          removeSelected={handleRemove}
        />
        <Group spacing={"xs"} align={"start"}>
          <AccessSelector
            value={permissionLevel}
            onChange={(v: PERMISSION_LEVEL) => setPermissionLevel(v)}
          />
          <Button
            size="xs"
            color="gray"
            variant="default"
            disabled={permissionLevel === PERMISSION_LEVEL.NO_ACCESS}
          >
            Invite
          </Button>
        </Group>
      </Box>
      <UserList
        users={filteredUsers}
        onSelect={handleSelect}
        showEmptyState={search.length > 0}
      />
      <FooterStrip leftItems={<LearnAboutSharing />} />
    </Box>
  );
};

export default SearchUserModal;

const useStyles = createStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: theme.colors.gray[1],
    padding: "0.75rem 1rem 0.75rem 1rem",
  },
}));
