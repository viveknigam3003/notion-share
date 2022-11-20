import { config } from "../db/config";
import { Page } from "../types";

export const getPages = (): Array<Page> => {
  const data = localStorage.getItem(config.pageDB) || "[]";
  return JSON.parse(data);
};

export const getPageConfig = (pageId: string = "page-1"): Page => {
  // Get page config from local storage
  const data = getPages();
  const pageConfig = data.find((page: any) => page.id === pageId);
  
  if (!pageConfig) {
    throw new Error("Page not found");
  }

  return pageConfig;
};

export const updatePageConfig = (
  sharedWith: any,
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