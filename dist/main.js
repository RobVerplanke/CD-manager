/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./api/albumsAll.js":
/*!**************************!*\
  !*** ./api/albumsAll.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { pageHolder, contentHolder } = __webpack_require__(/*! ../src/components/index.js */ \"./src/components/index.js\");\n\nasync function renderAlbums() {\n  const url = 'http://localhost:3000/albums';\n\n  const result = await fetch(url);\n  const data = await result.json();\n\n  let template = '';\n\n  data.forEach((album) => {\n    template += `\n    <ul class=\"items-list\">\n      <li class=\"list-img\"><img width=\"150px\" height=\"auto\" src=\"${album.img}\"></li>\n      <li class=\"list-item text-title-light\"><p>${album.title}</p></li>\n      <li class=\"list-item text-artist-light\"><p>${album.artist}</p></li>\n    </ul>\n    `;\n  });\n\n  contentHolder.innerHTML += template;\n\n  contentHolder.classList.remove('no-img-in-item');\n  contentHolder.classList.add('img-in-item');\n\n  pageHolder.append(contentHolder);\n}\n\nmodule.exports = renderAlbums;\n\n\n//# sourceURL=webpack://cd-manager/./api/albumsAll.js?");

/***/ }),

/***/ "./api/cdsAll.js":
/*!***********************!*\
  !*** ./api/cdsAll.js ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { pageHolder, contentHolder } = __webpack_require__(/*! ../src/components/index.js */ \"./src/components/index.js\");\n\nasync function renderCDs() {\n  const url = 'http://localhost:3000/cds';\n\n  const result = await fetch(url);\n  const data = await result.json();\n\n  let template = '';\n\n  data.forEach((cd) => {\n    template += `\n    <ul class=\"items-list\">\n      <li class=\"list-img\"><img width=\"150px\" height=\"auto\" src=\"${cd.img}\"></li>\n      <li class=\"list-item text-album\"><p>${cd.album}</p></li>\n      <li class=\"list-item text-title-light\"><p>${cd.title}</p></li>\n      <li class=\"list-item text-artist-light\"><p>${cd.artist}</p></li>\n    </ul>\n    `;\n  });\n\n  contentHolder.innerHTML += template;\n\n  contentHolder.classList.remove('no-img-in-item');\n  contentHolder.classList.add('img-in-item');\n\n  pageHolder.append(contentHolder);\n}\n\nmodule.exports = renderCDs;\n\n\n//# sourceURL=webpack://cd-manager/./api/cdsAll.js?");

/***/ }),

/***/ "./api/tracksAll.js":
/*!**************************!*\
  !*** ./api/tracksAll.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { pageHolder, contentHolder } = __webpack_require__(/*! ../src/components/index.js */ \"./src/components/index.js\");\n\nasync function renderTracks() {\n  const url = 'http://localhost:3000/tracks';\n\n  const result = await fetch(url);\n  const data = await result.json();\n\n  let template = '';\n\n  data.forEach((track) => {\n    template += `\n    <ul class=\"items-list-no-img\">\n      <li class=\"list-item text-title-dark\"><p>${track.title}</p></li>\n      <li class=\"list-item text-artist-dark\"><p>${track.artist}</p></li>\n      <li class=\"list-item text-artist-dark\"><p>length: <strong>${track.length}</strong></p></li>\n    </ul>\n    `;\n  });\n\n  contentHolder.innerHTML += template;\n\n  contentHolder.classList.remove('img-in-item');\n  contentHolder.classList.add('no-img-in-item');\n\n  pageHolder.append(contentHolder);\n}\n\nmodule.exports = renderTracks;\n\n\n//# sourceURL=webpack://cd-manager/./api/tracksAll.js?");

/***/ }),

/***/ "./src/components/commonElements.js":
/*!******************************************!*\
  !*** ./src/components/commonElements.js ***!
  \******************************************/
/***/ ((module) => {

eval("const pageHolder = document.querySelector('#page-holder');\nconst titleHolder = document.querySelector('#title-holder');\nconst contentHolder = document.querySelector('#content-holder');\nconst buttonHome = document.querySelector('#menu-button-home');\nconst buttonSearch = document.querySelector('#menu-button-search');\nconst buttonStats = document.querySelector('#menu-button-stats');\nconst buttonProfile = document.querySelector('#menu-button-profile');\n\n// Albums\nconst buttonAlbumsAll = document.querySelector('#drop-menu-albums-all');\nconst buttonAlbumsAdd = document.querySelector('#drop-menu-albums-add');\nconst buttonAlbumsEdit = document.querySelector('#drop-menu-albums-edit');\nconst buttonAlbumsDelete = document.querySelector('#drop-menu-albums-delete');\n\n// CDs\nconst buttonCDsAll = document.querySelector('#drop-menu-cds-all');\nconst buttonCDsAdd = document.querySelector('#drop-menu-cds-add');\nconst buttonCDsEdit = document.querySelector('#drop-menu-cds-edit');\nconst buttonCDsDelete = document.querySelector('#drop-menu-cds-delete');\n\n// Tracks\nconst buttonTracksAll = document.querySelector('#drop-menu-tracks-all');\nconst buttonTracksAdd = document.querySelector('#drop-menu-tracks-add');\nconst buttonTracksEdit = document.querySelector('#drop-menu-tracks-edit');\nconst buttonTracksDelete = document.querySelector('#drop-menu-tracks-delete');\n\nmodule.exports = {\n  pageHolder,\n  titleHolder,\n  contentHolder,\n  buttonHome,\n  buttonSearch,\n  buttonStats,\n  buttonProfile,\n  // Albums\n  buttonAlbumsAll,\n  buttonAlbumsAdd,\n  buttonAlbumsEdit,\n  buttonAlbumsDelete,\n  // CDs\n  buttonCDsAll,\n  buttonCDsAdd,\n  buttonCDsEdit,\n  buttonCDsDelete,\n  // Tracks\n  buttonTracksAll,\n  buttonTracksAdd,\n  buttonTracksEdit,\n  buttonTracksDelete,\n};\n\n\n//# sourceURL=webpack://cd-manager/./src/components/commonElements.js?");

/***/ }),

/***/ "./src/components/forms/addAlbum.js":
/*!******************************************!*\
  !*** ./src/components/forms/addAlbum.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { pageHolder, contentHolder } = __webpack_require__(/*! ../commonElements.js */ \"./src/components/commonElements.js\");\nconst createFormInput = __webpack_require__(/*! ./utils.js */ \"./src/components/forms/utils.js\");\n\nfunction buildAddAlbumForm() {\n  const form = document.createElement('form');\n  form.classList.add('add-form');\n\n  form.append(createFormInput('Title', 'text', 'input', 'Title of album...'));\n  form.append(createFormInput('Artist', 'text', 'input', 'Name of artist...'));\n  form.append(createFormInput('Collaborators', 'text', 'input', 'Artist 2, Artist 3, ...'));\n  form.append(createFormInput('Label', 'text', 'input', 'Enter label here...'));\n  form.append(createFormInput('Genre', 'text', 'input', 'Rock, Classical, Electronic, ...'));\n  form.append(createFormInput('Year', 'number', 'select', 'Date of release'));\n  form.append(createFormInput('Info', 'text', 'textarea', 'Extra info here...'));\n  form.append(createFormInput('Cover', 'file', 'input'));\n\n  // Voeg een verzendknop toe\n  const submitButton = document.createElement('button');\n  submitButton.setAttribute('type', 'submit');\n  submitButton.setAttribute('id', 'add-button');\n  submitButton.textContent = 'Add';\n\n  form.appendChild(submitButton);\n  contentHolder.append(form);\n\n  pageHolder.append(contentHolder);\n}\n\nmodule.exports = buildAddAlbumForm;\n\n\n//# sourceURL=webpack://cd-manager/./src/components/forms/addAlbum.js?");

/***/ }),

/***/ "./src/components/forms/addCD.js":
/*!***************************************!*\
  !*** ./src/components/forms/addCD.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { pageHolder, contentHolder } = __webpack_require__(/*! ../commonElements.js */ \"./src/components/commonElements.js\");\nconst createFormInput = __webpack_require__(/*! ./utils.js */ \"./src/components/forms/utils.js\");\n\nfunction buildAddCDForm() {\n  const form = document.createElement('form');\n  form.classList.add('add-form');\n\n  form.append(createFormInput('Title', 'text', 'input', 'Title of CD...'));\n  form.append(createFormInput('Artist', 'text', 'input', 'Name of artist...'));\n  form.append(createFormInput('Collaborators', 'text', 'input', 'Artist 2, Artist 3, ...'));\n  form.append(createFormInput('Label', 'text', 'input', 'Enter label here...'));\n  form.append(createFormInput('Genre', 'text', 'input', 'Rock, Classical, Electronic, ...'));\n  form.append(createFormInput('Year', 'number', 'select', 'Date of release'));\n  form.append(createFormInput('Info', 'text', 'textarea', 'Extra info here...'));\n  form.append(createFormInput('Cover', 'file', 'input'));\n\n  // Voeg een verzendknop toe\n  const submitButton = document.createElement('button');\n  submitButton.setAttribute('type', 'submit');\n  submitButton.setAttribute('id', 'add-button');\n  submitButton.textContent = 'Add';\n\n  form.appendChild(submitButton);\n  contentHolder.append(form);\n\n  pageHolder.append(contentHolder);\n}\n\nmodule.exports = buildAddCDForm;\n\n\n//# sourceURL=webpack://cd-manager/./src/components/forms/addCD.js?");

/***/ }),

/***/ "./src/components/forms/addTrack.js":
/*!******************************************!*\
  !*** ./src/components/forms/addTrack.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { pageHolder, contentHolder } = __webpack_require__(/*! ../commonElements.js */ \"./src/components/commonElements.js\");\nconst createFormInput = __webpack_require__(/*! ./utils.js */ \"./src/components/forms/utils.js\");\n\nfunction buildAddTrackForm() {\n  const form = document.createElement('form');\n  form.classList.add('add-form');\n\n  form.append(createFormInput('Title', 'text', 'input', 'Title of track...'));\n  form.append(createFormInput('Artist', 'text', 'input', 'Name of artist...'));\n  form.append(createFormInput('Collaborators', 'text', 'input', 'Artist 2, Artist 3, ...'));\n  form.append(createFormInput('Genre', 'text', 'input', 'Rock, Classical, Electronic, ...'));\n  form.append(createFormInput('Length', 'text', 'input', '3:45...'));\n  form.append(createFormInput('Info', 'text', 'textarea', 'Extra info here...'));\n\n  // Voeg een verzendknop toe\n  const submitButton = document.createElement('button');\n  submitButton.setAttribute('type', 'submit');\n  submitButton.setAttribute('id', 'add-button');\n  submitButton.textContent = 'Add';\n\n  form.appendChild(submitButton);\n  contentHolder.append(form);\n\n  pageHolder.append(contentHolder);\n}\n\nmodule.exports = buildAddTrackForm;\n\n\n//# sourceURL=webpack://cd-manager/./src/components/forms/addTrack.js?");

/***/ }),

/***/ "./src/components/forms/utils.js":
/*!***************************************!*\
  !*** ./src/components/forms/utils.js ***!
  \***************************************/
/***/ ((module) => {

eval("function buildYearOptions(element) {\n  const selectElement = element;\n  const currentYear = new Date().getFullYear();\n\n  for (let i = currentYear; i > 1900; i--) {\n    const newOption = document.createElement('option');\n    newOption.setAttribute('value', i);\n    newOption.textContent = i;\n    selectElement.append(newOption);\n  }\n}\n\nfunction createFormInput(labelText, type, element, placeholder) {\n  const holder = document.createElement('div');\n  holder.classList.add('form-input-holder');\n\n  const label = document.createElement('label');\n  label.textContent = `${labelText}:`;\n  label.classList.add('form-label');\n  label.setAttribute('for', labelText.toLowerCase());\n\n  const input = document.createElement(element);\n  input.setAttribute('type', type);\n  input.setAttribute('id', labelText.toLowerCase());\n  input.setAttribute('name', labelText.toLowerCase());\n  input.setAttribute('placeholder', placeholder);\n\n  if (type === 'file') input.setAttribute('accept', 'image/png, image/jpeg');\n  if (labelText === 'Year') buildYearOptions(input);\n\n\n  holder.append(label, input);\n\n  return holder;\n}\n\nmodule.exports = createFormInput;\n\n\n//# sourceURL=webpack://cd-manager/./src/components/forms/utils.js?");

/***/ }),

/***/ "./src/components/index.js":
/*!*********************************!*\
  !*** ./src/components/index.js ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const setTitle = __webpack_require__(/*! ./titleHolder.js */ \"./src/components/titleHolder.js\");\nconst buildAddAlbumForm = __webpack_require__(/*! ./forms/addAlbum.js */ \"./src/components/forms/addAlbum.js\");\nconst buildAddCDForm = __webpack_require__(/*! ./forms/addCD.js */ \"./src/components/forms/addCD.js\");\nconst buildAddTrackForm = __webpack_require__(/*! ./forms/addTrack.js */ \"./src/components/forms/addTrack.js\");\n\nconst {\n  pageHolder,\n  titleHolder,\n  contentHolder,\n  buttonHome,\n  buttonSearch,\n  buttonStats,\n  buttonProfile,\n  // Albums\n  buttonAlbumsAll,\n  buttonAlbumsAdd,\n  buttonAlbumsEdit,\n  buttonAlbumsDelete,\n  // CDs\n  buttonCDsAll,\n  buttonCDsAdd,\n  buttonCDsEdit,\n  buttonCDsDelete,\n  // Tracks\n  buttonTracksAll,\n  buttonTracksAdd,\n  buttonTracksEdit,\n  buttonTracksDelete,\n} = __webpack_require__(/*! ./commonElements.js */ \"./src/components/commonElements.js\");\n\n\nmodule.exports = {\n  pageHolder,\n  titleHolder,\n  contentHolder,\n  buttonHome,\n  buttonSearch,\n  buttonStats,\n  buttonProfile,\n  // Albums\n  buttonAlbumsAll,\n  buttonAlbumsAdd,\n  buttonAlbumsEdit,\n  buttonAlbumsDelete,\n  // CDs\n  buttonCDsAll,\n  buttonCDsAdd,\n  buttonCDsEdit,\n  buttonCDsDelete,\n  // Tracks\n  buttonTracksAll,\n  buttonTracksAdd,\n  buttonTracksEdit,\n  buttonTracksDelete,\n  setTitle,\n  buildAddAlbumForm,\n  buildAddCDForm,\n  buildAddTrackForm,\n};\n\n\n//# sourceURL=webpack://cd-manager/./src/components/index.js?");

/***/ }),

/***/ "./src/components/navBar.js":
/*!**********************************!*\
  !*** ./src/components/navBar.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const {\n  buttonHome,\n  buttonSearch,\n  buttonStats,\n  buttonProfile,\n  // Albums\n  buttonAlbumsAll,\n  buttonAlbumsAdd,\n  buttonAlbumsEdit,\n  buttonAlbumsDelete,\n  // CDs\n  buttonCDsAll,\n  buttonCDsAdd,\n  buttonCDsEdit,\n  buttonCDsDelete,\n  // Tracks\n  buttonTracksAll,\n  buttonTracksAdd,\n  buttonTracksEdit,\n  buttonTracksDelete,\n} = __webpack_require__(/*! ./index.js */ \"./src/components/index.js\");\n\n// Functions that build all the pages\nconst buildHomePage = __webpack_require__(/*! ../pages/home.js */ \"./src/pages/home.js\");\nconst buildSearchPage = __webpack_require__(/*! ../pages/search.js */ \"./src/pages/search.js\");\nconst buildStatsPage = __webpack_require__(/*! ../pages/statistics.js */ \"./src/pages/statistics.js\");\nconst buildProfilePage = __webpack_require__(/*! ../pages/profile.js */ \"./src/pages/profile.js\");\n\n// Albums\nconst {\n  buildAlbumsAllPage,\n  buildAlbumsAddPage,\n  buildAlbumsEditPage,\n  buildAlbumsDeletePage,\n} = __webpack_require__(/*! ../pages/albums/index.js */ \"./src/pages/albums/index.js\");\n\n// CDs\nconst {\n  buildCDsAllPage,\n  buildCDsAddPage,\n  buildCDsEditPage,\n  buildCDsDeletePage,\n} = __webpack_require__(/*! ../pages/cds/index.js */ \"./src/pages/cds/index.js\");\n\n// Tracks\nconst {\n  buildTracksAllPage,\n  buildTracksAddPage,\n  buildTracksEditPage,\n  buildTracksDeletePage,\n} = __webpack_require__(/*! ../pages/tracks/index.js */ \"./src/pages/tracks/index.js\");\n\n// Iterate through each button in the navigation menu and link them to the corresponding build-function\nfunction addButtonEventListeners(buttons, buildFunctions) {\n  buttons.forEach((button, index) => {\n    button.addEventListener('click', buildFunctions[index]);\n  });\n}\n\n// Collect all buttons and build-functions to add eventlisteners on\nfunction setNavEventListeners() {\n\n  // All buttons in the navigation menu\n  const homeButtons = [\n    buttonHome,\n    buttonSearch,\n    buttonStats,\n    buttonProfile,\n    // Albums\n    buttonAlbumsAll,\n    buttonAlbumsAdd,\n    buttonAlbumsEdit,\n    buttonAlbumsDelete,\n    // CDs\n    buttonCDsAll,\n    buttonCDsAdd,\n    buttonCDsEdit,\n    buttonCDsDelete,\n    // Tracks\n    buttonTracksAll,\n    buttonTracksAdd,\n    buttonTracksEdit,\n    buttonTracksDelete,\n  ];\n\n  // All corresponding build-page functions in order\n  const buildFunctions = [\n    buildHomePage,\n    buildSearchPage,\n    buildStatsPage,\n    buildProfilePage,\n    // Albums\n    buildAlbumsAllPage,\n    buildAlbumsAddPage,\n    buildAlbumsEditPage,\n    buildAlbumsDeletePage,\n    // CDs\n    buildCDsAllPage,\n    buildCDsAddPage,\n    buildCDsEditPage,\n    buildCDsDeletePage,\n    // Tracks\n    buildTracksAllPage,\n    buildTracksAddPage,\n    buildTracksEditPage,\n    buildTracksDeletePage,\n  ];\n\n  // Use both lists to add the event listeners\n  addButtonEventListeners(homeButtons, buildFunctions);\n}\n\nmodule.exports = setNavEventListeners;\n\n\n//# sourceURL=webpack://cd-manager/./src/components/navBar.js?");

/***/ }),

/***/ "./src/components/titleHolder.js":
/*!***************************************!*\
  !*** ./src/components/titleHolder.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { pageHolder, titleHolder } = __webpack_require__(/*! ./commonElements.js */ \"./src/components/commonElements.js\");\n\n// Set the title\nfunction setTitle(title) {\n  titleHolder.textContent = title; // Set text of the title\n  pageHolder.append(titleHolder);\n}\n\nmodule.exports = setTitle;\n\n\n//# sourceURL=webpack://cd-manager/./src/components/titleHolder.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// const Controller = require('./controller/Controller.js');\n// const User = require('./modules/User.js');\nconst setNavEventListeners = __webpack_require__(/*! ./components/navBar.js */ \"./src/components/navBar.js\");\nconst buildHomePage = __webpack_require__(/*! ./pages/home.js */ \"./src/pages/home.js\");\n\n\n// // Test account\n// const _USERNAME = 'admin';\n\n// // Create a new user with acces to all the controller-methods\n// const controller = new Controller();\n// const user = new User(controller, _USERNAME);\n\n// Activate navigation buttons\nsetNavEventListeners();\n\n// Start on default page\nbuildHomePage();\n\n\n//# sourceURL=webpack://cd-manager/./src/index.js?");

/***/ }),

/***/ "./src/pages/albums/add.js":
/*!*********************************!*\
  !*** ./src/pages/albums/add.js ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { setTitle, buildAddAlbumForm } = __webpack_require__(/*! ../../components/index.js */ \"./src/components/index.js\");\nconst clearContentHolder = __webpack_require__(/*! ../../utils/dom.js */ \"./src/utils/dom.js\");\n\nfunction buildAddAllPage() {\n\n  clearContentHolder();\n\n  setTitle('Add a new album to your collection');\n\n  buildAddAlbumForm();\n}\n\nmodule.exports = buildAddAllPage;\n\n\n//# sourceURL=webpack://cd-manager/./src/pages/albums/add.js?");

/***/ }),

/***/ "./src/pages/albums/delete.js":
/*!************************************!*\
  !*** ./src/pages/albums/delete.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { setTitle } = __webpack_require__(/*! ../../components/index.js */ \"./src/components/index.js\");\nconst clearContentHolder = __webpack_require__(/*! ../../utils/dom.js */ \"./src/utils/dom.js\");\n\nfunction buildDeletePage() {\n\n  clearContentHolder();\n\n  setTitle('Remove a album from your collection');\n}\n\nmodule.exports = buildDeletePage;\n\n\n//# sourceURL=webpack://cd-manager/./src/pages/albums/delete.js?");

/***/ }),

/***/ "./src/pages/albums/edit.js":
/*!**********************************!*\
  !*** ./src/pages/albums/edit.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { setTitle } = __webpack_require__(/*! ../../components/index.js */ \"./src/components/index.js\");\nconst clearContentHolder = __webpack_require__(/*! ../../utils/dom.js */ \"./src/utils/dom.js\");\n\nfunction buildEditAllPage() {\n\n  clearContentHolder();\n\n  setTitle('Edit a album');\n}\n\nmodule.exports = buildEditAllPage;\n\n\n//# sourceURL=webpack://cd-manager/./src/pages/albums/edit.js?");

/***/ }),

/***/ "./src/pages/albums/index.js":
/*!***********************************!*\
  !*** ./src/pages/albums/index.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const buildAlbumsAllPage = __webpack_require__(/*! ./viewAll.js */ \"./src/pages/albums/viewAll.js\");\nconst buildAlbumsAddPage = __webpack_require__(/*! ./add.js */ \"./src/pages/albums/add.js\");\nconst buildAlbumsEditPage = __webpack_require__(/*! ./edit.js */ \"./src/pages/albums/edit.js\");\nconst buildAlbumsDeletePage = __webpack_require__(/*! ./delete.js */ \"./src/pages/albums/delete.js\");\n\nmodule.exports = {\n  buildAlbumsAllPage,\n  buildAlbumsAddPage,\n  buildAlbumsEditPage,\n  buildAlbumsDeletePage,\n};\n\n\n//# sourceURL=webpack://cd-manager/./src/pages/albums/index.js?");

/***/ }),

/***/ "./src/pages/albums/viewAll.js":
/*!*************************************!*\
  !*** ./src/pages/albums/viewAll.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { setTitle } = __webpack_require__(/*! ../../components/index.js */ \"./src/components/index.js\");\nconst renderAlbums = __webpack_require__(/*! ../../../api/albumsAll.js */ \"./api/albumsAll.js\");\nconst clearContentHolder = __webpack_require__(/*! ../../utils/dom.js */ \"./src/utils/dom.js\");\n\nfunction buildAlbumsAllPage() {\n\n  clearContentHolder();\n\n  setTitle('Overview of all albums in your collection');\n\n  renderAlbums();\n}\n\nmodule.exports = buildAlbumsAllPage;\n\n\n//# sourceURL=webpack://cd-manager/./src/pages/albums/viewAll.js?");

/***/ }),

/***/ "./src/pages/cds/add.js":
/*!******************************!*\
  !*** ./src/pages/cds/add.js ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { setTitle, buildAddCDForm } = __webpack_require__(/*! ../../components/index.js */ \"./src/components/index.js\");\nconst clearContentHolder = __webpack_require__(/*! ../../utils/dom.js */ \"./src/utils/dom.js\");\n\nfunction buildCDsAddPage() {\n\n  clearContentHolder();\n\n  setTitle('Add a new CD to your collection');\n\n  buildAddCDForm();\n}\n\nmodule.exports = buildCDsAddPage;\n\n\n//# sourceURL=webpack://cd-manager/./src/pages/cds/add.js?");

/***/ }),

/***/ "./src/pages/cds/delete.js":
/*!*********************************!*\
  !*** ./src/pages/cds/delete.js ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { setTitle } = __webpack_require__(/*! ../../components/index.js */ \"./src/components/index.js\");\nconst clearContentHolder = __webpack_require__(/*! ../../utils/dom.js */ \"./src/utils/dom.js\");\n\nfunction buildCDsDeletePage() {\n\n  clearContentHolder();\n\n  setTitle('Remove a CD from your collection');\n}\n\nmodule.exports = buildCDsDeletePage;\n\n\n//# sourceURL=webpack://cd-manager/./src/pages/cds/delete.js?");

/***/ }),

/***/ "./src/pages/cds/edit.js":
/*!*******************************!*\
  !*** ./src/pages/cds/edit.js ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { setTitle } = __webpack_require__(/*! ../../components/index.js */ \"./src/components/index.js\");\nconst clearContentHolder = __webpack_require__(/*! ../../utils/dom.js */ \"./src/utils/dom.js\");\n\nfunction buildCDsEditPage() {\n\n  clearContentHolder();\n\n  setTitle('Edit a CD');\n}\n\nmodule.exports = buildCDsEditPage;\n\n\n//# sourceURL=webpack://cd-manager/./src/pages/cds/edit.js?");

/***/ }),

/***/ "./src/pages/cds/index.js":
/*!********************************!*\
  !*** ./src/pages/cds/index.js ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const buildCDsAllPage = __webpack_require__(/*! ./viewAll.js */ \"./src/pages/cds/viewAll.js\");\nconst buildCDsAddPage = __webpack_require__(/*! ./add.js */ \"./src/pages/cds/add.js\");\nconst buildCDsEditPage = __webpack_require__(/*! ./edit.js */ \"./src/pages/cds/edit.js\");\nconst buildCDsDeletePage = __webpack_require__(/*! ./delete.js */ \"./src/pages/cds/delete.js\");\n\nmodule.exports = {\n  buildCDsAllPage,\n  buildCDsAddPage,\n  buildCDsEditPage,\n  buildCDsDeletePage,\n};\n\n\n//# sourceURL=webpack://cd-manager/./src/pages/cds/index.js?");

/***/ }),

/***/ "./src/pages/cds/viewAll.js":
/*!**********************************!*\
  !*** ./src/pages/cds/viewAll.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { setTitle } = __webpack_require__(/*! ../../components/index.js */ \"./src/components/index.js\");\nconst renderCDs = __webpack_require__(/*! ../../../api/cdsAll.js */ \"./api/cdsAll.js\");\nconst clearContentHolder = __webpack_require__(/*! ../../utils/dom.js */ \"./src/utils/dom.js\");\n\nfunction buildCDsAllPage() {\n\n  clearContentHolder();\n\n  setTitle('Overview of all CDs in your collection');\n\n  renderCDs();\n}\n\nmodule.exports = buildCDsAllPage;\n\n\n//# sourceURL=webpack://cd-manager/./src/pages/cds/viewAll.js?");

/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { setTitle } = __webpack_require__(/*! ../components/index.js */ \"./src/components/index.js\");\nconst clearContentHolder = __webpack_require__(/*! ../utils/dom.js */ \"./src/utils/dom.js\");\n\n// Create the home page with components\nfunction buildHomePage() {\n\n  clearContentHolder();\n\n  setTitle('Organize your music');\n}\n\nmodule.exports = buildHomePage;\n\n\n//# sourceURL=webpack://cd-manager/./src/pages/home.js?");

/***/ }),

/***/ "./src/pages/profile.js":
/*!******************************!*\
  !*** ./src/pages/profile.js ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { setTitle } = __webpack_require__(/*! ../components/index.js */ \"./src/components/index.js\");\nconst clearContentHolder = __webpack_require__(/*! ../utils/dom.js */ \"./src/utils/dom.js\");\n\n// Create the profile page with individual components\nfunction buildProfilePage() {\n\n  clearContentHolder();\n\n  setTitle('Your profile');\n}\n\nmodule.exports = buildProfilePage;\n\n\n//# sourceURL=webpack://cd-manager/./src/pages/profile.js?");

/***/ }),

/***/ "./src/pages/search.js":
/*!*****************************!*\
  !*** ./src/pages/search.js ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { setTitle } = __webpack_require__(/*! ../components/index.js */ \"./src/components/index.js\");\nconst clearContentHolder = __webpack_require__(/*! ../utils/dom.js */ \"./src/utils/dom.js\");\n\n// Create the search page with individual components\nfunction buildSearchPage() {\n\n  clearContentHolder();\n\n  setTitle('Search for Albums, CDs or tracks');\n}\n\nmodule.exports = buildSearchPage;\n\n\n//# sourceURL=webpack://cd-manager/./src/pages/search.js?");

/***/ }),

/***/ "./src/pages/statistics.js":
/*!*********************************!*\
  !*** ./src/pages/statistics.js ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { setTitle } = __webpack_require__(/*! ../components/index.js */ \"./src/components/index.js\");\nconst clearContentHolder = __webpack_require__(/*! ../utils/dom.js */ \"./src/utils/dom.js\");\n\n// Create the statistics page with individual components\nfunction buildStatsPage() {\n\n  clearContentHolder();\n\n  setTitle('Statistics of your collection');\n}\n\nmodule.exports = buildStatsPage;\n\n\n//# sourceURL=webpack://cd-manager/./src/pages/statistics.js?");

/***/ }),

/***/ "./src/pages/tracks/add.js":
/*!*********************************!*\
  !*** ./src/pages/tracks/add.js ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { setTitle, buildAddTrackForm } = __webpack_require__(/*! ../../components/index.js */ \"./src/components/index.js\");\nconst clearContentHolder = __webpack_require__(/*! ../../utils/dom.js */ \"./src/utils/dom.js\");\n\nfunction buildTracksAddPage() {\n\n  clearContentHolder();\n\n  setTitle('Add a new track to your collection');\n\n  buildAddTrackForm();\n}\n\nmodule.exports = buildTracksAddPage;\n\n\n//# sourceURL=webpack://cd-manager/./src/pages/tracks/add.js?");

/***/ }),

/***/ "./src/pages/tracks/delete.js":
/*!************************************!*\
  !*** ./src/pages/tracks/delete.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { setTitle } = __webpack_require__(/*! ../../components/index.js */ \"./src/components/index.js\");\nconst clearContentHolder = __webpack_require__(/*! ../../utils/dom.js */ \"./src/utils/dom.js\");\n\nfunction buildTracksDeletePage() {\n\n  clearContentHolder();\n\n  setTitle('Remove a track from your collection');\n}\n\nmodule.exports = buildTracksDeletePage;\n\n\n//# sourceURL=webpack://cd-manager/./src/pages/tracks/delete.js?");

/***/ }),

/***/ "./src/pages/tracks/edit.js":
/*!**********************************!*\
  !*** ./src/pages/tracks/edit.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { setTitle } = __webpack_require__(/*! ../../components/index.js */ \"./src/components/index.js\");\nconst clearContentHolder = __webpack_require__(/*! ../../utils/dom.js */ \"./src/utils/dom.js\");\n\nfunction buildTracksEditPage() {\n\n  clearContentHolder();\n\n  setTitle('Edit a track');\n}\n\nmodule.exports = buildTracksEditPage;\n\n\n//# sourceURL=webpack://cd-manager/./src/pages/tracks/edit.js?");

/***/ }),

/***/ "./src/pages/tracks/index.js":
/*!***********************************!*\
  !*** ./src/pages/tracks/index.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const buildTracksAllPage = __webpack_require__(/*! ./viewAll.js */ \"./src/pages/tracks/viewAll.js\");\nconst buildTracksAddPage = __webpack_require__(/*! ./add.js */ \"./src/pages/tracks/add.js\");\nconst buildTracksEditPage = __webpack_require__(/*! ./edit.js */ \"./src/pages/tracks/edit.js\");\nconst buildTracksDeletePage = __webpack_require__(/*! ./delete.js */ \"./src/pages/tracks/delete.js\");\n\nmodule.exports = {\n  buildTracksAllPage,\n  buildTracksAddPage,\n  buildTracksEditPage,\n  buildTracksDeletePage,\n};\n\n\n//# sourceURL=webpack://cd-manager/./src/pages/tracks/index.js?");

/***/ }),

/***/ "./src/pages/tracks/viewAll.js":
/*!*************************************!*\
  !*** ./src/pages/tracks/viewAll.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { setTitle } = __webpack_require__(/*! ../../components/index.js */ \"./src/components/index.js\");\nconst renderTracks = __webpack_require__(/*! ../../../api/tracksAll.js */ \"./api/tracksAll.js\");\nconst clearContentHolder = __webpack_require__(/*! ../../utils/dom.js */ \"./src/utils/dom.js\");\n\nfunction buildTracksAllPage() {\n\n  clearContentHolder();\n\n  setTitle('Overview of all tracks in your collection');\n\n  renderTracks();\n}\n\nmodule.exports = buildTracksAllPage;\n\n\n//# sourceURL=webpack://cd-manager/./src/pages/tracks/viewAll.js?");

/***/ }),

/***/ "./src/utils/dom.js":
/*!**************************!*\
  !*** ./src/utils/dom.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { pageHolder, titleHolder, contentHolder } = __webpack_require__(/*! ../components/index.js */ \"./src/components/index.js\");\n\n// Clear all content before adding new content\nfunction clearContentHolder() {\n  pageHolder.innerHTML = '';\n  titleHolder.innerHTML = '';\n  contentHolder.innerHTML = '';\n}\n\nmodule.exports = clearContentHolder;\n\n\n//# sourceURL=webpack://cd-manager/./src/utils/dom.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;