import { Divider } from "@mantine/core";
import { Fragment } from "react";
import CopyLink from "../../components/CopyLink";
import FooterStrip from "../../components/FooterStrip";
import LearnAboutSharing from "../../components/LearnAboutSharing";
import { ModalType } from "../../types";
import InvitedUserList from "./InvitedUserList";
import InviteUserSearch from "./InviteUserSearch";
import ShareToWeb from "./ShareToWeb";

interface AccessControlModalProps {
  updateModalType: (modalType: ModalType) => void;
}

const AccessControlModal: React.FC<AccessControlModalProps> = ({
  updateModalType,
}) => {
  return (
    <Fragment>
      <ShareToWeb />
      <Divider />
      <InviteUserSearch updateModalType={updateModalType} />
      <InvitedUserList />
      <Divider />
      <FooterStrip
        leftItems={<LearnAboutSharing />}
        rightItems={<CopyLink />}
      />
    </Fragment>
  );
};

export default AccessControlModal;
