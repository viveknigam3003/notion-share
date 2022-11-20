import { createStyles, Group, Stack } from "@mantine/core";
import AccessSelector from "../../components/AccessSelector";
import IconTextGroup from "../../components/IconTextGroup";
import ModalSection from "../../components/ModalSection";
import UserAvatar from "../../components/UserAvatar";
import { PageShareObject, PERMISSION_LEVEL } from "../../types";

interface Props {
  userList: PageShareObject[];
  handlePermissionChange: (id: string, permission: string) => void;
}

const InvitedUserList: React.FC<Props> = ({
  userList,
  handlePermissionChange,
}) => {
  const { classes } = useStyles();

  return (
    <ModalSection pt="0" className={classes.root}>
      <Stack>
        {userList.map((user) => (
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
              onChange={(v: PERMISSION_LEVEL) =>
                handlePermissionChange(user.id, v)
              }
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
    maxHeight: "12rem",
    overflowY: "auto",
  },
}));
