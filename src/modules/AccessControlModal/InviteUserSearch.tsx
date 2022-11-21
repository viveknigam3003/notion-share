import { Button, createStyles, TextInput } from "@mantine/core";
import ModalSection from "../../components/ModalSection";
import { ModalType } from "../../types";

interface InviteUserSearchProps {
  /**
   * Callback to handle and update the type of modal opened
   */
  updateModalType: (modalType: ModalType) => void;
}

const InviteUserSearch = (props: InviteUserSearchProps) => {
  const { classes } = useStyles();

  const handleClick = () => {
    props.updateModalType(ModalType.SEARCH_USER);
  };

  const handleChange = () => {
    props.updateModalType(ModalType.SEARCH_USER);
  };

  return (
    <ModalSection>
      <TextInput
        className={classes.inputWrapper}
        placeholder="People, emails, groups"
        rightSection={
          <Button
            variant="default"
            className={classes.inputWrapperActionButton}
          >
            Invite
          </Button>
        }
        onClick={handleClick}
        onChange={handleChange}
      />
    </ModalSection>
  );
};

export default InviteUserSearch;

const useStyles = createStyles((theme) => ({
  inputWrapper: {
    border: `1px solid ${theme.colors.violet[5]}`,
    borderRadius: "0.375rem",
    input: {
      height: "2.625rem",
      fontSize: "1rem",
      border: "none",
    },
    ".mantine-TextInput-rightSection": {
      width: "inherit",
    },
  },
  inputWrapperActionButton: {
    height: "2.625rem",
    borderRadius: "0 0.375rem 0.375rem 0",
    backgroundColor: theme.colors.gray[0],
    fontSize: "1rem",
    lineHeight: "1.5rem",
    borderRight: 0,
    borderTop: 0,
    borderBottom: 0,
    "&:focus": {
      outlineOffset: 0,
    },
  },
}));
