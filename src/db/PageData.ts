import { Page, PERMISSION_LEVEL } from "../types";

export const PageDB: Array<Page> = [
  {
    id: "page-1",
    sharedWith: [
      {
        id: "1",
        permission: PERMISSION_LEVEL.FULL,
      },
      {
        id: "4",
        permission: PERMISSION_LEVEL.FULL,
      },
      {
        id: "3",
        permission: PERMISSION_LEVEL.FULL,
      },
    ],
  },
];
