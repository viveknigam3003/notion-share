import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/700.css";
import { Box, createStyles } from "@mantine/core";
import { useEffect, useState } from "react";
import { getAccessData } from "./apis/getAccessData";
import {
  removePagePermissionForUser,
  updatePageConfig,
  updatePagePermissionForUser
} from "./apis/pages";
import { getUsers } from "./apis/users";
import "./App.css";
import { config } from "./db/config";
import { initDB } from "./db/init";
import { PageDB } from "./db/PageData";
import { UserDB } from "./db/UserData";
import ShareButton from "./modules/ShareButton";
import { PageShareObject, PERMISSION_LEVEL, User } from "./types";

function App() {
  const { classes } = useStyles();
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUsers, setSelectedUsers] = useState<User[]>([]);
  const [permission, setPermission] = useState<PERMISSION_LEVEL>(
    PERMISSION_LEVEL.VIEW
  );
  const [pageShareData, setPageShareData] = useState<PageShareObject[]>([]);

  useEffect(() => {
    initDB(config.pageDB, PageDB);
    initDB(config.userDB, UserDB);
  }, []);

  useEffect(() => {
    const accessData = getAccessData();
    // Get users from db
    if (users.length === 0) {
      // Filtering out users who are already added
      const data = getUsers().filter(
        (user) => !accessData.find((d) => d.id === user.id)
      );
      setUsers(data);
    }
  }, []);

  useEffect(() => {
    hydratePageShareData();
  }, []);

  const hydratePageShareData = () => {
    const data = getAccessData();
    setPageShareData(data);
  };

  /**
   * Adds user to selected users list.
   * @param id User ID
   * @returns void
   */
  const handleSelect = (id: string) => {
    // Find user in users array
    const user = users.find((user) => user.id === id);

    // If user is not found, return
    if (!user) {
      throw new Error("User not found");
    }

    // Add user to selectedUsers array
    setSelectedUsers([...selectedUsers, user]);

    // Remove user from users array
    const newUsers = users.filter((user) => user.id !== id);
    setUsers(newUsers);

    return newUsers;
  };

  /**
   * Removes the user from selected users list.
   * @param id User ID
   * @returns void
   */
  const handleRemove = (id: string) => {
    // Find user in selectedUsers array
    const user = selectedUsers.find((user) => user.id === id);

    // If user is not found, return
    if (!user) {
      throw new Error("User not found");
    }

    // Remove user from selectedUsers array
    setSelectedUsers(selectedUsers.filter((user) => user.id !== id));

    // Add user to users array
    const newArray = addUserToList(user);

    setUsers(newArray);
    return newArray;
  };

  /**
   * Updates permission level for selected users.
   */
  const handleInvite = () => {
    const invites = selectedUsers.map((user) => ({
      id: user.id,
      permission,
    }));

    updatePageConfig(invites);
    setSelectedUsers([]);
    hydratePageShareData();
  };

  /**
   * Creates a new array with the user added to the list and sorted by id.
   * @param user User to add to list
   * @returns New users array with the added user
   */
  const addUserToList = (user?: User): User[] => {
    if (!user) {
      throw new Error("User not found");
    }

    const newArray = [...users, user].sort((a, b) =>
      Number(a) > Number(b) ? 1 : -1
    );
    return newArray;
  };

  /**
   * Updates the permission level for a user.
   * @param id User ID
   * @param permission New Permission Level
   */
  const updateUserPermission = (id: string, permission: string) => {
    if (permission === PERMISSION_LEVEL.NO_ACCESS) {
      removePagePermissionForUser(id);

      const user = pageShareData.find((user) => user.id === id);
      const newArray = addUserToList(user);
      setUsers(newArray);
    } else {
      updatePagePermissionForUser(id, permission);
    }

    hydratePageShareData();
  };

  return (
    <Box className={classes.root}>
      <ShareButton
        users={users}
        selectedUsers={selectedUsers}
        permission={permission}
        sharedUsers={pageShareData}
        onSelect={handleSelect}
        onRemove={handleRemove}
        onInvite={handleInvite}
        onPermissionChange={setPermission}
        onUserPermissionChange={updateUserPermission}
      />
    </Box>
  );
}

export default App;

const useStyles = createStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
}));
