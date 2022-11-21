/**
 * Removes the local storage entry for the given key
 * @param key Key for local storage
 */
export const purgeDB = (key: string) => {
  localStorage.removeItem(key);
};
