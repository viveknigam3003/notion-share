import { Button, createStyles, TextInput } from "@mantine/core";
import ModalSection from "../components/ModalSection";

interface Props {}

const InviteUserSearch = (props: Props) => {
  const { classes } = useStyles();
  return (
    <ModalSection>
      <TextInput
        className={classes.inputWrapper}
        placeholder='People, emails, groups'
        rightSection={
          <Button
            variant="default"
            className={classes.inputWrapperActionButton}
          >
            Invite
          </Button>
        }
      />
    </ModalSection>
  );
};

export default InviteUserSearch;

const useStyles = createStyles((theme) => ({
  inputWrapper: {
    input: {
      height: "2.625rem",
      fontSize: "1rem",
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
  },
}));
