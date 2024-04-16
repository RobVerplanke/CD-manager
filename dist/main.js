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

/***/ "./src/components/commonElements.js":
/*!******************************************!*\
  !*** ./src/components/commonElements.js ***!
  \******************************************/
/***/ ((module) => {

eval("const contentHolder = document.querySelector('#content-holder');\nconst buttonHome = document.querySelector('#menu-button-home');\nconst buttonSearch = document.querySelector('#menu-button-search');\nconst buttonStats = document.querySelector('#menu-button-stats');\nconst buttonProfile = document.querySelector('#menu-button-profile');\n\n// Albums\nconst buttonAlbumsAll = document.querySelector('#drop-menu-albums-all');\nconst buttonAlbumsAdd = document.querySelector('#drop-menu-albums-add');\nconst buttonAlbumsEdit = document.querySelector('#drop-menu-albums-edit');\nconst buttonAlbumsDelete = document.querySelector('#drop-menu-albums-delete');\n\n// CDs\nconst buttonCDsAll = document.querySelector('#drop-menu-cds-all');\nconst buttonCDsAdd = document.querySelector('#drop-menu-cds-add');\nconst buttonCDsEdit = document.querySelector('#drop-menu-cds-edit');\nconst buttonCDsDelete = document.querySelector('#drop-menu-cds-delete');\n\n// Tracks\nconst buttonTracksAll = document.querySelector('#drop-menu-tracks-all');\nconst buttonTracksAdd = document.querySelector('#drop-menu-tracks-add');\nconst buttonTracksEdit = document.querySelector('#drop-menu-tracks-edit');\nconst buttonTracksDelete = document.querySelector('#drop-menu-tracks-delete');\n\nmodule.exports = {\n  contentHolder,\n  buttonHome,\n  buttonSearch,\n  buttonStats,\n  buttonProfile,\n  // Albums\n  buttonAlbumsAll,\n  buttonAlbumsAdd,\n  buttonAlbumsEdit,\n  buttonAlbumsDelete,\n  // CDs\n  buttonCDsAll,\n  buttonCDsAdd,\n  buttonCDsEdit,\n  buttonCDsDelete,\n  // Tracks\n  buttonTracksAll,\n  buttonTracksAdd,\n  buttonTracksEdit,\n  buttonTracksDelete,\n};\n\n\n//# sourceURL=webpack://cd-manager/./src/components/commonElements.js?");

/***/ }),

/***/ "./src/components/index.js":
/*!*********************************!*\
  !*** ./src/components/index.js ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const {\n  contentHolder,\n  buttonHome,\n  buttonSearch,\n  buttonStats,\n  buttonProfile,\n  // Albums\n  buttonAlbumsAll,\n  buttonAlbumsAdd,\n  buttonAlbumsEdit,\n  buttonAlbumsDelete,\n  // CDs\n  buttonCDsAll,\n  buttonCDsAdd,\n  buttonCDsEdit,\n  buttonCDsDelete,\n  // Tracks\n  buttonTracksAll,\n  buttonTracksAdd,\n  buttonTracksEdit,\n  buttonTracksDelete,\n} = __webpack_require__(/*! ./commonElements.js */ \"./src/components/commonElements.js\");\n\nconst setTitle = __webpack_require__(/*! ./titleHolder.js */ \"./src/components/titleHolder.js\");\n\nmodule.exports = {\n  contentHolder,\n  buttonHome,\n  buttonSearch,\n  buttonStats,\n  buttonProfile,\n  // Albums\n  buttonAlbumsAll,\n  buttonAlbumsAdd,\n  buttonAlbumsEdit,\n  buttonAlbumsDelete,\n  // CDs\n  buttonCDsAll,\n  buttonCDsAdd,\n  buttonCDsEdit,\n  buttonCDsDelete,\n  // Tracks\n  buttonTracksAll,\n  buttonTracksAdd,\n  buttonTracksEdit,\n  buttonTracksDelete,\n  setTitle,\n};\n\n\n//# sourceURL=webpack://cd-manager/./src/components/index.js?");

/***/ }),

/***/ "./src/components/navBar.js":
/*!**********************************!*\
  !*** ./src/components/navBar.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const {\n  buttonHome,\n  buttonSearch,\n  buttonStats,\n  buttonProfile,\n  // Albums\n  buttonAlbumsAll,\n  buttonAlbumsAdd,\n  buttonAlbumsEdit,\n  buttonAlbumsDelete,\n  // CDs\n  buttonCDsAll,\n  buttonCDsAdd,\n  buttonCDsEdit,\n  buttonCDsDelete,\n  // Tracks\n  buttonTracksAll,\n  buttonTracksAdd,\n  buttonTracksEdit,\n  buttonTracksDelete,\n} = __webpack_require__(/*! ./index.js */ \"./src/components/index.js\");\n\n// Functions that build all the pages\nconst buildHomePage = __webpack_require__(/*! ../pages/home.js */ \"./src/pages/home.js\");\nconst buildSearchPage = __webpack_require__(/*! ../pages/search.js */ \"./src/pages/search.js\");\nconst buildStatsPage = __webpack_require__(/*! ../pages/statistics.js */ \"./src/pages/statistics.js\");\nconst buildProfilePage = __webpack_require__(/*! ../pages/profile.js */ \"./src/pages/profile.js\");\n\n// Albums\nconst {\n  buildAlbumsAllPage,\n  buildAlbumsAddPage,\n  buildAlbumsEditPage,\n  buildAlbumsDeletePage,\n} = __webpack_require__(/*! ../pages/albums/index.js */ \"./src/pages/albums/index.js\");\n\n// CDs\nconst {\n  buildCDsAllPage,\n  buildCDsAddPage,\n  buildCDsEditPage,\n  buildCDsDeletePage,\n} = __webpack_require__(/*! ../pages/cds/index.js */ \"./src/pages/cds/index.js\");\n\n// Tracks\nconst {\n  buildTracksAllPage,\n  buildTracksAddPage,\n  buildTracksEditPage,\n  buildTracksDeletePage,\n} = __webpack_require__(/*! ../pages/tracks/index.js */ \"./src/pages/tracks/index.js\");\n\n// Iterate through each button in the navigation menu and link them to the corresponding build-function\nfunction addButtonEventListeners(buttons, buildFunctions) {\n  buttons.forEach((button, index) => {\n    button.addEventListener('click', buildFunctions[index]);\n  });\n}\n\n// Collect all buttons and build-functions to add eventlisteners on\nfunction setNavEventListeners() {\n\n  // All buttons in the navigation menu\n  const homeButtons = [\n    buttonHome, buttonSearch, buttonStats, buttonProfile,\n    buttonAlbumsAll, buttonAlbumsAdd, buttonAlbumsEdit, buttonAlbumsDelete,\n    buttonCDsAll, buttonCDsAdd, buttonCDsEdit, buttonCDsDelete,\n    buttonTracksAll, buttonTracksAdd, buttonTracksEdit, buttonTracksDelete,\n  ];\n\n  // All corresponding build-page functions in order\n  const buildFunctions = [\n    buildHomePage, buildSearchPage, buildStatsPage, buildProfilePage,\n    buildAlbumsAllPage, buildAlbumsAddPage, buildAlbumsEditPage, buildAlbumsDeletePage,\n    buildCDsAllPage, buildCDsAddPage, buildCDsEditPage, buildCDsDeletePage,\n    buildTracksAllPage, buildTracksAddPage, buildTracksEditPage, buildTracksDeletePage,\n  ];\n\n  // Use both lists to add the event listeners\n  addButtonEventListeners(homeButtons, buildFunctions);\n}\n\nmodule.exports = setNavEventListeners;\n\n\n//# sourceURL=webpack://cd-manager/./src/components/navBar.js?");

/***/ }),

/***/ "./src/components/titleHolder.js":
/*!***************************************!*\
  !*** ./src/components/titleHolder.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { contentHolder } = __webpack_require__(/*! ./commonElements.js */ \"./src/components/commonElements.js\");\n\n// Clear all content before adding new content\nfunction clearContentHolder() {\n  contentHolder.innerHTML = '';\n}\n\n// Set the title\nfunction setTitle(title) {\n\n  // Create new title\n  const titleElement = document.createElement('div');\n\n  // Set attributes\n  titleElement.classList.add('title-holder');\n  titleElement.textContent = title; // Set text of the title\n\n  // Remove current title from the page if there is one\n  if (contentHolder.firstChild) clearContentHolder();\n\n  // Add new title to the content\n  contentHolder.append(titleElement);\n}\n\nmodule.exports = setTitle;\n\n\n//# sourceURL=webpack://cd-manager/./src/components/titleHolder.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// const Controller = require('./controller/Controller.js');\n// const User = require('./modules/User.js');\nconst setNavEventListeners = __webpack_require__(/*! ./components/navBar.js */ \"./src/components/navBar.js\");\n\n// // Test account\n// const _USERNAME = 'admin';\n\n// // Create a new user with acces to all the controller-methods\n// const controller = new Controller();\n// const user = new User(controller, _USERNAME);\n\nsetNavEventListeners();\n\n\n\n//# sourceURL=webpack://cd-manager/./src/index.js?");

/***/ }),

/***/ "./src/pages/albums/add.js":
/*!*********************************!*\
  !*** ./src/pages/albums/add.js ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { setTitle } = __webpack_require__(/*! ../../components/index.js */ \"./src/components/index.js\");\n\nfunction buildAddAllPage() {\n  setTitle('Add a new album');\n}\n\nmodule.exports = buildAddAllPage;\n\n\n//# sourceURL=webpack://cd-manager/./src/pages/albums/add.js?");

/***/ }),

/***/ "./src/pages/albums/delete.js":
/*!************************************!*\
  !*** ./src/pages/albums/delete.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { setTitle } = __webpack_require__(/*! ../../components/index.js */ \"./src/components/index.js\");\n\nfunction buildDeletePage() {\n  setTitle('Delete a album');\n}\n\nmodule.exports = buildDeletePage;\n\n\n//# sourceURL=webpack://cd-manager/./src/pages/albums/delete.js?");

/***/ }),

/***/ "./src/pages/albums/edit.js":
/*!**********************************!*\
  !*** ./src/pages/albums/edit.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { setTitle } = __webpack_require__(/*! ../../components/index.js */ \"./src/components/index.js\");\n\nfunction buildEditAllPage() {\n  setTitle('Edit a album');\n}\n\nmodule.exports = buildEditAllPage;\n\n\n//# sourceURL=webpack://cd-manager/./src/pages/albums/edit.js?");

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

eval("const { setTitle } = __webpack_require__(/*! ../../components/index.js */ \"./src/components/index.js\");\n\nfunction buildAlbumsAllPage() {\n  setTitle('Overview of all albums');\n}\n\nmodule.exports = buildAlbumsAllPage;\n\n\n//# sourceURL=webpack://cd-manager/./src/pages/albums/viewAll.js?");

/***/ }),

/***/ "./src/pages/cds/add.js":
/*!******************************!*\
  !*** ./src/pages/cds/add.js ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { setTitle } = __webpack_require__(/*! ../../components/index.js */ \"./src/components/index.js\");\n\n\nfunction buildCDsAddPage() {\n  setTitle('Add a new CD to your collection');\n}\n\nmodule.exports = buildCDsAddPage;\n\n\n//# sourceURL=webpack://cd-manager/./src/pages/cds/add.js?");

/***/ }),

/***/ "./src/pages/cds/delete.js":
/*!*********************************!*\
  !*** ./src/pages/cds/delete.js ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { setTitle } = __webpack_require__(/*! ../../components/index.js */ \"./src/components/index.js\");\n\nfunction buildCDsDeletePage() {\n  setTitle('Remove a CD from your collection');\n}\n\nmodule.exports = buildCDsDeletePage;\n\n\n//# sourceURL=webpack://cd-manager/./src/pages/cds/delete.js?");

/***/ }),

/***/ "./src/pages/cds/edit.js":
/*!*******************************!*\
  !*** ./src/pages/cds/edit.js ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { setTitle } = __webpack_require__(/*! ../../components/index.js */ \"./src/components/index.js\");\n\nfunction buildCDsEditPage() {\n  setTitle('Edit a CD');\n}\n\nmodule.exports = buildCDsEditPage;\n\n\n//# sourceURL=webpack://cd-manager/./src/pages/cds/edit.js?");

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

eval("const { setTitle } = __webpack_require__(/*! ../../components/index.js */ \"./src/components/index.js\");\n\nfunction buildCDsAllPage() {\n  setTitle('Overview of all CDs');\n}\n\nmodule.exports = buildCDsAllPage;\n\n\n//# sourceURL=webpack://cd-manager/./src/pages/cds/viewAll.js?");

/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { setTitle } = __webpack_require__(/*! ../components/index.js */ \"./src/components/index.js\");\n\nfunction buildHomePage() {\n  setTitle('Homepage');\n}\n\nmodule.exports = buildHomePage;\n\n\n//# sourceURL=webpack://cd-manager/./src/pages/home.js?");

/***/ }),

/***/ "./src/pages/profile.js":
/*!******************************!*\
  !*** ./src/pages/profile.js ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { setTitle } = __webpack_require__(/*! ../components/index.js */ \"./src/components/index.js\");\n\nfunction buildProfilePage() {\n  setTitle('Your profile');\n}\n\nmodule.exports = buildProfilePage;\n\n\n//# sourceURL=webpack://cd-manager/./src/pages/profile.js?");

/***/ }),

/***/ "./src/pages/search.js":
/*!*****************************!*\
  !*** ./src/pages/search.js ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { setTitle } = __webpack_require__(/*! ../components/index.js */ \"./src/components/index.js\");\n\nfunction buildSearchPage() {\n  setTitle('Search for items');\n}\n\nmodule.exports = buildSearchPage;\n\n\n//# sourceURL=webpack://cd-manager/./src/pages/search.js?");

/***/ }),

/***/ "./src/pages/statistics.js":
/*!*********************************!*\
  !*** ./src/pages/statistics.js ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { setTitle } = __webpack_require__(/*! ../components/index.js */ \"./src/components/index.js\");\n\nfunction buildStatsPage() {\n  setTitle('Statistics of your collection');\n}\n\nmodule.exports = buildStatsPage;\n\n\n//# sourceURL=webpack://cd-manager/./src/pages/statistics.js?");

/***/ }),

/***/ "./src/pages/tracks/add.js":
/*!*********************************!*\
  !*** ./src/pages/tracks/add.js ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { setTitle } = __webpack_require__(/*! ../../components/index.js */ \"./src/components/index.js\");\n\nfunction buildTracksAddPage() {\n  setTitle('Add a new track to your collection');\n}\n\nmodule.exports = buildTracksAddPage;\n\n\n//# sourceURL=webpack://cd-manager/./src/pages/tracks/add.js?");

/***/ }),

/***/ "./src/pages/tracks/delete.js":
/*!************************************!*\
  !*** ./src/pages/tracks/delete.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { setTitle } = __webpack_require__(/*! ../../components/index.js */ \"./src/components/index.js\");\n\nfunction buildTracksDeletePage() {\n  setTitle('Remove a track from your collection');\n}\n\nmodule.exports = buildTracksDeletePage;\n\n\n//# sourceURL=webpack://cd-manager/./src/pages/tracks/delete.js?");

/***/ }),

/***/ "./src/pages/tracks/edit.js":
/*!**********************************!*\
  !*** ./src/pages/tracks/edit.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { setTitle } = __webpack_require__(/*! ../../components/index.js */ \"./src/components/index.js\");\n\nfunction buildTracksEditPage() {\n  setTitle('Edit a track');\n}\n\nmodule.exports = buildTracksEditPage;\n\n\n//# sourceURL=webpack://cd-manager/./src/pages/tracks/edit.js?");

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

eval("const { setTitle } = __webpack_require__(/*! ../../components/index.js */ \"./src/components/index.js\");\n\nfunction buildTracksAllPage() {\n  setTitle('Overview of all tracks');\n}\n\nmodule.exports = buildTracksAllPage;\n\n\n//# sourceURL=webpack://cd-manager/./src/pages/tracks/viewAll.js?");

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