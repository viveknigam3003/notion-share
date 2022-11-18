import {
  Avatar,
  Button,
  createStyles,
  Group,
  MultiSelect,
  Text,
} from "@mantine/core";
import { forwardRef, Fragment } from "react";
import AccessSelector from "../components/AccessSelector";
import { UserDB } from "../data/UserDB";
import { PERMISSION_LEVEL } from "../types";
import { convertToMultiSelectData } from "../utilts";

interface Props {}

interface ItemProps extends React.ComponentPropsWithoutRef<"div"> {
  id: string;
  avatar: string;
  label: string;
  email: string;
  permission: PERMISSION_LEVEL;
  users?: string[];
}

const SelectItem = forwardRef<HTMLDivElement, ItemProps>(
  ({ id, avatar, label, users, ...others }: ItemProps, ref) => (
    <div ref={ref} {...others}>
      <Group noWrap spacing={"xs"}>
        {users?.length ? (
          <Avatar size={"sm"} src={avatar} />
        ) : (
          <Avatar size={"sm"} src={avatar} radius="xl" />
        )}
        <Text>{label}</Text>
      </Group>
    </div>
  )
);

const SearchUserModal = (props: Props) => {
  const { classes } = useStyles();
  return (
    <Fragment>
      <MultiSelect
        type={"text"}
        data={convertToMultiSelectData(UserDB)}
        itemComponent={SelectItem}
        searchable
        placeholder="Search emails, names or groups"
        rightSection={
          <Group noWrap align={"center"} spacing="xs" position="apart">
            <AccessSelector />
            <Button size="xs">Invite</Button>
          </Group>
        }
        rightSectionWidth={200}
        classNames={{
          root: classes.root,
          input: classes.input,
          searchInput: classes.searchInput,
        }}
        initiallyOpened
        limit={5}
        variant="filled"
      />
    </Fragment>
  );
};

export default SearchUserModal;

const useStyles = createStyles((theme) => ({
  root: {},
  input: {
    height: "3rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  searchInput: {
    minWidth: "15rem",
  },
}));
