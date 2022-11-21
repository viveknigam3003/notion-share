import { Box, Text } from "@mantine/core";
import SelectItem from "../modules/SearchUser/SelectItem";
import { FocusIndex } from "../modules/SearchUser/useGroupedRoveFocus";
import { User } from "../types";

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
  groupIndex: number;
  focusIndex: FocusIndex;
}

export const ITEM_GROUP_LIMIT = 3;

const ItemGroup: React.FC<ItemGroupProps> = ({
  title,
  data,
  onSelect,
  groupIndex,
  focusIndex,
}) => {
  if (data.length === 0) return null;

  return (
    <Box pb={"sm"}>
      <Text size="sm" weight={500} pb={"xs"}>
        {title}
      </Text>
      {data.map((user, index) => (
        <SelectItem
          key={user.id}
          {...user}
          onSelect={onSelect}
          selected={
            groupIndex === focusIndex.group && focusIndex.item === index
          }
        />
      ))}
    </Box>
  );
};

export default ItemGroup;
