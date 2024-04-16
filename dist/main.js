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

eval("const {\n  buttonHome,\n  buttonSearch,\n  buttonStats,\n  buttonProfile,\n  // Albums\n  buttonAlbumsAll,\n  buttonAlbumsAdd,\n  buttonAlbumsEdit,\n  buttonAlbumsDelete,\n  // CDs\n  buttonCDsAll,\n  buttonCDsAdd,\n  buttonCDsEdit,\n  buttonCDsDelete,\n  // Tracks\n  buttonTracksAll,\n  buttonTracksAdd,\n  buttonTracksEdit,\n  buttonTracksDelete,\n} = __webpack_require__(/*! ./index.js */ \"./src/components/index.js\");\n\nconst buildHomePage = __webpack_require__(/*! ../pages/home.js */ \"./src/pages/home.js\");\nconst buildSearchPage = __webpack_require__(/*! ../pages/search.js */ \"./src/pages/search.js\");\nconst buildStatsPage = __webpack_require__(/*! ../pages/statistics.js */ \"./src/pages/statistics.js\");\nconst buildProfilePage = __webpack_require__(/*! ../pages/profile.js */ \"./src/pages/profile.js\");\n\nconst {\n  buildAlbumsAllPage,\n  buildAlbumsAddPage,\n  buildAlbumsEditPage,\n  buildAlbumsDeletePage,\n} = __webpack_require__(/*! ../pages/albums.js */ \"./src/pages/albums.js\");\n\nconst {\n  buildCDsAllPage,\n  buildCDsAddPage,\n  buildCDsEditPage,\n  buildCDsDeletePage,\n} = __webpack_require__(/*! ../pages/cds.js */ \"./src/pages/cds.js\");\n\nconst {\n  buildTracksAllPage,\n  buildTracksAddPage,\n  buildTracksEditPage,\n  buildTracksDeletePage,\n} = __webpack_require__(/*! ../pages/tracks.js */ \"./src/pages/tracks.js\");\n\n// When clicked on a navigation button, build the corresponding page in the content holder\nfunction setNavEventListeners() {\n\n  buttonHome.addEventListener('click', () => buildHomePage()); // Home\n  buttonSearch.addEventListener('click', () => buildSearchPage()); // Search\n  buttonStats.addEventListener('click', () => buildStatsPage()); // Statistics\n  buttonProfile.addEventListener('click', () => buildProfilePage()); // Statistics\n\n  // Albums\n  buttonAlbumsAll.addEventListener('click', () => buildAlbumsAllPage());\n  buttonAlbumsAdd.addEventListener('click', () => buildAlbumsAddPage());\n  buttonAlbumsEdit.addEventListener('click', () => buildAlbumsEditPage());\n  buttonAlbumsDelete.addEventListener('click', () => buildAlbumsDeletePage());\n\n  // CDs\n  buttonCDsAll.addEventListener('click', () => buildCDsAllPage());\n  buttonCDsAdd.addEventListener('click', () => buildCDsAddPage());\n  buttonCDsEdit.addEventListener('click', () => buildCDsEditPage());\n  buttonCDsDelete.addEventListener('click', () => buildCDsDeletePage());\n\n  // Tracks\n  buttonTracksAll.addEventListener('click', () => buildTracksAllPage());\n  buttonTracksAdd.addEventListener('click', () => buildTracksAddPage());\n  buttonTracksEdit.addEventListener('click', () => buildTracksEditPage());\n  buttonTracksDelete.addEventListener('click', () => buildTracksDeletePage());\n}\n\nmodule.exports = setNavEventListeners;\n\n\n//# sourceURL=webpack://cd-manager/./src/components/navBar.js?");

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

/***/ "./src/pages/albums.js":
/*!*****************************!*\
  !*** ./src/pages/albums.js ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { setTitle } = __webpack_require__(/*! ../components/index.js */ \"./src/components/index.js\");\n\nfunction buildAlbumsAllPage() {\n  setTitle('Overview of all albums');\n}\n\nfunction buildAlbumsAddPage() {\n  setTitle('Add a new album to your collection');\n}\n\nfunction buildAlbumsEditPage() {\n  setTitle('Edit a album');\n}\n\nfunction buildAlbumsDeletePage() {\n  setTitle('Remove a album from your collection');\n}\n\nmodule.exports = {\n  buildAlbumsAllPage,\n  buildAlbumsAddPage,\n  buildAlbumsEditPage,\n  buildAlbumsDeletePage,\n};\n\n\n//# sourceURL=webpack://cd-manager/./src/pages/albums.js?");

/***/ }),

/***/ "./src/pages/cds.js":
/*!**************************!*\
  !*** ./src/pages/cds.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { setTitle } = __webpack_require__(/*! ../components/index.js */ \"./src/components/index.js\");\n\nfunction buildCDsAllPage() {\n  setTitle('Overview of all CDs');\n}\n\nfunction buildCDsAddPage() {\n  setTitle('Add a new CD to your collection');\n}\n\nfunction buildCDsEditPage() {\n  setTitle('Edit a CD');\n}\n\nfunction buildCDsDeletePage() {\n  setTitle('Remove a CD from your collection');\n}\n\nmodule.exports = {\n  buildCDsAllPage,\n  buildCDsAddPage,\n  buildCDsEditPage,\n  buildCDsDeletePage,\n};\n\n\n//# sourceURL=webpack://cd-manager/./src/pages/cds.js?");

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

/***/ "./src/pages/tracks.js":
/*!*****************************!*\
  !*** ./src/pages/tracks.js ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { setTitle } = __webpack_require__(/*! ../components/index.js */ \"./src/components/index.js\");\n\nfunction buildTracksAllPage() {\n  setTitle('Overview of all tracks');\n}\n\nfunction buildTracksAddPage() {\n  setTitle('Add a new track to your collection');\n}\n\nfunction buildTracksEditPage() {\n  setTitle('Edit a track');\n}\n\nfunction buildTracksDeletePage() {\n  setTitle('Remove a track from your collection');\n}\n\nmodule.exports = {\n  buildTracksAllPage,\n  buildTracksAddPage,\n  buildTracksEditPage,\n  buildTracksDeletePage,\n};\n\n\n//# sourceURL=webpack://cd-manager/./src/pages/tracks.js?");

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