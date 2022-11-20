export const initDB = (key: string, data: any) => {
  const db = localStorage.getItem(key);
  if (!db) {
    localStorage.setItem(key, JSON.stringify(data));
  }
};
