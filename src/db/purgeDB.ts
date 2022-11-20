export const purgeDB = (key: string) => {
  localStorage.removeItem(key);
};
