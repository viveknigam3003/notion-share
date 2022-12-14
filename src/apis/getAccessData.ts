import { Page, PageShareObject, SharedWith, User } from "../types";
import { getPageConfig } from "./pages";
import { getUsers } from "./users";

/**
 * API to get all access data for a page with user details
 * @param pageId Page ID to get access data for
 * @returns Combined data of users and page access
 */
export const getAccessData = (
  pageId: string = "page-1"
): Array<PageShareObject> => {
  // Get Page Data from local storage
  const pageConfig: Page = getPageConfig(pageId);

  // Get users from local storage
  const users: Array<User> = getUsers();

  const mergedData = pageConfig.sharedWith.map((share: SharedWith) => {
    const user = users.find((user: User) => user.id === share.id);

    if (!user) {
      throw new Error("User not found");
    }

    return {
      ...user,
      ...share,
    };
  });

  return mergedData;
};
