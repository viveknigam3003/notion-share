import { config } from "../db/config";
import { User } from "../types";

export const getUsers = (): Array<User> => {
  // Get users from local storage
  const data = localStorage.getItem(config.userDB) || "[]";
  const parsedData = JSON.parse(data);
  return parsedData;
};
