/**
 * Initialize the local storage with default data
 * @param key Key for local storage
 * @param data Data to initialize local storage with
 */
export const initDB = (key: string, data: any): void => {
  if (typeof window === 'undefined' || !window.localStorage) {
    return;
  }

  const db = localStorage.getItem(key) || '[]';
  const dbData = JSON.parse(db);

  if (!dbData.length) {
    localStorage.setItem(key, JSON.stringify(data));
  }
};
