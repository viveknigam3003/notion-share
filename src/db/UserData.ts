import { User } from "../types";

export const UserDB: Array<User> = [
  {
    id: "1",
    name: "Saiyam Jain",
    email: "sjain@example.com",
    avatar: "https://randomuser.me/api/portraits/men/86.jpg",
  },
  {
    id: "2",
    name: "Fatima Khan",
    email: "jane@example.com",
    avatar: "https://randomuser.me/api/portraits/women/54.jpg",
  },
  {
    id: "3",
    name: "Engineering",
    avatar: "E",
    users: ["1", "2"],
  },
  {
    id: "4",
    name: "Sam Sharma",
    email: "shawrma@example.com",
    avatar: "https://randomuser.me/api/portraits/men/44.jpg",
  },
  {
    id: "5",
    name: "Marketing",
    avatar: "M",
    users: ["4"],
  },
  {
    id: "6",
    name: "Nel Gibson",
    email: "shawrma@example.com",
    avatar: "https://randomuser.me/api/portraits/men/83.jpg",
  },
  {
    id: "7",
    name: "Sam Sharma",
    email: "shawrma@example.com",
    avatar: "https://randomuser.me/api/portraits/men/42.jpg",
  },
  {
    id: "8",
    name: "Sam Sharma",
    email: "shawrma@example.com",
    avatar: "https://randomuser.me/api/portraits/men/14.jpg",
  },
  {
    id: "9",
    name: "Sam Sharma",
    email: "shawrma@example.com",
    avatar: "https://randomuser.me/api/portraits/men/42.jpg",
  },
  {
    id: "10",
    name: "Sam Sharma",
    email: "shawrma@example.com",
    avatar: "https://randomuser.me/api/portraits/men/34.jpg",
  },
  {
    id: "11",
    name: "Product",
    avatar: "P",
    users: ["6", "7", "8", "9", "10"],
  },
  {
    id: "12",
    name: "Design",
    avatar: "D",
    users: ["3", "5"],
  },
];
