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
  /**
   * Array of users/groups with their access level
   */
  sharedUsers: PageShareObject[];
  /**
   * Callback to update the modal opened - One modal is for all the sharing options, other is for searching users.
   */
  updateModalType: (modalType: ModalType) => void;
  /**
   * Callback to handle when a users access level is changed in Sharing modal
   */
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
