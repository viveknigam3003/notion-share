![GitHub Header](https://user-images.githubusercontent.com/30192068/202961890-ebcd91b1-7a58-4666-804f-d3e8b0a44eda.png)
# Notion Share Button

Notion Share Button is a simple react based UI component that helps you add Notion like share button to your website, blog or any other web application. 
It provides an customizable implementatio of handling operations like searching, selecting, and sharing access.

### Some of the features of this component are:

-  100% TypeScript support and React Based component
-  Customizable with props 
-  Provides customizable implementation for selecting users, searching, etc.
-  Easily pluggable with databases using APIs (uses localstorage for demo).
-  Keyboard accessible UX out of the box

### Overview

The Notion Share Button (NSB) is a react based component written in TypeScript and supports operations like searching, selecting, and modifying access for users.
It uses [Mantine UI Libary](https://mantine.dev/) under the hood but also holds custom implementations of multiple sub components for greater flexibility.

There are two primary modals that could be triggered using this button.
1. Access Control Modal - It is the default modal that opens up when you click the button. Can be used for updating access of users with whom the page is already shared.

<img width="352" alt="Screenshot 2022-11-21 at 10 06 34 AM" src="https://user-images.githubusercontent.com/30192068/202967396-d318c311-29f2-401d-9cac-f753dfe6fed9.png">

2. Search User Modal - It is triggered when you click on the input box to search for new users to share access to. Here you can search for users or user groups in your workspace and provide bulk access to them.
<img width="352" alt="Screenshot 2022-11-21 at 10 06 55 AM" src="https://user-images.githubusercontent.com/30192068/202966690-955505c4-06b9-4f15-8c7c-2498c5d4ce72.png">

### How it works?

Viewing users with access to page

## Technical Details

Developed on node version 16 using yarn for package management. You can switch to the required version of node using this command in your terminal (if you use nvm for node package management)
```
nvm use
```

Tech stack used
- Vite
- React
- TypeScript
- Mantine
- Heroicons

The atomic components are inspired from Mantine, that combine to make up molecular level components that can be customized with props.
All these components are highly reusable with the help of props.

![ComponentBreakdown (1)](https://user-images.githubusercontent.com/30192068/202977744-6a0daddd-d4b5-4ba9-8106-d7ac7c7a772b.png)

### Data Model

There are majorly two data models involved in building this component. One for users and one for the page information.
 **1. User Data Model** - The user data model can represent an **individual user** and also a **user group**.
 
 A **user data** object would look something like this 👇
 ```ts
 {
    id: "6",
    name: "Vivek Nigam",
    email: "viveknigam.nigam3@gmail.com",
    avatar: "https://github.com/viveknigam3003.png",
 }
 ```
 
 Where as a **user group** would have the same fields, just an extra `users` field. 
 * Here `email` may be ommited if there is no common email assigned to a group.
 * The `users` array holds the user id for users in that group.
 * If the `avatar` is absent, the avatar automatically becomes the first letter of the name of the group.
 
 ```ts
 {
    id: "3",
    name: "Engineering",
    users: ["1", "7", "6"],
 }
 ```
 
 **2. Page Data Model** - It holds the information regarding which user/user group has what level of access.
 
 ```ts
 {
    id: "page-1",
    sharedWith: [
      {
        id: "6",
        permission: PERMISSION_LEVEL.FULL,
      },
      {
        id: "3",
        permission: PERMISSION_LEVEL.FULL,
      },
    ],
  },
 ```
 
 * The `sharedWith` key holds an array of objects that have the user id as `id` and `permission` level from a constant `PERMISSION_LEVEL`
 * This `PERMISSION_LEVEL` has 4 levels of access. It is an enum to abstract out the value assigned for each access level.
 
 ```ts
export enum PERMISSION_LEVEL {
  FULL = "full_access",
  VIEW = "view_only",
  EDIT = "edit_only",
  NO_ACCESS = "no_access",
}
```

### State Management and Props

The component uses React's native state management principles using functional components and hooks. The share button has the following props which can help customize the functionality of the component.

|Props|Description|
|-|-|
|`users`|Users array based on the user object|
|`selectedUsers`|Selected users array based on the user object|
|`permission`|Permission level for the selected users in search modal|
|`sharedUsers`|Array of users (or user groups) with whom the page is shared.|
|`onSelect`|Callback to handle when a user is selected (clicked) in search modal|
|`onRemove`|Callback to handle when a user is removed from the selected list of users|
|`onPermissionChange`|Callback to handle when the permission of selected users is updated|
|`onUserPermissionChange`|Callback to handle when permission for a single user is updated|
|`onInvite`|Callback to handle the permission update for selected users in search modal|

The provided `App()` component wraps the `ShareButton` component and provides an implementation of all the functionalities of the `ShareButton` with `LocalStorage` as DB to persist data state between page reloads.

```tsx
function App() {
// State and logic implementation

  return (
    <ShareButton
      users={users}
      selectedUsers={selectedUsers}
      permission={permission}
      sharedUsers={pageShareData}
      onSelect={handleSelect}
      onRemove={handleRemove}
      onInvite={handleInvite}
      onPermissionChange={setPermission}
      onUserPermissionChange={updateUserPermission}
    />
   )
}
```

📌 Note on local storage

The demo uses local storage and it is populated using keys in the `db/config.ts` file. If you wish to change these keys please update the config file.
```
export const config = {
  pageDB: "oslash-notion-page",
  userDB: "oslash-users",
};
```
