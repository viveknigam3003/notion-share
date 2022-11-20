import { Box, Button, createStyles, Group } from "@mantine/core";
import { Fragment, useRef, useState } from "react";
import AccessSelector from "../../components/AccessSelector";
import FooterStrip from "../../components/FooterStrip";
import LearnAboutSharing from "../../components/LearnAboutSharing";
import { UserDB } from "../../data/UserDB";
import { PERMISSION_LEVEL, User } from "../../types";
import ItemGroup from "./ItemGroup";
import SearchInput from "./SearchInput";

interface Props {}

const SearchUserModal = (props: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState<User[]>(UserDB);
  const [filteredUsers, setFilteredUsers] = useState<User[]>(users);
  const [selectedUsers, setSelectedUsers] = useState<User[]>([]);
  const [permissionLevel, setPermissionLevel] = useState<PERMISSION_LEVEL>(
    PERMISSION_LEVEL.VIEW
  );
  const { classes } = useStyles({ hasUsers: selectedUsers.length > 0 });

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
      <Box className={classes.userList}>
        {filteredUsers.length ? (
          <Fragment>
            <ItemGroup
              title="Search a person"
              data={filteredUsers.filter((user) => !user.users)}
              onSelect={handleSelect}
            />
            <ItemGroup
              title="Search a group"
              data={filteredUsers.filter(
                (user) => user.users && user.users.length > 0
              )}
              onSelect={handleSelect}
            />
          </Fragment>
        ) : (
          <Box className={classes.noUsers}>
            {search.length
              ? "No users or groups found"
              : "Start typing names, emails, or groups to search"}
          </Box>
        )}
      </Box>
      <FooterStrip leftItems={<LearnAboutSharing />} />
    </Box>
  );
};

export default SearchUserModal;

const useStyles = createStyles(
  (theme, { hasUsers }: { hasUsers: boolean }) => ({
    root: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      backgroundColor: theme.colors.gray[1],
      padding: "0.75rem 1rem 0.75rem 1rem",
    },

    userList: {
      padding: "1rem",
    },
    noUsers: {
      fontSize: "0.75rem",
      color: theme.colors.gray[6],
      textAlign: "center",
    },
  })
);
