import { createStyles, Group, Stack } from "@mantine/core";
import { useEffect, useState } from "react";
import { getAccessData } from "../../apis/getAccessData";
import {
  removePagePermissionForUser,
  updatePageConfig,
  updatePagePermissionForUser,
} from "../../apis/pages";
import AccessSelector from "../../components/AccessSelector";
import IconTextGroup from "../../components/IconTextGroup";
import ModalSection from "../../components/ModalSection";
import UserAvatar from "../../components/UserAvatar";
import { PageShareObject, PERMISSION_LEVEL } from "../../types";

interface Props {}

const InvitedUserList = (props: Props) => {
  const { classes } = useStyles();
  const [pageShareData, setPageShareData] = useState<PageShareObject[]>([]);

  useEffect(() => {
    const data = getAccessData();
    setPageShareData(data);
  }, []);

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
    <ModalSection pt="0" className={classes.root}>
      <Stack>
        {pageShareData.map((user) => (
          <Group position="apart" key={user.id}>
            <IconTextGroup
              title={user.name}
              description={
                user.users ? `${user.users.length} members` : user.email
              }
              leftNode={<UserAvatar src={user.avatar} alt={user.name} />}
            />
            <AccessSelector
              value={user.permission}
              onChange={(v: PERMISSION_LEVEL) => updatePermission(user.id, v)}
            />
          </Group>
        ))}
      </Stack>
    </ModalSection>
  );
};

export default InvitedUserList;

const useStyles = createStyles((theme) => ({
  root: {
    maxHeight: '12rem',
    overflowY: 'auto',
  }
}));