import { Box, createStyles } from "@mantine/core";
import { Fragment } from "react";
import { User } from "../../types";
import ItemGroup from "./ItemGroup";

interface EmptyStateProps {
  noUsersFound?: boolean;
  noUsersFoundMessage?: string;
  emptyStatePrompt?: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({
  noUsersFound,
  noUsersFoundMessage = "No users or groups found",
  emptyStatePrompt = "Start typing names, emails, or groups to search",
}) => {
  const { classes } = useStyles();
  return (
    <Box className={classes.noUsers}>
      {noUsersFound ? noUsersFoundMessage : emptyStatePrompt}
    </Box>
  );
};

interface Props {
  users: User[];
  onSelect: (id: string) => void;
  showEmptyState?: boolean;
}

const UserList: React.FC<Props> = ({ users, onSelect, showEmptyState }) => {
  const { classes } = useStyles();
  return (
    <Box className={classes.userList}>
      {users.length ? (
        <Fragment>
          <ItemGroup
            title="Search a person"
            data={users.filter((user) => !user.users)}
            onSelect={onSelect}
          />
          <ItemGroup
            title="Search a group"
            data={users.filter((user) => user.users && user.users.length > 0)}
            onSelect={onSelect}
          />
        </Fragment>
      ) : (
        <EmptyState noUsersFound={showEmptyState} />
      )}
    </Box>
  );
};

export default UserList;

const useStyles = createStyles((theme) => ({
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
}));
