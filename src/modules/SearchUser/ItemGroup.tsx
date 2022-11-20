import { Box, Text } from "@mantine/core";
import { User } from "../../types";
import SelectItem from "./SelectItem";

interface Props {
  title: string;
  data: User[];
  onSelect: (id: string) => void;
  limit?: number;
}

const ItemGroup: React.FC<Props> = ({ title, data, onSelect, limit = 3 }) => {
  if (data.length === 0) return null;

  return (
    <Box pb={"sm"}>
      <Text size="sm" weight={500} pb={"xs"}>
        {title}
      </Text>
      {data.slice(0, limit).map((user) => (
        <SelectItem key={user.id} {...user} onSelect={onSelect} />
      ))}
    </Box>
  );
};

export default ItemGroup;
