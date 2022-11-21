import { createStyles, Group, Stack } from "@mantine/core";
import AccessSelector from "../../components/AccessSelector";
import IconTextGroup from "../../components/IconTextGroup";
import ModalSection from "../../components/ModalSection";
import UserAvatar from "../../components/UserAvatar";
import { PageShareObject, PERMISSION_LEVEL } from "../../types";

interface InvitedUserListProps {
  /**
   * Array of users/groups with their access level
   */
  userList: PageShareObject[];
  /**
   * Callback to handle when a users access level is changed in Sharing modal
   */
  handlePermissionChange: (id: string, permission: string) => void;
}

const InvitedUserList: React.FC<InvitedUserListProps> = ({
  userList,
  handlePermissionChange,
}) => {
  const { classes } = useStyles();

  return (
    <ModalSection pt="0" className={classes.root}>
      <Stack>
        {userList.map((user) => (
          <Group position="apart" key={user.id} className={classes.rowItem}>
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
  rowItem: {
    "& :focus": {
      borderRadius: theme.radius.sm,
      outline: `2px solid ${theme.colors.violet[5]}`,
    },
  },
}));
