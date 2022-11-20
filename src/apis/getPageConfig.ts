export const getPageConfig = (pageId: string) => {
  // Get page config from local storage
  const data = localStorage.getItem("oslash-notion-page") || '[]';

  const parsedData = JSON.parse(data);
  const pageConfig = parsedData.find((page: any) => page.id === pageId);
  return pageConfig;
};
