import { createStyles, Input, TextInput } from "@mantine/core";
import { forwardRef } from "react";
import { User } from "../../types";
import UserPill from "./UserPill";

interface Props extends React.ComponentPropsWithoutRef<"div"> {
  searchValue: string;
  selectedUsers: User[];
  handleSearch: (search: string) => void;
  removeSelected: (id: string) => void;
  placeholder?: string;
}

const SearchInput = forwardRef<HTMLInputElement, Props>(
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
          <UserPill key={user.id} selectedUser={user} handleRemove={removeSelected} />
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
