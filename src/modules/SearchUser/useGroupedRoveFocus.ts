import { useHotkeys } from "@mantine/hooks";
import { useCallback, useEffect, useState } from "react";

export type FocusIndex = { group: number; item: number };

export const useGroupedRoveFocus = (
  groupSize: number,
  totalGroups: number
): [FocusIndex, (op: { group: number; item: number }) => void] => {
  const [focusIndex, setFocusIndex] = useState<FocusIndex>({
    group: 0,
    item: 0,
  });

  const shiftGroupUp = (itemIndex?: number) => {
    // If the first group is already focussed, do nothing
    if (focusIndex.group === 0) {
      return;
    } else {
      // If the first group is not focussed, shift focus to the previous group and set the item index to the last item
      setFocusIndex({ group: focusIndex.group - 1, item: groupSize - 1 });
      // If the item index is specified, set the focus to the specified item
      if (itemIndex) {
        setFocusIndex({ group: focusIndex.group - 1, item: itemIndex });
      }
    }
  };

  const shiftGroupDown = (itemIndex: number = 0) => {
    // If the last group is already focussed, do nothing
    if (focusIndex.group === totalGroups - 1) {
      return;
    } else {
      // If the last group is not focussed, shift focus to the next group and set the item index to the first item
      setFocusIndex({ group: focusIndex.group + 1, item: 0 });
      // If the item index is specified, set the focus to the specified item
      if (itemIndex) {
        setFocusIndex({ group: focusIndex.group + 1, item: itemIndex });
      }
    }
  };

  const shiftItemUp = () => {
    console.log('Shift item up');
    // If the first item is already focussed, shift focus to the previous group
    if (focusIndex.item === 0) {
      shiftGroupUp();
    } else {
      // If the first item is not focussed, shift focus to the previous item
      setFocusIndex({ group: focusIndex.group, item: focusIndex.item - 1 });
    }
  };

  const shiftItemDown = () => {
    console.log('Shift item down');
    // If the last item is already focussed, shift focus to the next group
    if (focusIndex.item === groupSize - 1) {
      shiftGroupDown();
    } else {
      // If the last item is not focussed, shift focus to the next item
      setFocusIndex({ group: focusIndex.group, item: focusIndex.item + 1 });
    }
  };

  useHotkeys([
    ["ArrowUp", shiftItemUp],
    ["ArrowDown", shiftItemDown],
  ]);

  return [focusIndex, setFocusIndex];
};

export const useRoveFocus = (size: number) => {
  const [currentFocus, setCurrentFocus] = useState(0);

  const handleKeyDown = useCallback(
   (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        // Down arrow
        e.preventDefault();
        setCurrentFocus(currentFocus === size - 1 ? 0 : currentFocus + 1);
      } else if (e.key === 'ArrowUp') {
        // Up arrow
        e.preventDefault();
        setCurrentFocus(currentFocus === 0 ? size - 1 : currentFocus - 1);
      }
    },
    [size, currentFocus, setCurrentFocus]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown, false);
    return () => {
      document.removeEventListener("keydown", handleKeyDown, false);
    };
  }, [handleKeyDown]);

  return [currentFocus, setCurrentFocus];
}