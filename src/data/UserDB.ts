import { PERMISSION_LEVEL, User } from "../types";

export const UserDB: Array<User> = [
  {
    id: "1",
    name: "Saiyam Jain",
    email: "sjain@example.com",
    avatar: "https://randomuser.me/api/portraits/men/86.jpg",
    permission: PERMISSION_LEVEL.FULL,
  },
  {
    id: "2",
    name: "Fatima Khan",
    email: "jane@example.com",
    avatar: "https://randomuser.me/api/portraits/women/54.jpg",
    permission: PERMISSION_LEVEL.FULL,
  },
  {
    id: "3",
    name: "Engineering",
    avatar: "E",
    permission: PERMISSION_LEVEL.FULL,
    users: ["1", "2"],
  },
  {
    id: "4",
    name: "Sam Sharma",
    email: "shawrma@example.com",
    avatar: "https://randomuser.me/api/portraits/men/44.jpg",
    permission: PERMISSION_LEVEL.FULL,
  },
  {
    id: "5",
    name: 'Marketing',
    avatar: "M",
    permission: PERMISSION_LEVEL.FULL,
    users: ["4"],
  }
];
