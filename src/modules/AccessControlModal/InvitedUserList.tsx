import { Avatar, Group, Stack } from "@mantine/core";
import OSlashLogo from "../../assets/oslash_logo.png";
import AccessSelector from "../../components/AccessSelector";
import IconTextGroup from "../../components/IconTextGroup";
import ModalSection from "../../components/ModalSection";
import { PERMISSION_LEVEL } from "../../types";

interface Props {}

const data = [
  {
    username: "Everyone at OSlash",
    avatar: OSlashLogo,
    description: "25 workspace members",
  },
  {
    username: "Tom Cook",
    description: "tom.cook@oslash.com",
  },
];

const InvitedUserList = (props: Props) => {
  return (
    <ModalSection pt="0">
      <Stack>
        {data.map((user) => (
          <Group position="apart" key={user.username}>
            <IconTextGroup
              title={user.username}
              description={user.description}
              leftNode={
                <Avatar radius={"xl"} src={user.avatar} alt={user.username} />
              }
            />
            <AccessSelector defaultValue={PERMISSION_LEVEL.FULL}/>
          </Group>
        ))}
      </Stack>
    </ModalSection>
  );
};

export default InvitedUserList;
