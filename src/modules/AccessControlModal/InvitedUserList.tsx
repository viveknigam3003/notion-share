import { Group, Stack } from "@mantine/core";
import { useEffect, useState } from "react";
import { getAccessData } from "../../apis/getAccessData";
import AccessSelector from "../../components/AccessSelector";
import IconTextGroup from "../../components/IconTextGroup";
import ModalSection from "../../components/ModalSection";
import UserAvatar from "../../components/UserAvatar";
import { PageShareObject, PERMISSION_LEVEL } from "../../types";

interface Props {}

const InvitedUserList = (props: Props) => {
  const [pageShareData, setPageShareData] = useState<PageShareObject[]>([]);

  useEffect(() => {
    const data = getAccessData();
    setPageShareData(data);
  }, []);

  return (
    <ModalSection pt="0">
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
            <AccessSelector defaultValue={PERMISSION_LEVEL.FULL} />
          </Group>
        ))}
      </Stack>
    </ModalSection>
  );
};

export default InvitedUserList;
