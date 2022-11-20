export enum PERMISSION_LEVEL {
  FULL = "full_access",
  VIEW = "view_only",
  EDIT = "edit_only",
  NO_ACCESS = "no_access",
}

export enum ModalType {
  NONE = "NONE",
  ACCESS_CONTROL = "ACCESS_CONTROL",
  SEARCH_USER = "SEARCH_USER",
}

export interface User {
  id: string;
  name: string;
  email?: string;
  avatar?: string;
  users?: string[];
}

