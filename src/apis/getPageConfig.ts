import { config } from "../db/config";

export const getPageConfig = (pageId: string = 'page-1') => {
  // Get page config from local storage
  const data = localStorage.getItem(config.pageDB) || "[]";

  const parsedData = JSON.parse(data);
  const pageConfig = parsedData.find((page: any) => page.id === pageId);
  return pageConfig;
};
