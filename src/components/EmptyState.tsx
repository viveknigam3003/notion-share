import { Box, createStyles } from "@mantine/core";
import React from "react";

interface EmptyStateProps {
  /**
   * Boolean to show/hide empty state
   */
  noUsersFound?: boolean;
  /**
   * Message to show when the search returns no results
   */
  noUsersFoundMessage?: string;
  /**
   * Message to show when search is empty but no more users left to add
   */
  emptyStatePrompt?: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({
  noUsersFound,
  noUsersFoundMessage = "No users or groups found",
  emptyStatePrompt = "Start typing names, emails, or groups to search",
}) => {
  const { classes } = useStyles();
  return (
    <Box className={classes.root}>
      {noUsersFound ? noUsersFoundMessage : emptyStatePrompt}
    </Box>
  );
};
export default EmptyState;

const useStyles = createStyles((theme) => ({
  root: {
    fontSize: "0.75rem",
    color: theme.colors.gray[6],
    textAlign: "center",
  },
}));
