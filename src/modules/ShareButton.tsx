import { Button, ButtonProps, createStyles, Popover } from "@mantine/core";
import { useState } from "react";
import { HiShare } from "react-icons/hi";
import { ModalType } from "../types";
import AccessControlModal, {
  AccessControlModalProps,
} from "./AccessControlModal";
import SearchUserModal, { SearchUserModalProps } from "./SearchUser";

type ShareProps = Omit<
  SearchUserModalProps & AccessControlModalProps,
  "updateModalType"
>;

const DropdownContent: React.FC<ShareProps> = ({
  onInvite,
  onPermissionChange,
  onRemove,
  onSelect,
  users,
  selectedUsers,
  permission,
  sharedUsers,
  onUserPermissionChange,
}) => {
  const [modalOpened, setModalOpened] = useState<ModalType>(ModalType.NONE);

  const updateModalType = (modalType: ModalType) => {
    setModalOpened(modalType);
  };

  switch (modalOpened) {
    case ModalType.SEARCH_USER:
      return (
        <SearchUserModal
          updateModalType={updateModalType}
          onInvite={onInvite}
          onPermissionChange={onPermissionChange}
          onRemove={onRemove}
          onSelect={onSelect}
          users={users}
          selectedUsers={selectedUsers}
          permission={permission}
        />
      );
    default:
      return (
        <AccessControlModal
          updateModalType={updateModalType}
          sharedUsers={sharedUsers}
          onUserPermissionChange={onUserPermissionChange}
        />
      );
  }
};

const ShareButton: React.FC<ShareProps & { buttonStyles?: ButtonProps }> = ({
  buttonStyles,
  ...props
}) => {
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
        <Button color="dark" rightIcon={<HiShare />} {...buttonStyles}>
          Share
        </Button>
      </Popover.Target>
      <Popover.Dropdown className={classes.dropdown}>
        <DropdownContent {...props} />
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
