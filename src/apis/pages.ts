import { config } from "../db/config";
import { Page, PERMISSION_LEVEL } from "../types";

/**
 * API to get all pages data
 * @returns Page[]
 */
export const getPages = (): Array<Page> => {
  const data = localStorage.getItem(config.pageDB) || "[]";
  return JSON.parse(data);
};

/**
 * API to get a page data by id
 * @param pageId Page ID to fetch data, by default pageId is 'page-1'
 * @returns Page data
 */
export const getPageConfig = (pageId: string = "page-1"): Page => {
  // Get page config from local storage
  const data = getPages();
  const pageConfig = data.find((page: any) => page.id === pageId);

  if (!pageConfig) {
    throw new Error("Page not found");
  }

  return pageConfig;
};

/**
 * API to update shared page config
 * @param sharedWith Array of user ids to share the page with and their permission level
 * @param pageId Page ID to share, by default pageId is 'page-1'
 */
export const updatePageConfig = (
  sharedWith: Array<{ id: string; permission: PERMISSION_LEVEL }>,
  pageId: string = "page-1"
) => {
  // get page config from local storage
  const data = getPageConfig(pageId);

  // update page config
  const newData = {
    ...data,
    sharedWith: [...data.sharedWith, ...sharedWith],
  };

  // replace page config in local storage
  const allData = getPages();
  const updatedData = allData.map((page: Page) => {
    if (page.id === pageId) {
      return newData;
    }
    return page;
  });

  // update local storage
  const stringifyData = JSON.stringify(updatedData);
  localStorage.setItem(config.pageDB, stringifyData);
};

/**
 * API to update page config for a user for a page id
 * @param id User ID to update permission for
 * @param permission New permission level
 * @param pageId Page ID to update permission for, by default pageId is 'page-1'
 */
export const updatePagePermissionForUser = (
  id: string,
  permission: string,
  pageId: string = "page-1"
) => {
  // get page config from local storage
  const data = getPageConfig(pageId);

  // update page config
  const newData = {
    ...data,
    sharedWith: data.sharedWith.map((user: any) => {
      if (user.id === id) {
        return {
          ...user,
          permission,
        };
      }
      return user;
    }),
  };

  // replace page config in local storage
  const allData = getPages();
  const updatedData = allData.map((page: any) => {
    if (page.id === pageId) {
      return newData;
    }
    return page;
  });

  // update local storage
  const stringifyData = JSON.stringify(updatedData);
  localStorage.setItem(config.pageDB, stringifyData);
};

/**
 * API to remove a user access from a page
 * @param id User ID to remove permission for
 * @param pageId Page ID to remove permission for, by default pageId is 'page-1'
 */
export const removePagePermissionForUser = (
  id: string,
  pageId: string = "page-1"
) => {
  // get page config from local storage
  const data = getPageConfig(pageId);

  // update page config
  const newData = {
    ...data,
    sharedWith: data.sharedWith.filter((user: any) => user.id !== id),
  };

  // replace page config in local storage
  const allData = getPages();
  const updatedData = allData.map((page: any) => {
    if (page.id === pageId) {
      return newData;
    }
    return page;
  });

  // update local storage
  const stringifyData = JSON.stringify(updatedData);
  localStorage.setItem(config.pageDB, stringifyData);
};
