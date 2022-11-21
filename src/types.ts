/**
 * Permission Level Constant
 */
export enum PERMISSION_LEVEL {
  /**
   * Provides full access to the page. Users can edit, view, add or remove users from the page.
   */
  FULL = "full_access",
  /**
   * Provides read-only access to the page. Users can view the page but cannot edit, add or remove users from the page.
   */
  VIEW = "view_only",
  /**
   * Provides Edit access to the page. Users can view and edit the page but cannot add or remove users from the page.
   */
  EDIT = "edit_only",
  /**
   * Removes access to the page. Users cannot view, edit, add or remove users from the page.
   */
  NO_ACCESS = "no_access",
}

/**
 * Modal Types
 */
export enum ModalType {
  /**
   * For default modal
   */
  NONE = "NONE",
  /**
   * For access control modal
   */
  ACCESS_CONTROL = "ACCESS_CONTROL",
  /**
   * For search and add user modal
   */
  SEARCH_USER = "SEARCH_USER",
}

/**
 * User Object Definition
 */
export interface User {
  /**
   * User ID of the user
   */
  id: string;
  /**
   * Name of the user
   */
  name: string;
  /**
   * Email of the user. May be absent for groups.
   */
  email?: string;
  /**
   * Profile picture of the user. May be absent for groups.
   */
  avatar?: string;
  /**
   * User Id list in case of group. May be absent for individual users.
   */
  users?: string[];
}

/**
 * Page Object Definition
 */
export interface Page {
  /**
   * Page ID of the page
   */
  id: string;
  /**
   * Array of users and their permission level
   */
  sharedWith: Array<SharedWith>;
}

/**
 * SharedWith Object Definition
 */
export interface SharedWith {
  /**
   * User ID of the user
   */
  id: string;
  /**
   * Permission level of the user
   */
  permission: PERMISSION_LEVEL;
}

/**
 * PageShareObject Object Definition.
 * Combined data of users and page access
 */
export type PageShareObject = User & SharedWith;
