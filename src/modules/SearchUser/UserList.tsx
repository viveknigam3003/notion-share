import { Box, createStyles } from "@mantine/core";
import { Fragment } from "react";
import EmptyState from "../../components/EmptyState";
import ItemGroup from "../../components/ItemGroup";
import { User } from "../../types";

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
}));
