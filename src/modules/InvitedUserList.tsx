import { Avatar, Group } from "@mantine/core";
import OSlashLogo from "../assets/oslash_logo.png";
import AccessSelector from "../components/AccessSelector";
import IconTextGroup from "../components/IconTextGroup";
import ModalSection from "../components/ModalSection";

interface Props {}

const InvitedUserList = (props: Props) => {
  return (
    <ModalSection>
      <Group position="apart">
        <IconTextGroup
          title="Everyone at OSlash"
          description="25 workspace members"
          leftNode={<Avatar radius={"xl"} src={OSlashLogo} alt="OSlash" />}
        />
        <AccessSelector />
      </Group>
    </ModalSection>
  );
};

export default InvitedUserList;
