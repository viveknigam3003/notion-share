import { Box, Group } from "@mantine/core";
import { HiGlobe } from "react-icons/hi";
import IconTextGroup from "../components/IconTextGroup";
import ThemedSwitch from "../components/ThemedSwitch";

interface Props {}

const ShareToWeb = (props: Props) => {
  return (
    <Box>
      <Group align={"center"} position="apart">
        <IconTextGroup
          title={"Share to web"}
          description={"Publish and share link with anyone"}
          leftNode={<HiGlobe fontSize={"2rem"} color="gray" />}
        />
        <ThemedSwitch />
      </Group>
    </Box>
  );
};

export default ShareToWeb;
