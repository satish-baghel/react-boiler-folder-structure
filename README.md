# Optimizing Your React Project Structure: A Guide to Effective Folder Architecture with Hooks and Redux

I have read many articles, watched videos on YouTube, and searched many repositories on GitHub. Still, I haven't found any resources that could explain Optimizing and the best folder architecture to fulfil for every React js Project.

### The folder structure looks like this:

- Assets
- Atoms
- Components
- DefaultLayout
- Hooks
- Pages
- Routes
- Store
- Utils
<p align="center">
<img  src="./src/Assets/Images/folder-stucture.png" title="Folder Structure"  alt="Folder Structure">
</p>

### Assets:

<p align="center">
<img  src="./src/Assets/Images/assets.png" title="Assets"  alt="Assets">
</p>

- As the name says, In this folder we add a global base CSS file and image of the project.

### Atoms:

<p align="center">
<img  src="./src/Assets/Images/atoms.png" title="Atoms"  alt="Atoms">
</p>

- The "Atoms" Folder typically contains the smallest built-in reusable component.
- Ex: Button, Input, Alerts, Badges, Breadcrumbs, Heading etc.

### Components:

<p align="center">
<img  src="./src/Assets/Images/components.png" title="Components"  alt="Components">
</p>

- The "Components" folder contains multiple Atoms components and makes a block of a page in React.js.
- You can see the folder name and structure above.

### DefaultLayout:

<p align="center">
<img  src="./src/Assets/Images/defaultLayout.png" title="DefaultLayout"  alt="DefaultLayout">
</p>

- As the name says, In the folder we will store the default layout file. This file typically contains common UI elements such as headers, footers, and navigation menus.
- You can see the folder name and structure above the image.
  - **Home**: In this folder, the header and footer components are used repeatedly on every page. Therefore, we have created a "Home" component where we can contain the header and footer, as well as default routes.
  - **Dashboard**: Same as the Dashboard header, footer and navigation menu components are used repeatedly on every page. Therefore, we have created a "Dashboard" component where we can contain the header, footer and navigation menu, as well as default routes.

### Hooks:

<p align="center">
<img  src="./src/Assets/Images/Hooks.png" title="Hooks"  alt="Hooks">
</p>

- The "Hooks" folder in React is primarily utilized for creating reusable logic and custom hooks.
- As you can see we just created two customize hook
  - AuthGuard: Handle Authentication
  - useDarkMode: Handle light and dark mode

### Pages:

<p align="center">
<img  src="./src/Assets/Images/Pages.png" title="Pages"  alt="Pages">
</p>

- This is the heart of our application.
- As the name suggests, by utilizing the components and atoms folders, we can create a variety of distinct pages that will greatly enhance the functionality of our application.
  - Ex. Home, Dashboard, etc...

### Routes:

<p align="center">
<img  src="./src/Assets/Images/Routes.png" title="Routes"  alt="Routes">
</p>

- This folder contains public and private routes as you can see in the above image.

### Store

<p align="center">
<img  src="./src/Assets/Images/Store.png" title="Store"  alt="Store">
</p>

- The "store" is a component of Redux. Within this directory, we will create an "action" folder responsible for making API calls, a "reducer" folder for managing state, an "action type" folder for defining action types, and finally a "store" file that combines all the reducers

### Utils

<p align="center">
<img  src="./src/Assets/Images/utils.png" title="Utils"  alt="Utils">
</p>

- The "utils" folder refers to commonly used for specific tasks and can be throughout the project.
  - Ex: Date and time formatting, Validation functions, Math functions etc...

**Note**:- In each folder, there is an "index.js" file that exports the files contained within that folder. This export can be utilized to import specific files from that folder for use on any page.

<hr />
<h1 align="center">Hi 👋, I'm Satish Baghel</h1>
<h3 align="center">A passionate frontend developer from India</h3>

<h3 align="left">Connect with me:</h3>
<p align="left">
<a href="https://linkedin.com/in/satish-baghel" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="satish-baghel" height="30" width="40" /></a>
<a href="https://instagram.com/satish_baghel_" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg" alt="satish_baghel_" height="30" width="40" /></a>
</p>

<h3 align="left">Languages and Tools:</h3>
<p align="left"> <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a> <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a> <a href="https://reactnative.dev/" target="_blank" rel="noreferrer"> <img src="https://reactnative.dev/img/header_logo.svg" alt="reactnative" width="40" height="40"/> </a> <a href="https://webpack.js.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/d00d0969292a6569d45b06d3f350f463a0107b0d/icons/webpack/webpack-original-wordmark.svg" alt="webpack" width="40" height="40"/> </a> </p>
