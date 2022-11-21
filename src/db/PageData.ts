import { Page, PERMISSION_LEVEL } from "../types";

/**
 * Dummy Page Data to initialize local storage
 */
export const PageDB: Array<Page> = [
  {
    id: "page-1",
    sharedWith: [
      {
        id: "0",
        permission: PERMISSION_LEVEL.FULL,
      },
      {
        id: "1",
        permission: PERMISSION_LEVEL.FULL,
      },
      {
        id: "6",
        permission: PERMISSION_LEVEL.FULL,
      },
      {
        id: "3",
        permission: PERMISSION_LEVEL.FULL,
      },
    ],
  },
];
