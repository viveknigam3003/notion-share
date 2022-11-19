import { Button, createStyles, Popover } from "@mantine/core";
import { useState } from "react";
import { HiShare } from "react-icons/hi";
import { ModalType } from "../types";
import AccessControlModal from "./AccessControlModal";
import SearchUserModal from "./SearchUser";

interface Props {}

const DropdownContent: React.FC = () => {
  const [modalOpened, setModalOpened] = useState<ModalType>(ModalType.NONE);

  const updateModalType = (modalType: ModalType) => {
    setModalOpened(modalType);
  };

  switch (modalOpened) {
    case ModalType.SEARCH_USER:
      return <SearchUserModal />;
    default:
      return <AccessControlModal updateModalType={updateModalType} />;
  }
};

const ShareButton = (props: Props) => {
  const { classes } = useStyles();

  return (
    <Popover
      width={512}
      trapFocus
      position="bottom-start"
      shadow="md"
      transition={"pop-top-right"}
    >
      <Popover.Target>
        <Button color="dark" rightIcon={<HiShare />}>
          Share
        </Button>
      </Popover.Target>
      <Popover.Dropdown className={classes.dropdown}>
        <DropdownContent />
      </Popover.Dropdown>
    </Popover>
  );
};

export default ShareButton;

const useStyles = createStyles((theme) => ({
  dropdown: {
    borderRadius: "0.5rem",
    padding: 0,
  },
}));
