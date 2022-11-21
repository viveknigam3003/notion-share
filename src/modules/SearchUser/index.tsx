import { Box, Button, createStyles, Group } from "@mantine/core";
import { useEffect, useRef, useState } from "react";
import AccessSelector from "../../components/AccessSelector";
import FooterStrip from "../../components/FooterStrip";
import LearnAboutSharing from "../../components/LearnAboutSharing";
import { ModalType, PERMISSION_LEVEL, User } from "../../types";
import SearchInput from "./SearchInput";
import UserList from "./UserList";

export interface SearchUserModalProps {
  /**
   * Array of users
   */
  users: User[];
  /**
   * Array of selected users
   */
  selectedUsers: User[];
  /**
   * Permission level for the selected group of users/group.
   */
  permission: PERMISSION_LEVEL;
  /**
   * Callback to update the modal opened - One modal is for all the sharing options, other is for searching users.
   */
  updateModalType: (type: ModalType) => void;
  /**
   * Callback to handle when a user is selected in Search modal
   */
  onSelect: (userId: string) => User[];
  /**
   * Callback to handle when a user is removed in Search modal
   */
  onRemove: (user: string) => User[];
  /**
   * Callback to handle the permission level of the selected users
   */
  onInvite: () => void;
  /**
   * Callback to change the permission level of the selected users
   */
  onPermissionChange: (permission: PERMISSION_LEVEL) => void;
}

const SearchUserModal: React.FC<SearchUserModalProps> = ({
  users,
  selectedUsers,
  permission,
  updateModalType,
  onRemove,
  onInvite,
  onSelect,
  onPermissionChange,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [search, setSearch] = useState("");
  const [filteredUsers, setFilteredUsers] = useState<User[]>(users);
  const { classes } = useStyles();

  useEffect(() => {
    setFilteredUsers(users);
  }, [users]);

  /**
   * Filter users based on search query.
   * @param search Search String
   */
  const searchUsers = (search: string) => {
    setSearch(search);
    const filterResults = users.filter(
      (user) =>
        user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.email?.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredUsers(filterResults);
  };

  const handleSelect = (id: string) => {
    const newUsers = onSelect(id);

    // Clear search
    setSearch("");
    setFilteredUsers(newUsers);

    // Focus on input
    inputRef.current?.focus();
  };

  const handleRemove = (user: string) => {
    const newArray = onRemove(user);

    setFilteredUsers(newArray);

    inputRef.current?.focus();
  };

  const handleInvite = () => {
    onInvite();
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
          <AccessSelector value={permission} onChange={onPermissionChange} />
          <Button
            size="xs"
            color="gray"
            variant="default"
            disabled={
              permission === PERMISSION_LEVEL.NO_ACCESS ||
              selectedUsers.length === 0
            }
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
