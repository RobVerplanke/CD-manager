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

/***/ "./api/album/albumsHTML.js":
/*!*********************************!*\
  !*** ./api/album/albumsHTML.js ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// Don't import from the index file, as it may cause asynchronous issues\nconst { pageHolder, contentHolder } = __webpack_require__(/*! ../../src/components/utils/commonElements.js */ \"./src/components/utils/commonElements.js\");\n\nasync function getAlbumsHTML() {\n  const url = 'http://localhost:3000/albums';\n\n  const result = await fetch(url);\n  const data = await result.json();\n\n  let template = '';\n\n  data.forEach((album) => {\n    template += `\n    <ul class=\"items-list\">\n      <li class=\"list-img\"><img width=\"150px\" height=\"auto\" src=\"${album.img}\"></li>\n      <li class=\"list-item text-title-light\"><p>${album.title}</p></li>\n      <li class=\"list-item text-artist-light\"><p>${album.artist}</p></li>\n    </ul>\n    `;\n  });\n\n  contentHolder.innerHTML += template;\n\n  contentHolder.classList.remove('no-img-in-item');\n  contentHolder.classList.add('img-in-item');\n\n  pageHolder.append(contentHolder);\n}\n\nmodule.exports = getAlbumsHTML;\n\n\n//# sourceURL=webpack://cd-manager/./api/album/albumsHTML.js?");

/***/ }),

/***/ "./api/album/albumsTitles.js":
/*!***********************************!*\
  !*** ./api/album/albumsTitles.js ***!
  \***********************************/
/***/ ((module) => {

eval("async function getAlbumTitles() {\n  const list = [];\n  const url = 'http://localhost:3000/albums';\n\n  const result = await fetch(url);\n  const data = await result.json();\n\n\n  data.forEach((album) => {\n    list.push([album.title]);\n  });\n\n  return list;\n}\n\nmodule.exports = getAlbumTitles;\n\n\n//# sourceURL=webpack://cd-manager/./api/album/albumsTitles.js?");

/***/ }),

/***/ "./api/cd/CDsTitles.js":
/*!*****************************!*\
  !*** ./api/cd/CDsTitles.js ***!
  \*****************************/
/***/ ((module) => {

eval("async function getCDTitles() {\n  const list = [];\n  const url = 'http://localhost:3000/cds';\n\n  const result = await fetch(url);\n  const data = await result.json();\n\n\n  data.forEach((cd) => {\n    list.push([cd.title]);\n  });\n\n  return list;\n}\n\nmodule.exports = getCDTitles;\n\n\n//# sourceURL=webpack://cd-manager/./api/cd/CDsTitles.js?");

/***/ }),

/***/ "./api/cd/cdsHTML.js":
/*!***************************!*\
  !*** ./api/cd/cdsHTML.js ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// Don't import from the index file, as it may cause asynchronous issues\nconst { pageHolder, contentHolder } = __webpack_require__(/*! ../../src/components/utils/commonElements.js */ \"./src/components/utils/commonElements.js\");\n\nasync function getCDsHTML() {\n  const url = 'http://localhost:3000/cds';\n\n  const result = await fetch(url);\n  const data = await result.json();\n\n  let template = '';\n\n  data.forEach((cd) => {\n    template += `\n    <ul class=\"items-list\">\n      <li class=\"list-img\"><img width=\"150px\" height=\"auto\" src=\"${cd.img}\"></li>\n      <li class=\"list-item text-album\"><p>${cd.album}</p></li>\n      <li class=\"list-item text-title-light\"><p>${cd.title}</p></li>\n      <li class=\"list-item text-artist-light\"><p>${cd.artist}</p></li>\n    </ul>\n    `;\n  });\n\n  contentHolder.innerHTML += template;\n\n  contentHolder.classList.remove('no-img-in-item');\n  contentHolder.classList.add('img-in-item');\n\n  pageHolder.append(contentHolder);\n}\n\nmodule.exports = getCDsHTML;\n\n\n//# sourceURL=webpack://cd-manager/./api/cd/cdsHTML.js?");

/***/ }),

/***/ "./api/index.js":
/*!**********************!*\
  !*** ./api/index.js ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const getAlbumsHTML = __webpack_require__(/*! ./album/albumsHTML.js */ \"./api/album/albumsHTML.js\");\nconst getCDsHTML = __webpack_require__(/*! ./cd/cdsHTML.js */ \"./api/cd/cdsHTML.js\");\nconst getTracksHTML = __webpack_require__(/*! ./track/tracksHTML.js */ \"./api/track/tracksHTML.js\");\nconst getAlbumTitles = __webpack_require__(/*! ./album/albumsTitles.js */ \"./api/album/albumsTitles.js\");\nconst getCDTitles = __webpack_require__(/*! ./cd/CDsTitles.js */ \"./api/cd/CDsTitles.js\");\n\nmodule.exports = {\n  getAlbumsHTML,\n  getCDsHTML,\n  getTracksHTML,\n  getAlbumTitles,\n  getCDTitles,\n};\n\n\n//# sourceURL=webpack://cd-manager/./api/index.js?");

/***/ }),

/***/ "./api/track/tracksHTML.js":
/*!*********************************!*\
  !*** ./api/track/tracksHTML.js ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// Don't import from the index file, as it may cause asynchronous issues\nconst { pageHolder, contentHolder } = __webpack_require__(/*! ../../src/components/utils/commonElements.js */ \"./src/components/utils/commonElements.js\");\n\nasync function getTracksHTML() {\n  const url = 'http://localhost:3000/tracks';\n\n  const result = await fetch(url);\n  const data = await result.json();\n\n  let template = '';\n\n  data.forEach((track) => {\n    template += `\n    <ul class=\"items-list-no-img\">\n      <li class=\"list-item text-title-dark\"><p>${track.title}</p></li>\n      <li class=\"list-item text-artist-dark\"><p>${track.artist}</p></li>\n      <li class=\"list-item text-artist-dark\"><p>length: <strong>${track.length}</strong></p></li>\n    </ul>\n    `;\n  });\n\n  contentHolder.innerHTML += template;\n\n  contentHolder.classList.remove('img-in-item');\n  contentHolder.classList.add('no-img-in-item');\n\n  pageHolder.append(contentHolder);\n}\n\nmodule.exports = getTracksHTML;\n\n\n//# sourceURL=webpack://cd-manager/./api/track/tracksHTML.js?");

/***/ }),

/***/ "./src/components/forms/album/addAlbum.js":
/*!************************************************!*\
  !*** ./src/components/forms/album/addAlbum.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { pageHolder, contentHolder } = __webpack_require__(/*! ../../utils/commonElements.js */ \"./src/components/utils/commonElements.js\");\nconst createFormInput = __webpack_require__(/*! ../utils.js */ \"./src/components/forms/utils.js\");\n\nfunction buildAddAlbumForm() {\n  const form = document.createElement('form');\n  form.classList.add('add-form');\n\n  form.append(createFormInput('Title', 'text', 'input', 'Title of album...'));\n  form.append(createFormInput('Artist', 'text', 'input', 'Name of artist...'));\n  form.append(createFormInput('Collaborators', 'text', 'input', 'Artist 2, Artist 3, ...'));\n  form.append(createFormInput('Label', 'text', 'input', 'Enter label here...'));\n  form.append(createFormInput('Genre', 'text', 'input', 'Rock, Classical, Electronic, ...'));\n  form.append(createFormInput('Year', 'number', 'select'));\n  form.append(createFormInput('Info', 'text', 'textarea', 'Extra info here...'));\n  form.append(createFormInput('Rating', 'text', 'select'));\n  form.append(createFormInput('Cover', 'file', 'input'));\n\n  // Voeg een verzendknop toe\n  const submitButton = document.createElement('button');\n  submitButton.setAttribute('type', 'submit');\n  submitButton.setAttribute('id', 'add-button');\n  submitButton.textContent = 'Add';\n\n  form.appendChild(submitButton);\n  contentHolder.append(form);\n\n  pageHolder.append(contentHolder);\n}\n\nmodule.exports = buildAddAlbumForm;\n\n\n//# sourceURL=webpack://cd-manager/./src/components/forms/album/addAlbum.js?");

/***/ }),

/***/ "./src/components/forms/cd/addCD.js":
/*!******************************************!*\
  !*** ./src/components/forms/cd/addCD.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { pageHolder, contentHolder } = __webpack_require__(/*! ../../utils/commonElements.js */ \"./src/components/utils/commonElements.js\");\nconst createFormInput = __webpack_require__(/*! ../utils.js */ \"./src/components/forms/utils.js\");\n\nfunction buildAddCDForm() {\n  const form = document.createElement('form');\n  form.classList.add('add-form');\n\n  form.append(createFormInput('Album', 'text', 'select'));\n  form.append(createFormInput('Title', 'text', 'input', 'Title of CD...'));\n  form.append(createFormInput('Artist', 'text', 'input', 'Name of artist...'));\n  form.append(createFormInput('Collaborators', 'text', 'input', 'Artist 2, Artist 3, ...'));\n  form.append(createFormInput('Label', 'text', 'input', 'Enter label here...'));\n  form.append(createFormInput('Genre', 'text', 'input', 'Rock, Classical, Electronic, ...'));\n  form.append(createFormInput('Year', 'number', 'select'));\n  form.append(createFormInput('Info', 'text', 'textarea', 'Extra info here...'));\n  form.append(createFormInput('Rating', 'text', 'select'));\n  form.append(createFormInput('Cover', 'file', 'input'));\n\n  // Voeg een verzendknop toe\n  const submitButton = document.createElement('button');\n  submitButton.setAttribute('type', 'submit');\n  submitButton.setAttribute('id', 'add-button');\n  submitButton.textContent = 'Add';\n\n  form.appendChild(submitButton);\n  contentHolder.append(form);\n\n  pageHolder.append(contentHolder);\n}\n\nmodule.exports = buildAddCDForm;\n\n\n//# sourceURL=webpack://cd-manager/./src/components/forms/cd/addCD.js?");

/***/ }),

/***/ "./src/components/forms/track/addTrack.js":
/*!************************************************!*\
  !*** ./src/components/forms/track/addTrack.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { pageHolder, contentHolder } = __webpack_require__(/*! ../../utils/commonElements.js */ \"./src/components/utils/commonElements.js\");\nconst createFormInput = __webpack_require__(/*! ../utils.js */ \"./src/components/forms/utils.js\");\n\nfunction buildAddTrackForm() {\n  const form = document.createElement('form');\n  form.classList.add('add-form');\n\n  form.append(createFormInput('Cd', 'text', 'select'));\n  form.append(createFormInput('Title', 'text', 'input', 'Title of track...'));\n  form.append(createFormInput('Artist', 'text', 'input', 'Name of artist...'));\n  form.append(createFormInput('Remix', 'text', 'input', 'Mixed by...'));\n  form.append(createFormInput('Collaborators', 'text', 'input', 'Artist 2, Artist 3, ...'));\n  form.append(createFormInput('Label', 'text', 'input', 'Enter label here...'));\n  form.append(createFormInput('Style', 'text', 'input', 'Ambient, Blues rock, Trance, ...'));\n  form.append(createFormInput('Length', 'text', 'input', '3:45...'));\n  form.append(createFormInput('Info', 'text', 'textarea', 'Extra info here...'));\n  form.append(createFormInput('Rating', 'text', 'select'));\n\n  // Voeg een verzendknop toe\n  const submitButton = document.createElement('button');\n  submitButton.setAttribute('type', 'submit');\n  submitButton.setAttribute('id', 'add-button');\n  submitButton.textContent = 'Add';\n\n  form.appendChild(submitButton);\n  contentHolder.append(form);\n\n  pageHolder.append(contentHolder);\n}\n\nmodule.exports = buildAddTrackForm;\n\n\n//# sourceURL=webpack://cd-manager/./src/components/forms/track/addTrack.js?");

/***/ }),

/***/ "./src/components/forms/utils.js":
/*!***************************************!*\
  !*** ./src/components/forms/utils.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { getCDTitles } = __webpack_require__(/*! ../../../api/index.js */ \"./api/index.js\");\nconst { getAlbumTitles } = __webpack_require__(/*! ../../../api/index.js */ \"./api/index.js\");\n\nfunction buildYearOptions(element) {\n  const selectElement = element;\n  const currentYear = new Date().getFullYear();\n\n  for (let i = currentYear; i > 1900; i--) {\n    const newOption = document.createElement('option');\n    newOption.setAttribute('value', i);\n    newOption.textContent = i;\n    selectElement.append(newOption);\n  }\n}\n\nasync function buildCDOptions(element) {\n  const selectElement = element;\n  const defaultOption = document.createElement('option');\n  defaultOption.textContent = '-';\n  defaultOption.setAttribute('selected', 'selected');\n  selectElement.append(defaultOption);\n\n  const CDsList = await getCDTitles();\n\n  CDsList.forEach(([title]) => {\n    const newOption = document.createElement('option');\n    newOption.setAttribute('value', title);\n    newOption.textContent = title;\n    selectElement.append(newOption);\n  });\n}\n\n\nasync function buildAlbumOptions(element) {\n  const selectElement = element;\n  const defaultOption = document.createElement('option');\n  defaultOption.textContent = '-';\n  defaultOption.setAttribute('selected', 'selected');\n\n  selectElement.append(defaultOption);\n\n  const albumsList = await getAlbumTitles();\n\n  albumsList.forEach(([title]) => {\n    const newOption = document.createElement('option');\n    newOption.setAttribute('value', title);\n    newOption.textContent = title;\n    selectElement.append(newOption);\n  });\n}\n\nfunction buildRatingStars(amount) {\n  let starsList = '';\n\n  for (let i = 0; i < amount; i++) {\n    starsList += '⭐';\n  }\n  return starsList;\n}\n\nfunction buildRatingOptions(element) {\n  const selectElement = element;\n  const defaultOption = document.createElement('option');\n  defaultOption.textContent = '-';\n  defaultOption.setAttribute('selected', 'selected');\n\n  selectElement.append(defaultOption);\n\n  for (let i = 1; i <= 5; i++) {\n    const newOption = document.createElement('option');\n    newOption.textContent = buildRatingStars(i);\n    selectElement.append(newOption);\n  }\n}\n\nfunction createFormInput(labelText, type, element, placeholder) {\n  const holder = document.createElement('div');\n  holder.classList.add('form-input-holder');\n\n  const label = document.createElement('label');\n  label.textContent = `${labelText}:`;\n  label.classList.add('form-label');\n  label.setAttribute('for', labelText.toLowerCase());\n\n  const input = document.createElement(element);\n  input.setAttribute('type', type);\n  input.setAttribute('id', labelText.toLowerCase());\n  input.setAttribute('name', labelText.toLowerCase());\n  input.setAttribute('placeholder', placeholder);\n\n  if (labelText === 'Cover') input.setAttribute('accept', 'image/png, image/jpeg');\n  if (labelText === 'Year') buildYearOptions(input);\n  if (labelText === 'Cd') buildCDOptions(input);\n  if (labelText === 'Album') buildAlbumOptions(input);\n  if (labelText === 'Rating') buildRatingOptions(input);\n\n  holder.append(label, input);\n\n  return holder;\n}\n\nmodule.exports = createFormInput;\n\n\n//# sourceURL=webpack://cd-manager/./src/components/forms/utils.js?");

/***/ }),

/***/ "./src/components/index.js":
/*!*********************************!*\
  !*** ./src/components/index.js ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const setTitle = __webpack_require__(/*! ./utils/setTitleText.js */ \"./src/components/utils/setTitleText.js\");\nconst clearContentHolders = __webpack_require__(/*! ./utils/clearHolders.js */ \"./src/components/utils/clearHolders.js\");\nconst buildAddAlbumForm = __webpack_require__(/*! ./forms/album/addAlbum.js */ \"./src/components/forms/album/addAlbum.js\");\nconst buildAddCDForm = __webpack_require__(/*! ./forms/cd/addCD.js */ \"./src/components/forms/cd/addCD.js\");\nconst buildAddTrackForm = __webpack_require__(/*! ./forms/track/addTrack.js */ \"./src/components/forms/track/addTrack.js\");\n\nconst {\n  // Holders\n  pageHolder,\n  titleHolder,\n  contentHolder,\n  // Buttons\n  buttonHome,\n  buttonSearch,\n  buttonStats,\n  buttonProfile,\n  // Albums\n  buttonAlbumsAll,\n  buttonAlbumsAdd,\n  buttonAlbumsEdit,\n  buttonAlbumsDelete,\n  // CDs\n  buttonCDsAll,\n  buttonCDsAdd,\n  buttonCDsEdit,\n  buttonCDsDelete,\n  // Tracks\n  buttonTracksAll,\n  buttonTracksAdd,\n  buttonTracksEdit,\n  buttonTracksDelete,\n} = __webpack_require__(/*! ./utils/commonElements.js */ \"./src/components/utils/commonElements.js\");\n\nmodule.exports = {\n  // Holders\n  pageHolder,\n  titleHolder,\n  contentHolder,\n  // Buttons\n  buttonHome,\n  buttonSearch,\n  buttonStats,\n  buttonProfile,\n  // Albums\n  buttonAlbumsAll,\n  buttonAlbumsAdd,\n  buttonAlbumsEdit,\n  buttonAlbumsDelete,\n  // CDs\n  buttonCDsAll,\n  buttonCDsAdd,\n  buttonCDsEdit,\n  buttonCDsDelete,\n  // Tracks\n  buttonTracksAll,\n  buttonTracksAdd,\n  buttonTracksEdit,\n  buttonTracksDelete,\n  setTitle,\n  clearContentHolders,\n  buildAddAlbumForm,\n  buildAddCDForm,\n  buildAddTrackForm,\n};\n\n\n//# sourceURL=webpack://cd-manager/./src/components/index.js?");

/***/ }),

/***/ "./src/components/nav/navBar.js":
/*!**************************************!*\
  !*** ./src/components/nav/navBar.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const {\n  buttonHome,\n  buttonSearch,\n  buttonStats,\n  buttonProfile,\n  // Albums\n  buttonAlbumsAll,\n  buttonAlbumsAdd,\n  buttonAlbumsEdit,\n  buttonAlbumsDelete,\n  // CDs\n  buttonCDsAll,\n  buttonCDsAdd,\n  buttonCDsEdit,\n  buttonCDsDelete,\n  // Tracks\n  buttonTracksAll,\n  buttonTracksAdd,\n  buttonTracksEdit,\n  buttonTracksDelete,\n} = __webpack_require__(/*! ../index.js */ \"./src/components/index.js\");\n\n// Functions that build all the pages\nconst buildHomePage = __webpack_require__(/*! ../../pages/homePage.js */ \"./src/pages/homePage.js\");\nconst buildSearchPage = __webpack_require__(/*! ../../pages/searchPage.js */ \"./src/pages/searchPage.js\");\nconst buildStatsPage = __webpack_require__(/*! ../../pages/statisticsPage.js */ \"./src/pages/statisticsPage.js\");\nconst buildProfilePage = __webpack_require__(/*! ../../pages/profilePage.js */ \"./src/pages/profilePage.js\");\n\n// Albums\nconst {\n  buildAlbumsAllPage,\n  buildAlbumsAddPage,\n  buildAlbumsEditPage,\n  buildAlbumsDeletePage,\n} = __webpack_require__(/*! ../../pages/albums/index.js */ \"./src/pages/albums/index.js\");\n\n// CDs\nconst {\n  buildCDsAllPage,\n  buildCDsAddPage,\n  buildCDsEditPage,\n  buildCDsDeletePage,\n} = __webpack_require__(/*! ../../pages/cds/index.js */ \"./src/pages/cds/index.js\");\n\n// Tracks\nconst {\n  buildTracksAllPage,\n  buildTracksAddPage,\n  buildTracksEditPage,\n  buildTracksDeletePage,\n} = __webpack_require__(/*! ../../pages/tracks/index.js */ \"./src/pages/tracks/index.js\");\n\n// Iterate through each button in the navigation menu and link them to the corresponding build-function\nfunction addButtonEventListeners(buttons, buildFunctions) {\n  buttons.forEach((button, index) => {\n    button.addEventListener('click', buildFunctions[index]);\n  });\n}\n\n// Collect all buttons and build-functions to add eventlisteners on\nfunction setNavEventListeners() {\n\n  // All buttons in the navigation menu\n  const homeButtons = [\n    buttonHome,\n    buttonSearch,\n    buttonStats,\n    buttonProfile,\n    // Albums\n    buttonAlbumsAll,\n    buttonAlbumsAdd,\n    buttonAlbumsEdit,\n    buttonAlbumsDelete,\n    // CDs\n    buttonCDsAll,\n    buttonCDsAdd,\n    buttonCDsEdit,\n    buttonCDsDelete,\n    // Tracks\n    buttonTracksAll,\n    buttonTracksAdd,\n    buttonTracksEdit,\n    buttonTracksDelete,\n  ];\n\n  // All corresponding build-page functions in order\n  const buildFunctions = [\n    buildHomePage,\n    buildSearchPage,\n    buildStatsPage,\n    buildProfilePage,\n    // Albums\n    buildAlbumsAllPage,\n    buildAlbumsAddPage,\n    buildAlbumsEditPage,\n    buildAlbumsDeletePage,\n    // CDs\n    buildCDsAllPage,\n    buildCDsAddPage,\n    buildCDsEditPage,\n    buildCDsDeletePage,\n    // Tracks\n    buildTracksAllPage,\n    buildTracksAddPage,\n    buildTracksEditPage,\n    buildTracksDeletePage,\n  ];\n\n  // Use both lists to add the event listeners\n  addButtonEventListeners(homeButtons, buildFunctions);\n}\n\nmodule.exports = setNavEventListeners;\n\n\n//# sourceURL=webpack://cd-manager/./src/components/nav/navBar.js?");

/***/ }),

/***/ "./src/components/utils/clearHolders.js":
/*!**********************************************!*\
  !*** ./src/components/utils/clearHolders.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { pageHolder, titleHolder, contentHolder } = __webpack_require__(/*! ./commonElements.js */ \"./src/components/utils/commonElements.js\");\n\n// Clear all content before adding new content\nfunction clearContentHolders() {\n  pageHolder.innerHTML = '';\n  titleHolder.innerHTML = '';\n  contentHolder.innerHTML = '';\n}\n\nmodule.exports = clearContentHolders;\n\n\n//# sourceURL=webpack://cd-manager/./src/components/utils/clearHolders.js?");

/***/ }),

/***/ "./src/components/utils/commonElements.js":
/*!************************************************!*\
  !*** ./src/components/utils/commonElements.js ***!
  \************************************************/
/***/ ((module) => {

eval("const pageHolder = document.querySelector('#page-holder');\nconst titleHolder = document.querySelector('#title-holder');\nconst contentHolder = document.querySelector('#content-holder');\nconst buttonHome = document.querySelector('#menu-button-home');\nconst buttonSearch = document.querySelector('#menu-button-search');\nconst buttonStats = document.querySelector('#menu-button-stats');\nconst buttonProfile = document.querySelector('#menu-button-profile');\n\n// Albums\nconst buttonAlbumsAll = document.querySelector('#drop-menu-albums-all');\nconst buttonAlbumsAdd = document.querySelector('#drop-menu-albums-add');\nconst buttonAlbumsEdit = document.querySelector('#drop-menu-albums-edit');\nconst buttonAlbumsDelete = document.querySelector('#drop-menu-albums-delete');\n\n// CDs\nconst buttonCDsAll = document.querySelector('#drop-menu-cds-all');\nconst buttonCDsAdd = document.querySelector('#drop-menu-cds-add');\nconst buttonCDsEdit = document.querySelector('#drop-menu-cds-edit');\nconst buttonCDsDelete = document.querySelector('#drop-menu-cds-delete');\n\n// Tracks\nconst buttonTracksAll = document.querySelector('#drop-menu-tracks-all');\nconst buttonTracksAdd = document.querySelector('#drop-menu-tracks-add');\nconst buttonTracksEdit = document.querySelector('#drop-menu-tracks-edit');\nconst buttonTracksDelete = document.querySelector('#drop-menu-tracks-delete');\n\nmodule.exports = {\n  pageHolder,\n  titleHolder,\n  contentHolder,\n  buttonHome,\n  buttonSearch,\n  buttonStats,\n  buttonProfile,\n  // Albums\n  buttonAlbumsAll,\n  buttonAlbumsAdd,\n  buttonAlbumsEdit,\n  buttonAlbumsDelete,\n  // CDs\n  buttonCDsAll,\n  buttonCDsAdd,\n  buttonCDsEdit,\n  buttonCDsDelete,\n  // Tracks\n  buttonTracksAll,\n  buttonTracksAdd,\n  buttonTracksEdit,\n  buttonTracksDelete,\n};\n\n\n//# sourceURL=webpack://cd-manager/./src/components/utils/commonElements.js?");

/***/ }),

/***/ "./src/components/utils/setTitleText.js":
/*!**********************************************!*\
  !*** ./src/components/utils/setTitleText.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { pageHolder, titleHolder } = __webpack_require__(/*! ./commonElements.js */ \"./src/components/utils/commonElements.js\");\n\n// Set the title above the content section\nfunction setTitle(title) {\n  titleHolder.textContent = title; // Set text of the title\n  pageHolder.append(titleHolder);\n}\n\nmodule.exports = setTitle;\n\n\n//# sourceURL=webpack://cd-manager/./src/components/utils/setTitleText.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// const Controller = require('./controller/Controller.js');\n// const User = require('./modules/User.js');\nconst setNavEventListeners = __webpack_require__(/*! ./components/nav/navBar.js */ \"./src/components/nav/navBar.js\");\nconst buildHomePage = __webpack_require__(/*! ./pages/homePage.js */ \"./src/pages/homePage.js\");\n\n\n// // Test account\n// const _USERNAME = 'admin';\n\n// // Create a new user with acces to all the controller-methods\n// const controller = new Controller();\n// const user = new User(controller, _USERNAME);\n\n// Activate navigation buttons\ndocument.addEventListener('DOMContentLoaded', () => {\n  setNavEventListeners();\n});\n\n\n// Start on default page\nbuildHomePage();\n\n\n//# sourceURL=webpack://cd-manager/./src/index.js?");

/***/ }),

/***/ "./src/pages/albums/addAlbum.js":
/*!**************************************!*\
  !*** ./src/pages/albums/addAlbum.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { clearContentHolders, setTitle, buildAddAlbumForm } = __webpack_require__(/*! ../../components/index.js */ \"./src/components/index.js\");\n\nfunction buildAddAllPage() {\n\n  clearContentHolders();\n\n  setTitle('Add a new album to your collection');\n\n  buildAddAlbumForm();\n}\n\nmodule.exports = buildAddAllPage;\n\n\n//# sourceURL=webpack://cd-manager/./src/pages/albums/addAlbum.js?");

/***/ }),

/***/ "./src/pages/albums/deleteAlbum.js":
/*!*****************************************!*\
  !*** ./src/pages/albums/deleteAlbum.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { clearContentHolders, setTitle } = __webpack_require__(/*! ../../components/index.js */ \"./src/components/index.js\");\n\nfunction buildDeletePage() {\n\n  clearContentHolders();\n\n  setTitle('Remove a album from your collection');\n}\n\nmodule.exports = buildDeletePage;\n\n\n//# sourceURL=webpack://cd-manager/./src/pages/albums/deleteAlbum.js?");

/***/ }),

/***/ "./src/pages/albums/editAlbum.js":
/*!***************************************!*\
  !*** ./src/pages/albums/editAlbum.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { clearContentHolders, setTitle } = __webpack_require__(/*! ../../components/index.js */ \"./src/components/index.js\");\n\nfunction buildEditAllPage() {\n\n  clearContentHolders();\n\n  setTitle('Edit a album');\n}\n\nmodule.exports = buildEditAllPage;\n\n\n//# sourceURL=webpack://cd-manager/./src/pages/albums/editAlbum.js?");

/***/ }),

/***/ "./src/pages/albums/index.js":
/*!***********************************!*\
  !*** ./src/pages/albums/index.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const buildAlbumsAllPage = __webpack_require__(/*! ./viewAllAlbums.js */ \"./src/pages/albums/viewAllAlbums.js\");\nconst buildAlbumsAddPage = __webpack_require__(/*! ./addAlbum.js */ \"./src/pages/albums/addAlbum.js\");\nconst buildAlbumsEditPage = __webpack_require__(/*! ./editAlbum.js */ \"./src/pages/albums/editAlbum.js\");\nconst buildAlbumsDeletePage = __webpack_require__(/*! ./deleteAlbum.js */ \"./src/pages/albums/deleteAlbum.js\");\n\nmodule.exports = {\n  buildAlbumsAllPage,\n  buildAlbumsAddPage,\n  buildAlbumsEditPage,\n  buildAlbumsDeletePage,\n};\n\n\n//# sourceURL=webpack://cd-manager/./src/pages/albums/index.js?");

/***/ }),

/***/ "./src/pages/albums/viewAllAlbums.js":
/*!*******************************************!*\
  !*** ./src/pages/albums/viewAllAlbums.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { clearContentHolders, setTitle } = __webpack_require__(/*! ../../components/index.js */ \"./src/components/index.js\");\nconst { getAlbumsHTML } = __webpack_require__(/*! ../../../api/index.js */ \"./api/index.js\");\n\nfunction buildAlbumsAllPage() {\n\n  clearContentHolders();\n\n  setTitle('Overview of all albums in your collection');\n\n  getAlbumsHTML();\n}\n\nmodule.exports = buildAlbumsAllPage;\n\n\n//# sourceURL=webpack://cd-manager/./src/pages/albums/viewAllAlbums.js?");

/***/ }),

/***/ "./src/pages/cds/addCD.js":
/*!********************************!*\
  !*** ./src/pages/cds/addCD.js ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { clearContentHolders, setTitle, buildAddCDForm } = __webpack_require__(/*! ../../components/index.js */ \"./src/components/index.js\");\n\nfunction buildCDsAddPage() {\n\n  clearContentHolders();\n\n  setTitle('Add a new CD to your collection');\n\n  buildAddCDForm();\n}\n\nmodule.exports = buildCDsAddPage;\n\n\n//# sourceURL=webpack://cd-manager/./src/pages/cds/addCD.js?");

/***/ }),

/***/ "./src/pages/cds/deleteCD.js":
/*!***********************************!*\
  !*** ./src/pages/cds/deleteCD.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { clearContentHolders, setTitle } = __webpack_require__(/*! ../../components/index.js */ \"./src/components/index.js\");\n\nfunction buildCDsDeletePage() {\n\n  clearContentHolders();\n\n  setTitle('Remove a CD from your collection');\n}\n\nmodule.exports = buildCDsDeletePage;\n\n\n//# sourceURL=webpack://cd-manager/./src/pages/cds/deleteCD.js?");

/***/ }),

/***/ "./src/pages/cds/editCD.js":
/*!*********************************!*\
  !*** ./src/pages/cds/editCD.js ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { clearContentHolders, setTitle } = __webpack_require__(/*! ../../components/index.js */ \"./src/components/index.js\");\n\nfunction buildCDsEditPage() {\n\n  clearContentHolders();\n\n  setTitle('Edit a CD');\n}\n\nmodule.exports = buildCDsEditPage;\n\n\n//# sourceURL=webpack://cd-manager/./src/pages/cds/editCD.js?");

/***/ }),

/***/ "./src/pages/cds/index.js":
/*!********************************!*\
  !*** ./src/pages/cds/index.js ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const buildCDsAllPage = __webpack_require__(/*! ./viewAllCDs.js */ \"./src/pages/cds/viewAllCDs.js\");\nconst buildCDsAddPage = __webpack_require__(/*! ./addCD.js */ \"./src/pages/cds/addCD.js\");\nconst buildCDsEditPage = __webpack_require__(/*! ./editCD.js */ \"./src/pages/cds/editCD.js\");\nconst buildCDsDeletePage = __webpack_require__(/*! ./deleteCD.js */ \"./src/pages/cds/deleteCD.js\");\n\nmodule.exports = {\n  buildCDsAllPage,\n  buildCDsAddPage,\n  buildCDsEditPage,\n  buildCDsDeletePage,\n};\n\n\n//# sourceURL=webpack://cd-manager/./src/pages/cds/index.js?");

/***/ }),

/***/ "./src/pages/cds/viewAllCDs.js":
/*!*************************************!*\
  !*** ./src/pages/cds/viewAllCDs.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { clearContentHolders, setTitle } = __webpack_require__(/*! ../../components/index.js */ \"./src/components/index.js\");\nconst { getCDsHTML } = __webpack_require__(/*! ../../../api/index.js */ \"./api/index.js\");\n\nfunction buildCDsAllPage() {\n\n  clearContentHolders();\n\n  setTitle('Overview of all CDs in your collection');\n\n  getCDsHTML();\n}\n\nmodule.exports = buildCDsAllPage;\n\n\n//# sourceURL=webpack://cd-manager/./src/pages/cds/viewAllCDs.js?");

/***/ }),

/***/ "./src/pages/homePage.js":
/*!*******************************!*\
  !*** ./src/pages/homePage.js ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { clearContentHolders, setTitle } = __webpack_require__(/*! ../components/index.js */ \"./src/components/index.js\");\n\n// Create the home page with components\nfunction buildHomePage() {\n\n  clearContentHolders();\n\n  setTitle('Organize your music');\n}\n\nmodule.exports = buildHomePage;\n\n\n//# sourceURL=webpack://cd-manager/./src/pages/homePage.js?");

/***/ }),

/***/ "./src/pages/profilePage.js":
/*!**********************************!*\
  !*** ./src/pages/profilePage.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { clearContentHolders, setTitle } = __webpack_require__(/*! ../components/index.js */ \"./src/components/index.js\");\n\n// Create the profile page with individual components\nfunction buildProfilePage() {\n\n  clearContentHolders();\n\n  setTitle('Your profile');\n}\n\nmodule.exports = buildProfilePage;\n\n\n//# sourceURL=webpack://cd-manager/./src/pages/profilePage.js?");

/***/ }),

/***/ "./src/pages/searchPage.js":
/*!*********************************!*\
  !*** ./src/pages/searchPage.js ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { clearContentHolders, setTitle } = __webpack_require__(/*! ../components/index.js */ \"./src/components/index.js\");\n\n// Create the search page with individual components\nfunction buildSearchPage() {\n\n  clearContentHolders();\n\n  setTitle('Search for Albums, CDs or tracks');\n}\n\nmodule.exports = buildSearchPage;\n\n\n//# sourceURL=webpack://cd-manager/./src/pages/searchPage.js?");

/***/ }),

/***/ "./src/pages/statisticsPage.js":
/*!*************************************!*\
  !*** ./src/pages/statisticsPage.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { clearContentHolders, setTitle } = __webpack_require__(/*! ../components/index.js */ \"./src/components/index.js\");\n\n// Create the statistics page with individual components\nfunction buildStatsPage() {\n\n  clearContentHolders();\n\n  setTitle('Statistics of your collection');\n}\n\nmodule.exports = buildStatsPage;\n\n\n//# sourceURL=webpack://cd-manager/./src/pages/statisticsPage.js?");

/***/ }),

/***/ "./src/pages/tracks/addTrack.js":
/*!**************************************!*\
  !*** ./src/pages/tracks/addTrack.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { clearContentHolders, setTitle, buildAddTrackForm } = __webpack_require__(/*! ../../components/index.js */ \"./src/components/index.js\");\n\nfunction buildTracksAddPage() {\n\n  clearContentHolders();\n\n  setTitle('Add a new track to your collection');\n\n  buildAddTrackForm();\n}\n\nmodule.exports = buildTracksAddPage;\n\n\n//# sourceURL=webpack://cd-manager/./src/pages/tracks/addTrack.js?");

/***/ }),

/***/ "./src/pages/tracks/deleteTrack.js":
/*!*****************************************!*\
  !*** ./src/pages/tracks/deleteTrack.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { clearContentHolders, setTitle } = __webpack_require__(/*! ../../components/index.js */ \"./src/components/index.js\");\n\nfunction buildTracksDeletePage() {\n\n  clearContentHolders();\n\n  setTitle('Remove a track from your collection');\n}\n\nmodule.exports = buildTracksDeletePage;\n\n\n//# sourceURL=webpack://cd-manager/./src/pages/tracks/deleteTrack.js?");

/***/ }),

/***/ "./src/pages/tracks/editTrack.js":
/*!***************************************!*\
  !*** ./src/pages/tracks/editTrack.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { clearContentHolders, setTitle } = __webpack_require__(/*! ../../components/index.js */ \"./src/components/index.js\");\n\nfunction buildTracksEditPage() {\n\n  clearContentHolders();\n\n  setTitle('Edit a track');\n}\n\nmodule.exports = buildTracksEditPage;\n\n\n//# sourceURL=webpack://cd-manager/./src/pages/tracks/editTrack.js?");

/***/ }),

/***/ "./src/pages/tracks/index.js":
/*!***********************************!*\
  !*** ./src/pages/tracks/index.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const buildTracksAllPage = __webpack_require__(/*! ./viewAllTracks.js */ \"./src/pages/tracks/viewAllTracks.js\");\nconst buildTracksAddPage = __webpack_require__(/*! ./addTrack.js */ \"./src/pages/tracks/addTrack.js\");\nconst buildTracksEditPage = __webpack_require__(/*! ./editTrack.js */ \"./src/pages/tracks/editTrack.js\");\nconst buildTracksDeletePage = __webpack_require__(/*! ./deleteTrack.js */ \"./src/pages/tracks/deleteTrack.js\");\n\nmodule.exports = {\n  buildTracksAllPage,\n  buildTracksAddPage,\n  buildTracksEditPage,\n  buildTracksDeletePage,\n};\n\n\n//# sourceURL=webpack://cd-manager/./src/pages/tracks/index.js?");

/***/ }),

/***/ "./src/pages/tracks/viewAllTracks.js":
/*!*******************************************!*\
  !*** ./src/pages/tracks/viewAllTracks.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { clearContentHolders, setTitle } = __webpack_require__(/*! ../../components/index.js */ \"./src/components/index.js\");\nconst { getTracksHTML } = __webpack_require__(/*! ../../../api/index.js */ \"./api/index.js\");\n\nfunction buildTracksAllPage() {\n\n  clearContentHolders();\n\n  setTitle('Overview of all tracks in your collection');\n\n  getTracksHTML();\n}\n\nmodule.exports = buildTracksAllPage;\n\n\n//# sourceURL=webpack://cd-manager/./src/pages/tracks/viewAllTracks.js?");

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