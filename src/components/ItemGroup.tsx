import { Box, Text } from "@mantine/core";
import { User } from "../types";
import SelectItem from "../modules/SearchUser/SelectItem";

interface ItemGroupProps {
  /**
   * Title for the group. Could be a name or a label
   */
  title: string;
  /**
   * Data to show in the group. Could be a list of users or groups.
   */
  data: User[];
  /**
   * Callback to handle when an item is selected (clicked)
   */
  onSelect: (id: string) => void;
  /**
   * Total number of visible items in the group. Default is 3.
   */
  limit?: number;
}

const ItemGroup: React.FC<ItemGroupProps> = ({
  title,
  data,
  onSelect,
  limit = 3,
}) => {
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
