import { Divider } from "@mantine/core";
import { Fragment } from "react";
import { ModalType } from "../types";
import FooterStrip from "./FooterStrip";
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
      <FooterStrip />
    </Fragment>
  );
};

export default AccessControlModal;
