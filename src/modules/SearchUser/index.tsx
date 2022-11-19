import {
  ActionIcon,
  Box,
  Button,
  createStyles,
  Group,
  Input,
  TextInput,
} from "@mantine/core";
import { useEffect, useRef, useState } from "react";
import { HiX } from "react-icons/hi";
import AccessSelector from "../../components/AccessSelector";
import { UserDB } from "../../data/UserDB";
import { PERMISSION_LEVEL, User } from "../../types";
import FooterStrip from "../../components/FooterStrip";
import ItemGroup from "./ItemGroup";
import LearnAboutSharing from "../../components/LearnAboutSharing";

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
        <Input.Wrapper className={classes.inputWrapper}>
          {selectedUsers.map((user) => (
            <Box className={classes.tag} key={user.id}>
              {user.name}
              <ActionIcon
                color={"gray"}
                variant="light"
                className={classes.tagButton}
                onClick={() => handleRemove(user.id)}
              >
                <HiX />
              </ActionIcon>
            </Box>
          ))}

          <TextInput
            ref={inputRef}
            type="text"
            classNames={{ input: classes.inputField }}
            variant="filled"
            placeholder={
              selectedUsers.length > 0 ? "" : "Search emails, names or groups"
            }
            autoFocus
            value={search}
            onChange={(e) => searchUsers(e.currentTarget.value)}
          />
        </Input.Wrapper>
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
    inputWrapper: {
      display: "flex",
      width: "18rem",
      maxWidth: "100%",
      backgroundColor: theme.colors.gray[1],
      flexWrap: "wrap",
    },
    inputField: {
      fontSize: "0.75rem",
      appearance: "none",
      border: "none",
      width: `${hasUsers ? "fit-content" : "15rem"}`,
      minWidth: "50%",
      height: "24px",
      minHeight: "24px",
      padding: 0,
      "&:focus": {
        outline: "none",
      },
    },
    tag: {
      display: "flex",
      alignItems: "center",
      margin: "0 4px 4px 0",
      borderRadius: "5px",
      padding: "2px 4px",
      whiteSpace: "nowrap",
      fontSize: "0.75rem",
      backgroundColor: theme.colors.gray[2],
    },
    tagButton: {
      padding: "0px",
      height: "10px",
      marginLeft: "2px",
      minHeight: "10px",
      fontSize: "0.5rem",
      width: "10px",
      minWidth: "10px",
      backgroundColor: theme.colors.gray[2],
      "&:hover": {
        backgroundColor: theme.colors.gray[2],
      },
    },
    userList: {
      padding: "1rem",
    },
  })
);
