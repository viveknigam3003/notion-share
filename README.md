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


### Data Model

### State Management and Props

### 
