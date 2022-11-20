import { Box, Button, createStyles, Group } from "@mantine/core";
import { useEffect, useRef, useState } from "react";
import { updatePageConfig } from "../../apis/pages";
import { getUsers } from "../../apis/users";
import AccessSelector from "../../components/AccessSelector";
import FooterStrip from "../../components/FooterStrip";
import LearnAboutSharing from "../../components/LearnAboutSharing";
import { ModalType, PERMISSION_LEVEL, User } from "../../types";
import SearchInput from "./SearchInput";
import UserList from "./UserList";

interface Props {
  updateModalType: (type: ModalType) => void;
}

const SearchUserModal: React.FC<Props> = ({ updateModalType }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [selectedUsers, setSelectedUsers] = useState<User[]>([]);
  const [permission, setPermission] = useState<PERMISSION_LEVEL>(
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

  const handleInvite = () => {
    const invites = selectedUsers.map((user) => ({
      id: user.id,
      permission,
    }));
    updatePageConfig(invites);
    updateModalType(ModalType.NONE);
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
            value={permission}
            onChange={(v: PERMISSION_LEVEL) => setPermission(v)}
          />
          <Button
            size="xs"
            color="gray"
            variant="default"
            disabled={permission === PERMISSION_LEVEL.NO_ACCESS}
            onClick={handleInvite}
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
