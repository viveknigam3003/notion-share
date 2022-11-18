import { Group } from "@mantine/core";
import { HiGlobe } from "react-icons/hi";
import IconTextGroup from "../components/IconTextGroup";
import ModalSection from "../components/ModalSection";
import ThemedSwitch from "../components/ThemedSwitch";

interface Props {}

const ShareToWeb = (props: Props) => {
  return (
    <ModalSection>
      <Group align={"center"} position="apart">
        <IconTextGroup
          title={"Share to web"}
          description={"Publish and share link with anyone"}
          leftNode={<HiGlobe fontSize={"2rem"} color="gray" />}
        />
        <ThemedSwitch />
      </Group>
    </ModalSection>
  );
};

export default ShareToWeb;
