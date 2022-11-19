import { Button, Divider } from "@mantine/core";
import { Fragment } from "react";
import { ModalType } from "../types";
import FooterStrip from "../components/FooterStrip";
import InvitedUserList from "./InvitedUserList";
import InviteUserSearch from "./InviteUserSearch";
import ShareToWeb from "./ShareToWeb";
import { HiOutlineLink } from "react-icons/hi";
import CopyLink from "../components/CopyLink";
import LearnAboutSharing from "../components/LearnAboutSharing";

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
