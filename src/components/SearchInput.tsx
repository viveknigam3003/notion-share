import { createStyles, Input, TextInput } from "@mantine/core";
import { getHotkeyHandler } from "@mantine/hooks";
import { forwardRef } from "react";
import { User } from "../types";
import UserPill from "./UserPill";

interface SearchInputProps extends React.ComponentPropsWithoutRef<"div"> {
  /**
   * Search value for the input
   */
  searchValue: string;
  /**
   * List of selected users to show as pills
   */
  selectedUsers: User[];
  /**
   * Callback to handle when the search input changes
   */
  handleSearch: (search: string) => void;
  /**
   * Callback to handle when a user is removed from the selected list
   */
  removeSelected: (id: string) => void;
  /**
   * Placeholder text for the search input
   */
  placeholder?: string;
}

const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  (
    {
      searchValue,
      selectedUsers,
      removeSelected,
      handleSearch,
      placeholder = "Search emails, names or groups",
    },
    ref: any
  ) => {
    const { classes } = useStyles({ hasUsers: selectedUsers.length > 0 });
    return (
      <Input.Wrapper className={classes.inputWrapper}>
        {selectedUsers.map((user) => (
          <UserPill
            key={user.id}
            selectedUser={user}
            handleRemove={removeSelected}
          />
        ))}
        <TextInput
          ref={ref}
          type="text"
          classNames={{ input: classes.inputField }}
          variant="filled"
          placeholder={selectedUsers.length > 0 ? "" : placeholder}
          autoFocus
          value={searchValue}
          onChange={(e) => handleSearch(e.currentTarget.value)}
          onKeyDown={getHotkeyHandler([
            ['Backspace', () => {
              if (searchValue === "" && selectedUsers.length > 0) {
                removeSelected(selectedUsers[selectedUsers.length - 1].id);
              } else {
                handleSearch(searchValue.slice(0, -1));
              }
            }],
          ])}
        />
      </Input.Wrapper>
    );
  }
);

export default SearchInput;

const useStyles = createStyles(
  (theme, { hasUsers }: { hasUsers: boolean }) => ({
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
      width: `${hasUsers ? "4rem" : "15rem"}`,
      minWidth: "50%",
      height: "24px",
      minHeight: "24px",
      padding: 0,
      "&:focus": {
        outline: "none",
      },
    },
  })
);
