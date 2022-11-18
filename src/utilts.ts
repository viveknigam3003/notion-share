import { User } from "./types";

export const convertToMultiSelectData = (data: Array<User>) => {
  return data.map((user) => ({
    id: user.id,
    avatar: user.avatar,
    label: user.name,
    email: user.email,
    value: user.id,
    group: user.users?.length ? 'Select a group' : 'Select a user',
    users: user.users
  }));
};
