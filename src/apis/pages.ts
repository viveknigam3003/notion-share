import { config } from "../db/config";

export const getPages = () => {
  const data = localStorage.getItem(config.pageDB) || "[]";
  return JSON.parse(data);
};

export const getPageConfig = (pageId: string = "page-1") => {
  // Get page config from local storage
  const data = getPages();
  const pageConfig = data.find((page: any) => page.id === pageId);
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
    sharedWith: [
      ...data.sharedWith,
      ...sharedWith,
    ],
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
