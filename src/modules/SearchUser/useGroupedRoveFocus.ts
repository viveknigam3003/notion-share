import { useEffect, useState } from "react";

export type FocusIndex = { group: number; item: number };

export const useGroupedRoveFocus = (
  groupSize: number,
  totalGroups: number
): [FocusIndex, (op: { group: number; item: number }) => void] => {
  const initialValue = { group: -1, item: -1 }; // -1,-1 index means input is focused
  const [focusIndex, setFocusIndex] = useState<FocusIndex>(initialValue);

  const shiftItemUp = () => {
    setFocusIndex((prev) => {
      if (prev.item <= 0) {
        if (prev.group <= 0) {
          return initialValue;
        } else {
          return { group: prev.group - 1, item: groupSize - 1 };
        }
      }
      return { group: prev.group, item: prev.item - 1 };
    });
  }

  const shiftItemDown = () => {
    setFocusIndex((prev) => {
      if (prev.group < 0, prev.item < 0) {
        return { group: 0, item: 0 };
      }

      if (prev.item >= groupSize - 1) {
        if (prev.group >= totalGroups - 1) {
          return prev;
        } else {
          return { group: prev.group + 1, item: 0 };
        }
      }
      return {...prev, item: prev.item + 1}
    });
  };

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowUp") {
        shiftItemUp();
      } else if (e.key === "ArrowDown") {
        shiftItemDown();
      }
    }
    // add event listeners
    document.addEventListener("keydown", handler);

    // remove event listeners on cleanup
    return () => {
      document.removeEventListener("keydown", handler);
    }
  }, []);

  return [focusIndex, setFocusIndex];
};

// export const useRoveFocus = (size: number) => {
//   const [currentFocus, setCurrentFocus] = useState(0);

//   const handleKeyDown = useCallback(
//    (e: KeyboardEvent) => {
//       if (e.key === 'ArrowDown') {
//         // Down arrow
//         e.preventDefault();
//         setCurrentFocus(currentFocus === size - 1 ? 0 : currentFocus + 1);
//       } else if (e.key === 'ArrowUp') {
//         // Up arrow
//         e.preventDefault();
//         setCurrentFocus(currentFocus === 0 ? size - 1 : currentFocus - 1);
//       }
//     },
//     [size, currentFocus, setCurrentFocus]
//   );

//   useEffect(() => {
//     document.addEventListener("keydown", handleKeyDown, false);
//     return () => {
//       document.removeEventListener("keydown", handleKeyDown, false);
//     };
//   }, [handleKeyDown]);

//   return [currentFocus, setCurrentFocus];
// }