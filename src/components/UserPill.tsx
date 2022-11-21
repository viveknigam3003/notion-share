import { ActionIcon, Box, createStyles } from "@mantine/core";
import { HiX } from "react-icons/hi";
import { User } from "../types";

interface UserPillProps {
  /**
   * User object to render
   */
  selectedUser: User;
  /**
   * Callback to handle when the user is removed
   */
  handleRemove: (id: string) => void;
}

const UserPill: React.FC<UserPillProps> = ({ selectedUser, handleRemove }) => {
  const { classes } = useStyles();

  return (
    <Box className={classes.tag} key={selectedUser.id}>
      {selectedUser.name}
      <ActionIcon
        color={"gray"}
        variant="light"
        className={classes.tagButton}
        onClick={() => handleRemove(selectedUser.id)}
      >
        <HiX />
      </ActionIcon>
    </Box>
  );
};

export default UserPill;

const useStyles = createStyles((theme) => ({
  tag: {
    display: "flex",
    alignItems: "center",
    margin: "0 4px 4px 0",
    borderRadius: "5px",
    padding: "2px 4px",
    whiteSpace: "nowrap",
    fontSize: "0.75rem",
    backgroundColor: theme.colors.gray[3],
  },
  tagButton: {
    padding: "0px",
    height: "10px",
    marginLeft: "2px",
    minHeight: "10px",
    fontSize: "0.5rem",
    width: "10px",
    minWidth: "10px",
    backgroundColor: theme.colors.gray[3],
    "&:hover": {
      backgroundColor: theme.colors.gray[3],
    },
  },
}));
