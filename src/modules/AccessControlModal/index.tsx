import { Divider } from "@mantine/core";
import { Fragment } from "react";
import CopyLink from "../../components/CopyLink";
import FooterStrip from "../../components/FooterStrip";
import LearnAboutSharing from "../../components/LearnAboutSharing";
import { ModalType, PageShareObject } from "../../types";
import InvitedUserList from "./InvitedUserList";
import InviteUserSearch from "./InviteUserSearch";
import ShareToWeb from "./ShareToWeb";

export interface AccessControlModalProps {
  sharedUsers: PageShareObject[];
  updateModalType: (modalType: ModalType) => void;
  onUserPermissionChange: (id: string, permission: string) => void;
}

const AccessControlModal: React.FC<AccessControlModalProps> = ({
  sharedUsers,
  updateModalType,
  onUserPermissionChange,
}) => {
  return (
    <Fragment>
      <ShareToWeb />
      <Divider />
      <InviteUserSearch updateModalType={updateModalType} />
      <InvitedUserList
        userList={sharedUsers}
        handlePermissionChange={onUserPermissionChange}
      />
      <Divider />
      <FooterStrip
        leftItems={<LearnAboutSharing />}
        rightItems={<CopyLink />}
      />
    </Fragment>
  );
};

export default AccessControlModal;
