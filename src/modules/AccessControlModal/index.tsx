import { Divider } from "@mantine/core";
import { Fragment, useEffect, useState } from "react";
import { getAccessData } from "../../apis/getAccessData";
import {
  removePagePermissionForUser,
  updatePagePermissionForUser,
} from "../../apis/pages";
import CopyLink from "../../components/CopyLink";
import FooterStrip from "../../components/FooterStrip";
import LearnAboutSharing from "../../components/LearnAboutSharing";
import { ModalType, PageShareObject, PERMISSION_LEVEL } from "../../types";
import InvitedUserList from "./InvitedUserList";
import InviteUserSearch from "./InviteUserSearch";
import ShareToWeb from "./ShareToWeb";

interface AccessControlModalProps {
  updateModalType: (modalType: ModalType) => void;
}

const AccessControlModal: React.FC<AccessControlModalProps> = ({
  updateModalType,
}) => {
  const [pageShareData, setPageShareData] = useState<PageShareObject[]>([]);

  useEffect(() => {
    const data = getAccessData();
    setPageShareData(data);
  }, []);

  /**
   * Updates the permission level for a user.
   * @param id User ID
   * @param permission New Permission Level  
   */
  const updatePermission = (id: string, permission: string) => {
    if (permission === PERMISSION_LEVEL.NO_ACCESS) {
      removePagePermissionForUser(id);
    } else {
      updatePagePermissionForUser(id, permission);
    }

    const data = getAccessData();
    setPageShareData(data);
  };

  return (
    <Fragment>
      <ShareToWeb />
      <Divider />
      <InviteUserSearch updateModalType={updateModalType} />
      <InvitedUserList
        userList={pageShareData}
        handlePermissionChange={updatePermission}
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
