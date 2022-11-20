export const initDB = (key: string, data: any) => {
  if (typeof window === 'undefined' || !window.localStorage) {
    return;
  }

  const db = localStorage.getItem(key) || '[]';
  const dbData = JSON.parse(db);

  if (!dbData.length) {
    localStorage.setItem(key, JSON.stringify(data));
  }
};
