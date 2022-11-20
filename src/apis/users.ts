import { config } from "../db/config";

export const getUsers = () => {
  // Get users from local storage
  const data = localStorage.getItem(config.userDB) || "[]";
  const parsedData = JSON.parse(data);
  return parsedData;
};
