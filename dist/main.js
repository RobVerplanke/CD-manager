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

/***/ "./api/addItem.js":
/*!************************!*\
  !*** ./api/addItem.js ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { getCurrentDate } = __webpack_require__(/*! ../src/components/utils/index.js */ \"./src/components/utils/index.js\");\n\n// Add a new item to the collection\nconst addTrackToCollection = async (itemType) => {\n\n  // Select the form and get all input values\n  const form = document.querySelector('#form');\n\n  // Create new item-object\n  const item = {\n    title: form.title.value,\n    artist: form.artist.value,\n    collabs: form.collaborators.value,\n    label: form.label.value,\n    added: getCurrentDate(),\n    rating: form.rating.value,\n    info: form.info.value,\n    views: 0,\n  };\n\n  // Add additional input fields, that belong to the item-type, to the item-object\n  switch (itemType) {\n    case 'track':\n      item.cds = form.cd.value;\n      item.remix = form.remix.value;\n      item.style = form.style.value;\n      item.length = form.length.value;\n      break;\n\n    case 'album':\n      item.year = form.year.value;\n      item.genre = form.genre.value;\n      item.img = form.image.value;\n      break;\n\n    case 'cd':\n      item.album = form.album.value;\n      item.year = form.year.value;\n      item.genre = form.genre.value;\n      item.image = form.image.value;\n      break;\n\n    default:\n  }\n\n  // Add the item-object as string to the database\n  await fetch(`http://localhost:3000/${itemType}s`, {\n    headers: { 'Content-type': 'application/json' },\n    method: 'POST',\n    body: JSON.stringify(item),\n  });\n};\n\nmodule.exports = addTrackToCollection;\n\n\n//# sourceURL=webpack://cd-manager/./api/addItem.js?");

/***/ }),

/***/ "./api/deleteItem.js":
/*!***************************!*\
  !*** ./api/deleteItem.js ***!
  \***************************/
/***/ ((module) => {

eval("// Remove a item from the collection\nconst deleteItem = async (item, trackID) => {\n\n  try {\n    // Adjust the path to remove the corresonding item\n    const url = `http://localhost:3000/${item}s/${trackID}`;\n    const response = await fetch(url, {\n      method: 'DELETE',\n    });\n\n    if (!response.ok) {\n      throw new Error('Failed to delete item');\n    }\n\n    console.log('Item deleted successfully');\n  } catch (error) {\n    console.error('Error deleting item:', error.message);\n  }\n};\n\nmodule.exports = deleteItem;\n\n\n//# sourceURL=webpack://cd-manager/./api/deleteItem.js?");

/***/ }),

/***/ "./api/getAllTitles.js":
/*!*****************************!*\
  !*** ./api/getAllTitles.js ***!
  \*****************************/
/***/ ((module) => {

eval("// Get the titles of all items in the collection\nasync function getAllTitles(itemType) {\n  const list = [];\n\n  // Get current data\n  const url = `http://localhost:3000/${itemType}s`;\n  const result = await fetch(url);\n  const data = await result.json();\n\n  // Add each title to the list\n  data.forEach((item) => {\n    list.push([item.title]);\n  });\n\n  return list;\n}\n\nmodule.exports = getAllTitles;\n\n\n//# sourceURL=webpack://cd-manager/./api/getAllTitles.js?");

/***/ }),

/***/ "./api/getItemById.js":
/*!****************************!*\
  !*** ./api/getItemById.js ***!
  \****************************/
/***/ ((module) => {

eval("// Returns the corresponding CD of the given ID\nasync function getItemByID(itemType, ID) {\n\n  // Get current data\n  const url = `http://localhost:3000/${itemType}s`;\n  const result = await fetch(url, { timeout: 5000 });\n  const data = await result.json();\n\n  // Select item based on the same ID\n  return data.find((item) => item.id === ID);\n}\n\nmodule.exports = getItemByID;\n\n\n//# sourceURL=webpack://cd-manager/./api/getItemById.js?");

/***/ }),

/***/ "./api/getItemsHTML.js":
/*!*****************************!*\
  !*** ./api/getItemsHTML.js ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// Don't import from the index file, as it may cause asynchronous issues\nconst commonElements = __webpack_require__(/*! ../src/components/utils/commonElements.js */ \"./src/components/utils/commonElements.js\");\n\n// Build the overview page\nasync function getItemsHTML(itemType) {\n\n  // Get current data\n  const url = `http://localhost:3000/${itemType}s`;\n  const result = await fetch(url);\n  const data = await result.json();\n\n  let template = '';\n\n  // Build overview pages\n  switch (itemType) {\n    case 'cd':\n\n      // Build a list with a cover image, album name (if present), title and artistname for each CD\n      data.forEach((cd) => {\n        template += `\n        <ul class=\"items-list\">\n          <li class=\"list-img\"><img width=\"150px\" height=\"auto\" src=\"${cd.image}\"></li>\n          <li class=\"list-item text-album\"><p>${cd.album}</p></li>\n          <li class=\"list-item text-title-light\"><p>${cd.title}</p></li>\n          <li class=\"list-item text-artist-light\"><p>${cd.artist}</p></li>\n        </ul>\n        `;\n      });\n      break;\n\n    case 'album':\n\n      // Build a list with a cover image, title and artistname for each album\n      data.forEach((album) => {\n        template += `\n          <ul class=\"items-list\">\n            <li class=\"list-img\"><img width=\"150px\" height=\"auto\" src=\"${album.image}\"></li>\n            <li class=\"list-item text-title-light\"><p>${album.title}</p></li>\n            <li class=\"list-item text-artist-light\"><p>${album.artist}</p></li>\n          </ul>\n          `;\n      });\n      break;\n\n    case 'track':\n\n      // Build a table for the tracks overview page\n      template = `\n      <table class=\"tracks-table\">\n        <thead>\n          <tr>\n            <th>Title</th>\n            <th>Artist</th>\n            <th>Length</th>\n          </tr>\n        </thead>\n        <tbody>`;\n\n      // Show the title and artistname and length for each track\n      data.forEach((track) => {\n        template += `\n              <tr>\n                <td>${track.title}</td>\n                <td>${track.artist}</td>\n                <td>${track.length}</td>\n              </tr>\n          `;\n      });\n      template += '</tbody></table>';\n\n      break;\n    default:\n  }\n\n  commonElements.contentHolder.innerHTML += template;\n\n  // The overview page does contain cover images\n  commonElements.contentHolder.classList.remove('no-img-in-item');\n  commonElements.contentHolder.classList.add('img-in-item');\n\n  // Add built list/table to the page\n  commonElements.pageHolder.append(commonElements.contentHolder);\n}\n\nmodule.exports = getItemsHTML;\n\n\n//# sourceURL=webpack://cd-manager/./api/getItemsHTML.js?");

/***/ }),

/***/ "./api/getSearchResult.js":
/*!********************************!*\
  !*** ./api/getSearchResult.js ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// Don't import from the index file, as it may cause asynchronous issues\nconst commonElements = __webpack_require__(/*! ../src/components/utils/commonElements.js */ \"./src/components/utils/commonElements.js\");\nconst buildEditItemForm = __webpack_require__(/*! ../src/components/forms/editItem.js */ \"./src/components/forms/editItem.js\");\nconst deleteItem = __webpack_require__(/*! ./deleteItem.js */ \"./api/deleteItem.js\");\nconst { buildAlbumsAllPage } = __webpack_require__(/*! ../src/pages/album/index.js */ \"./src/pages/album/index.js\");\nconst { buildCDsAllPage } = __webpack_require__(/*! ../src/pages/cd/index.js */ \"./src/pages/cd/index.js\");\nconst { buildTracksAllPage } = __webpack_require__(/*! ../src/pages/track/index.js */ \"./src/pages/track/index.js\");\n\n// Build a overview page with items that contain the keyword title or artist name\nasync function getSearchResult(itemType, action, searchKeyword) {\n\n  // Get current data\n  const url = `http://localhost:3000/${itemType}s`;\n  const result = await fetch(url, { timeout: 5000 });\n  const data = await result.json();\n\n  // Select all items which has a title or artistname containing the search keyword\n  const searchTerm = searchKeyword;\n  const filteredItems = data.filter((item) => item.title.includes(searchTerm)\n  || item.artist.includes(searchTerm));\n\n  // The result page contains no cover images\n  commonElements.contentHolder.classList.remove('img-in-item');\n  commonElements.contentHolder.classList.add('no-img-in-item');\n\n  // Build a table to display all found items and add a edit/delete button at the end of each row\n  let template = `\n  <table class=\"cds-table\">\n    <thead>\n      <tr>\n        <th>Title</th>\n        <th>Artist</th>`;\n\n  // Set head-title for third column\n  if (itemType === 'album') template += '<th>CDs</th>';\n  if (itemType === 'cd') template += '<th>Tracks</th>';\n  if (itemType === 'track') template += '<th>Length</th>';\n\n  template += `\n        <th>${action}</th>\n      </tr>\n    </thead>\n    <tbody>`;\n\n  // Build a new row for each item\n  filteredItems.forEach((item) => {\n    template += `\n      <tr>\n        <td>${item.title}</td>\n        <td>${item.artist}</td>`;\n\n    // Set content of third column\n    if (itemType === 'album') template += `<td>${item.cds.length}</td>`;\n    if (itemType === 'cd') template += `<td>${item.tracks.length}</td>`;\n    if (itemType === 'track') template += `<td>${item.length}</td>`;\n\n    // Set attributes\n    template += `\n          <td><a class=\"${action}-link\" data-itemID=\"${item.id}\" href=\"#\">${action}</a></td>\n      </tr>\n    `;\n  });\n\n  // After a edit/delete link is clicked, redirect the user to the corresponding form\n  async function handleClick(itemID) {\n\n    if (action === 'edit') {\n      // Redirect to edit form\n      if (itemType === 'album') buildEditItemForm(itemType, itemID);\n    }\n\n    if (action === 'delete') {\n      // Wait for API module to remove item\n      await deleteItem(itemType, itemID);\n\n      // Redirect to updated overview page\n      if (itemType === 'album') buildAlbumsAllPage();\n      if (itemType === 'cd') buildCDsAllPage();\n      if (itemType === 'track') buildTracksAllPage();\n    }\n  }\n\n  // Select each edit/delete link\n  document.addEventListener('click', (e) => {\n    if (e.target && e.target.classList.contains(`${action}-link`)) {\n      e.preventDefault();\n\n      handleClick(e.target.getAttribute('data-itemID'));\n    }\n  });\n\n  template += '</tbody></table>';\n\n  // Add built table to the page\n  commonElements.contentHolder.innerHTML += template;\n  commonElements.pageHolder.append(commonElements.contentHolder);\n}\n\nmodule.exports = getSearchResult;\n\n\n//# sourceURL=webpack://cd-manager/./api/getSearchResult.js?");

/***/ }),

/***/ "./api/updateItem.js":
/*!***************************!*\
  !*** ./api/updateItem.js ***!
  \***************************/
/***/ ((module) => {

eval("// Edit a existing CD\nasync function updateCD(itemType, CDID, updatedItemData) {\n\n  // Get current data\n  const url = `http://localhost:3000/${itemType}s/${CDID}`; // Update URL with trackID\n  const result = await fetch(url);\n  const item = await result.json();\n\n  if (item) {\n    // Replace item\n    const updatedItem = { ...item, ...updatedItemData };\n\n    // Write the edited data back\n    await fetch(url, {\n      method: 'PUT',\n      headers: {\n        'Content-Type': 'application/json',\n      },\n      body: JSON.stringify(updatedItem),\n    });\n\n    console.log(`${itemType} met ID ${CDID} is succesvol bijgewerkt.`);\n  } else {\n    console.log(`${itemType} met ID ${CDID} is niet gevonden.`);\n  }\n}\n\nmodule.exports = updateCD;\n\n\n//# sourceURL=webpack://cd-manager/./api/updateItem.js?");

/***/ }),

/***/ "./src/components/forms/addItem.js":
/*!*****************************************!*\
  !*** ./src/components/forms/addItem.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { createFormInput } = __webpack_require__(/*! ../utils/index.js */ \"./src/components/utils/index.js\");\nconst addItem = __webpack_require__(/*! ../../../api/addItem.js */ \"./api/addItem.js\");\nconst buildTracksAllPage = __webpack_require__(/*! ../../pages/track/viewAllTracks.js */ \"./src/pages/track/viewAllTracks.js\");\nconst buildCDsAllPage = __webpack_require__(/*! ../../pages/cd/viewAllCDs.js */ \"./src/pages/cd/viewAllCDs.js\");\nconst { buildAlbumsAllPage } = __webpack_require__(/*! ../../pages/album/index.js */ \"./src/pages/album/index.js\");\n\n// Create a new input form with all the corresponding input fields and a submit button\nfunction buildAddItemForm(itemType) {\n\n  // Create the form and its elements\n  const form = document.querySelector('#form');\n  form.classList.add('add-form');\n\n  // Add specific needed elements to the form, depending on the item type\n  if (itemType === 'cd') form.append(createFormInput('Album', 'text', 'select', '#'));\n  if (itemType === 'track') form.append(createFormInput('Cd', 'text', 'select', '#'));\n\n  // Format: (Labelname and element-id, input-type, element-type, placeholder text, current value)\n  form.append(createFormInput('Title', 'text', 'input', 'Title of track...'));\n  form.append(createFormInput('Artist', 'text', 'input', 'Name of artist...'));\n  form.append(createFormInput('Collaborators', 'text', 'input', 'Artists...'));\n  form.append(createFormInput('Label', 'text', 'input', 'Enter label here...'));\n\n  if (itemType === 'album' || itemType === 'cd') {\n    form.append(createFormInput('Year', 'number', 'select', '#'));\n    form.append(createFormInput('Genre', 'text', 'input', 'Rock, Classical...'));\n    form.append(createFormInput('Image', 'text', 'input', 'http://image.jpg...'));\n  }\n\n  if (itemType === 'track') {\n    form.append(createFormInput('Remix', 'text', 'input', 'Mixed by...'));\n    form.append(createFormInput('Style', 'text', 'input', 'Ambient, Blues rock...'));\n    form.append(createFormInput('Length', 'text', 'input', '3:45...'));\n  }\n\n  form.append(createFormInput('Info', 'text', 'textarea', 'Extra info here...'));\n  form.append(createFormInput('Rating', 'text', 'select', '#'));\n\n  // Create a submit button\n  const submitButton = document.createElement('button');\n  submitButton.setAttribute('type', 'submit');\n  submitButton.setAttribute('id', 'add-button');\n  submitButton.textContent = 'Add';\n\n  submitButton.addEventListener('click', async (e) => {\n    e.preventDefault();\n\n    // Wait for the API module to add the data to the database\n    await addItem(itemType);\n\n    // Redirect the user to the corresponding updated overview page\n    if (itemType === 'album') buildAlbumsAllPage();\n    if (itemType === 'cd') buildCDsAllPage();\n    if (itemType === 'track') buildTracksAllPage();\n  });\n\n  form.appendChild(submitButton);\n}\n\nmodule.exports = buildAddItemForm;\n\n\n//# sourceURL=webpack://cd-manager/./src/components/forms/addItem.js?");

/***/ }),

/***/ "./src/components/forms/editItem.js":
/*!******************************************!*\
  !*** ./src/components/forms/editItem.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { getInputValue, clearContentHolders, createFormInput } = __webpack_require__(/*! ../utils/index.js */ \"./src/components/utils/index.js\");\nconst getItemById = __webpack_require__(/*! ../../../api/getItemById.js */ \"./api/getItemById.js\");\nconst updateItem = __webpack_require__(/*! ../../../api/updateItem.js */ \"./api/updateItem.js\");\nconst buildTracksAllPage = __webpack_require__(/*! ../../pages/track/viewAllTracks.js */ \"./src/pages/track/viewAllTracks.js\");\nconst buildAlbumsAllPage = __webpack_require__(/*! ../../pages/album/viewAllAlbums.js */ \"./src/pages/album/viewAllAlbums.js\");\nconst buildCDsAllPage = __webpack_require__(/*! ../../pages/cd/viewAllCDs.js */ \"./src/pages/cd/viewAllCDs.js\");\n\n// Create a input form with in which all values are pre-filled with items current data\nasync function buildEditItemForm(itemType, selectedID) {\n\n  clearContentHolders();\n\n  // Get the corresponding item from the API module\n  const item = await getItemById(itemType, selectedID);\n\n  // Create the form and its elements\n  const form = document.querySelector('#form');\n  form.classList.add('add-form');\n\n  // Add specific needed elements to the form, depending on the item type\n  if (itemType === 'cd') form.append(createFormInput('Album', 'text', 'select', '#', item.album));\n  if (itemType === 'track') form.append(createFormInput('Cd', 'text', 'select', '#', item.cd));\n\n  // Format: (Labelname and element-id, input-type, element-type, placeholder text, current value)\n  form.append(createFormInput('Title', 'text', 'input', 'Title of track...', item.title));\n  form.append(createFormInput('Artist', 'text', 'input', 'Name of artist...', item.artist));\n  form.append(createFormInput('Collaborators', 'text', 'input', 'Artists...', item.collaborators));\n  form.append(createFormInput('Label', 'text', 'input', 'Enter label here...', item.label));\n\n  if (itemType === 'album' || itemType === 'cd') {\n    form.append(createFormInput('Year', 'number', 'select', '#', item.year));\n    form.append(createFormInput('Genre', 'text', 'input', 'Rock, Classical...', item.genre));\n    form.append(createFormInput('Image', 'text', 'input', 'http://image.jpg...', item.image));\n  }\n\n  if (itemType === 'track') {\n    form.append(createFormInput('Remix', 'text', 'input', 'Mixed by...', item.remix));\n    form.append(createFormInput('Style', 'text', 'input', 'Ambient, Blues rock...', item.style));\n    form.append(createFormInput('Length', 'text', 'input', '3:45...', item.length));\n  }\n\n  form.append(createFormInput('Info', 'text', 'textarea', 'Extra info here...', item.info));\n  form.append(createFormInput('Rating', 'text', 'select', '#', item.rating));\n\n  // Add a submitbutton to the form\n  const submitButton = document.createElement('button');\n  submitButton.setAttribute('type', 'submit');\n  submitButton.setAttribute('id', 'edit-button');\n  submitButton.textContent = 'Edit';\n\n  // Create the submit button and set its behaviour\n  submitButton.addEventListener('click', async (e) => {\n    e.preventDefault();\n\n    // Create a list of all item properties\n    const editedItemData = {};\n    const fields = [\n      'title',\n      'artist',\n      'collaborators',\n      'label',\n      'info',\n      'rating',\n    ];\n\n    if (itemType === 'album') fields.push('year', 'genre', 'image');\n    if (itemType === 'cd') fields.push('year', 'genre', 'image', 'album');\n    if (itemType === 'track') fields.push('cd', 'remix', 'style', 'length');\n\n    // Get the current data from the corresponding property\n    fields.forEach((field) => {\n      editedItemData[field] = getInputValue(field);\n    });\n\n    // Wait for the API to set the new data\n    await updateItem(itemType, item.id, editedItemData);\n\n    // Redirect the user to the corresponding updated overview page\n    if (itemType === 'album') buildAlbumsAllPage();\n    if (itemType === 'cd') buildCDsAllPage();\n    if (itemType === 'track') buildTracksAllPage();\n  });\n\n  form.appendChild(submitButton);\n}\n\nmodule.exports = buildEditItemForm;\n\n\n//# sourceURL=webpack://cd-manager/./src/components/forms/editItem.js?");

/***/ }),

/***/ "./src/components/forms/index.js":
/*!***************************************!*\
  !*** ./src/components/forms/index.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const buildAddItemForm = __webpack_require__(/*! ./addItem.js */ \"./src/components/forms/addItem.js\");\nconst buildEditItemForm = __webpack_require__(/*! ./editItem.js */ \"./src/components/forms/editItem.js\");\nconst buildSearchItemForm = __webpack_require__(/*! ./searchItem.js */ \"./src/components/forms/searchItem.js\");\n\nmodule.exports = {\n  buildAddItemForm,\n  buildEditItemForm,\n  buildSearchItemForm,\n};\n\n\n//# sourceURL=webpack://cd-manager/./src/components/forms/index.js?");

/***/ }),

/***/ "./src/components/forms/searchItem.js":
/*!********************************************!*\
  !*** ./src/components/forms/searchItem.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { createFormInput } = __webpack_require__(/*! ../utils/index.js */ \"./src/components/utils/index.js\");\nconst getSearchResult = __webpack_require__(/*! ../../../api/getSearchResult.js */ \"./api/getSearchResult.js\");\n\n/**\n * Build the page that is loaded after the user clicks on the 'edit' button\n * in the sub-menu of the 'Track' option in the main navigation menu.\n * This page contains a search field and a search button.\n * Show the results of the search query on a results page.\n */\nfunction buildSearchItemForm(itemType, action) {\n  const form = document.querySelector('#form');\n  form.classList.add('edit-form');\n\n  // Create a searchbar at the top of the form\n  const searchField = createFormInput('Search', 'text', 'input', 'Title or artist name...');\n  form.append(searchField);\n\n  // Add a submit button to the form\n  const submitButton = document.createElement('button');\n  submitButton.setAttribute('type', 'submit');\n  submitButton.setAttribute('id', 'search-button');\n  submitButton.textContent = 'Search';\n\n  // Redirect the user to a results page\n  submitButton.addEventListener('click', (e) => {\n    e.preventDefault();\n\n    // Get the search results\n    getSearchResult(itemType, action, form.search.value);\n  });\n\n  form.appendChild(submitButton);\n}\n\nmodule.exports = buildSearchItemForm;\n\n\n//# sourceURL=webpack://cd-manager/./src/components/forms/searchItem.js?");

/***/ }),

/***/ "./src/components/nav/navBar.js":
/*!**************************************!*\
  !*** ./src/components/nav/navBar.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const commonElements = __webpack_require__(/*! ../utils/commonElements.js */ \"./src/components/utils/commonElements.js\");\n\n// Functions that build all the pages\nconst buildHomePage = __webpack_require__(/*! ../../pages/homePage.js */ \"./src/pages/homePage.js\");\nconst buildSearchPage = __webpack_require__(/*! ../../pages/searchPage.js */ \"./src/pages/searchPage.js\");\nconst buildStatsPage = __webpack_require__(/*! ../../pages/statisticsPage.js */ \"./src/pages/statisticsPage.js\");\nconst buildProfilePage = __webpack_require__(/*! ../../pages/profilePage.js */ \"./src/pages/profilePage.js\");\n\n// Albums\nconst {\n  buildAlbumsAllPage,\n  buildAlbumsAddPage,\n  buildAlbumsEditPage,\n  buildAlbumsDeletePage,\n} = __webpack_require__(/*! ../../pages/album/index.js */ \"./src/pages/album/index.js\");\n\n// CDs\nconst {\n  buildCDsAllPage,\n  buildCDsAddPage,\n  buildCDsEditPage,\n  buildCDsDeletePage,\n} = __webpack_require__(/*! ../../pages/cd/index.js */ \"./src/pages/cd/index.js\");\n\n// Tracks\nconst {\n  buildTracksAllPage,\n  buildTracksAddPage,\n  buildTracksEditPage,\n  buildTracksDeletePage,\n} = __webpack_require__(/*! ../../pages/track/index.js */ \"./src/pages/track/index.js\");\n\n// Iterate through each button in the navigation and link them to the corresponding build-function\nfunction addButtonEventListeners(buttons, buildFunctions) {\n  buttons.forEach((button, index) => {\n    button.addEventListener('click', buildFunctions[index]);\n  });\n}\n\n// Collect all buttons and build-functions to add eventlisteners on\nfunction setNavEventListeners() {\n\n  // All buttons in the navigation menu\n  const homeButtons = [\n    commonElements.buttonHome,\n    commonElements.buttonSearch,\n    commonElements.buttonStats,\n    commonElements.buttonProfile,\n    // Albums\n    commonElements.buttonAlbumsAll,\n    commonElements.buttonAlbumsAdd,\n    commonElements.buttonAlbumsEdit,\n    commonElements.buttonAlbumsDelete,\n    // CDs\n    commonElements.buttonCDsAll,\n    commonElements.buttonCDsAdd,\n    commonElements.buttonCDsEdit,\n    commonElements.buttonCDsDelete,\n    // Tracks\n    commonElements.buttonTracksAll,\n    commonElements.buttonTracksAdd,\n    commonElements.buttonTracksEdit,\n    commonElements.buttonTracksDelete,\n  ];\n\n  // All corresponding build-page functions in order\n  const buildFunctions = [\n    buildHomePage,\n    buildSearchPage,\n    buildStatsPage,\n    buildProfilePage,\n    // Albums\n    buildAlbumsAllPage,\n    buildAlbumsAddPage,\n    buildAlbumsEditPage,\n    buildAlbumsDeletePage,\n    // CDs\n    buildCDsAllPage,\n    buildCDsAddPage,\n    buildCDsEditPage,\n    buildCDsDeletePage,\n    // Tracks\n    buildTracksAllPage,\n    buildTracksAddPage,\n    buildTracksEditPage,\n    buildTracksDeletePage,\n  ];\n\n  // Use both lists to add the event listeners\n  addButtonEventListeners(homeButtons, buildFunctions);\n}\n\nmodule.exports = setNavEventListeners;\n\n\n//# sourceURL=webpack://cd-manager/./src/components/nav/navBar.js?");

/***/ }),

/***/ "./src/components/utils/buildItemOptions.js":
/*!**************************************************!*\
  !*** ./src/components/utils/buildItemOptions.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const getAllTitles = __webpack_require__(/*! ../../../api/getAllTitles.js */ \"./api/getAllTitles.js\");\n\n// Create options for the 'Album' and 'CD' selection elements.\n// The 'Album' options contain the titles of all albums in the collection so when a CD is added\n// or edited, the user can select an album of which this CD is part.\nasync function buildSelectOptions(element, callback) {\n  let titlesList = [];\n  const selectElement = element;\n\n  // Create and add a neutral default option\n  const defaultOption = document.createElement('option');\n  defaultOption.textContent = '-';\n  selectElement.append(defaultOption);\n\n  // Call the corresponding API function to get a list of all existing titles\n  if (element.id === 'album') titlesList = await getAllTitles('album');\n  if (element.id === 'cd') titlesList = await getAllTitles('cd');\n\n  // Each title needs to becomes a selectable option\n  titlesList.forEach(([title]) => {\n    const newOption = document.createElement('option');\n\n    newOption.setAttribute('value', title);\n    newOption.textContent = title;\n    selectElement.append(newOption);\n  });\n\n  // After all options are loaded, set the corresponding option as value\n  if (callback) callback();\n}\n\nmodule.exports = buildSelectOptions;\n\n\n//# sourceURL=webpack://cd-manager/./src/components/utils/buildItemOptions.js?");

/***/ }),

/***/ "./src/components/utils/buildRatingOptions.js":
/*!****************************************************!*\
  !*** ./src/components/utils/buildRatingOptions.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const buildRatingStars = __webpack_require__(/*! ./buildRatingStars.js */ \"./src/components/utils/buildRatingStars.js\");\n\nconst MIN_RATING_VALUE = 1;\nconst MAX_RATING_VALUE = 5;\n\n// Create slection options for the 'Rating' value, in a certain range\nfunction buildRatingOptions(element) {\n  const selectElement = element;\n  const defaultOption = document.createElement('option');\n\n  // Create and add a neutral default option\n  defaultOption.textContent = '-';\n  selectElement.append(defaultOption);\n\n  // Build a selectable option for each rating unit\n  for (let i = MIN_RATING_VALUE; i <= MAX_RATING_VALUE; i++) {\n    const newOption = document.createElement('option');\n    newOption.textContent = buildRatingStars(i);\n    selectElement.append(newOption);\n  }\n}\n\nmodule.exports = buildRatingOptions;\n\n\n//# sourceURL=webpack://cd-manager/./src/components/utils/buildRatingOptions.js?");

/***/ }),

/***/ "./src/components/utils/buildRatingStars.js":
/*!**************************************************!*\
  !*** ./src/components/utils/buildRatingStars.js ***!
  \**************************************************/
/***/ ((module) => {

eval("// Gives a list of rating values\nfunction buildRatingStars(amount) {\n  let starsList = '';\n\n  for (let i = 0; i < amount; i++) {\n    // starsList += '⭐';\n    starsList = i;\n  }\n  return starsList;\n}\n\nmodule.exports = buildRatingStars;\n\n\n//# sourceURL=webpack://cd-manager/./src/components/utils/buildRatingStars.js?");

/***/ }),

/***/ "./src/components/utils/buildYearOptions.js":
/*!**************************************************!*\
  !*** ./src/components/utils/buildYearOptions.js ***!
  \**************************************************/
/***/ ((module) => {

eval("// Create a list of numbers as options in the 'Year'-selectelement, representing years\nconst MIN_YEAR = 1900;\nconst MAX_YEAR = new Date().getFullYear(); // Current year\n\nfunction buildYearOptions(element) {\n  const selectElement = element;\n\n  for (let i = MAX_YEAR; i > MIN_YEAR; i--) {\n    const newOption = document.createElement('option');\n    newOption.textContent = i;\n    selectElement.append(newOption);\n  }\n}\n\nmodule.exports = buildYearOptions;\n\n\n//# sourceURL=webpack://cd-manager/./src/components/utils/buildYearOptions.js?");

/***/ }),

/***/ "./src/components/utils/clearHolders.js":
/*!**********************************************!*\
  !*** ./src/components/utils/clearHolders.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const commonElements = __webpack_require__(/*! ./commonElements.js */ \"./src/components/utils/commonElements.js\");\n\n// Clear all the content from the page so a new page can be build\nfunction clearContentHolders() {\n  while (commonElements.contentHolder.firstChild) {\n    commonElements.contentHolder.removeChild(commonElements.contentHolder.firstChild);\n  }\n\n  const formElement = document.createElement('form');\n\n  formElement.setAttribute('id', 'form');\n  commonElements.contentHolder.appendChild(formElement);\n  commonElements.pageHolder.append(commonElements.contentHolder);\n}\n\nmodule.exports = clearContentHolders;\n\n\n//# sourceURL=webpack://cd-manager/./src/components/utils/clearHolders.js?");

/***/ }),

/***/ "./src/components/utils/commonElements.js":
/*!************************************************!*\
  !*** ./src/components/utils/commonElements.js ***!
  \************************************************/
/***/ ((module) => {

eval("// Holders\nconst pageHolder = document.querySelector('#page-holder');\nconst titleHolder = document.querySelector('#title-holder');\nconst contentHolder = document.querySelector('#content-holder');\nconst form = document.querySelector('#form');\n\n// Navigation\nconst buttonHome = document.querySelector('#menu-button-home');\nconst buttonSearch = document.querySelector('#menu-button-search');\nconst buttonStats = document.querySelector('#menu-button-stats');\nconst buttonProfile = document.querySelector('#menu-button-profile');\n\n// Albums\nconst buttonAlbumsAll = document.querySelector('#drop-menu-albums-all');\nconst buttonAlbumsAdd = document.querySelector('#drop-menu-albums-add');\nconst buttonAlbumsEdit = document.querySelector('#drop-menu-albums-edit');\nconst buttonAlbumsDelete = document.querySelector('#drop-menu-albums-delete');\n\n// CDs\nconst buttonCDsAll = document.querySelector('#drop-menu-cds-all');\nconst buttonCDsAdd = document.querySelector('#drop-menu-cds-add');\nconst buttonCDsEdit = document.querySelector('#drop-menu-cds-edit');\nconst buttonCDsDelete = document.querySelector('#drop-menu-cds-delete');\n\n// Tracks\nconst buttonTracksAll = document.querySelector('#drop-menu-tracks-all');\nconst buttonTracksAdd = document.querySelector('#drop-menu-tracks-add');\nconst buttonTracksEdit = document.querySelector('#drop-menu-tracks-edit');\nconst buttonTracksDelete = document.querySelector('#drop-menu-tracks-delete');\n\nmodule.exports = {\n  // Holders\n  pageHolder,\n  titleHolder,\n  contentHolder,\n  form,\n  // Navigation\n  buttonHome,\n  buttonSearch,\n  buttonStats,\n  buttonProfile,\n  // Albums\n  buttonAlbumsAll,\n  buttonAlbumsAdd,\n  buttonAlbumsEdit,\n  buttonAlbumsDelete,\n  // CDs\n  buttonCDsAll,\n  buttonCDsAdd,\n  buttonCDsEdit,\n  buttonCDsDelete,\n  // Tracks\n  buttonTracksAll,\n  buttonTracksAdd,\n  buttonTracksEdit,\n  buttonTracksDelete,\n};\n\n\n//# sourceURL=webpack://cd-manager/./src/components/utils/commonElements.js?");

/***/ }),

/***/ "./src/components/utils/createFormInput.js":
/*!*************************************************!*\
  !*** ./src/components/utils/createFormInput.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const buildRatingOptions = __webpack_require__(/*! ./buildRatingOptions.js */ \"./src/components/utils/buildRatingOptions.js\");\nconst buildSelectOptions = __webpack_require__(/*! ./buildItemOptions.js */ \"./src/components/utils/buildItemOptions.js\");\nconst buildYearOptions = __webpack_require__(/*! ./buildYearOptions.js */ \"./src/components/utils/buildYearOptions.js\");\n\n// Creates an input element and set the attributes and values where needed\nfunction createFormInput(labelText, type, element, placeholder, value) {\n\n  // Create a new input holder, a label and a element\n  const holder = document.createElement('div');\n  const label = document.createElement('label');\n  const input = document.createElement(element);\n\n  // Set all relevant attributes and values\n  holder.classList.add('form-input-holder');\n  label.classList.add('form-label');\n  label.setAttribute('for', labelText.toLowerCase());\n  label.textContent = `${labelText}:`;\n\n  input.setAttribute('type', type);\n  input.setAttribute('id', labelText.toLowerCase());\n  input.setAttribute('name', labelText.toLowerCase());\n  input.setAttribute('placeholder', placeholder);\n\n  // Use the corresponding build function for each select-element to fill the options with data\n  if (labelText === 'Rating') buildRatingOptions(input);\n  if (labelText === 'Year') buildYearOptions(input);\n\n  // The album and CD options need to be build in a callback because it needs a api request.\n  if (labelText === 'Album' || labelText === 'Cd') {\n    buildSelectOptions(input, () => {\n      input.value = value;\n    });\n  }\n\n  // In case the edit-form is being build.\n  // All input fields are filled with the current data of the item\n  // Use the corresponding methods to change the preset values for each type of element\n  if (value) {\n    switch (element) {\n      case 'textarea': input.textContent = value;\n        break;\n      case 'select': input.value = value;\n        break;\n      default: input.setAttribute('value', value);\n        break;\n    }\n  }\n\n  // Add the input-holder, with a label and a element, to the form\n  holder.append(label, input);\n\n  return holder;\n}\n\n\nmodule.exports = createFormInput;\n\n\n//# sourceURL=webpack://cd-manager/./src/components/utils/createFormInput.js?");

/***/ }),

/***/ "./src/components/utils/getCurrentDate.js":
/*!************************************************!*\
  !*** ./src/components/utils/getCurrentDate.js ***!
  \************************************************/
/***/ ((module) => {

eval("// Gives the current data in a prefered format\nfunction getCurrentDate() {\n\n  let today = new Date();\n  const dd = String(today.getDate()).padStart(2, '0');\n  const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!\n  const yyyy = today.getFullYear();\n\n  today = `${mm}-${dd}-${yyyy}`;\n\n  return today;\n}\n\nmodule.exports = getCurrentDate;\n\n\n//# sourceURL=webpack://cd-manager/./src/components/utils/getCurrentDate.js?");

/***/ }),

/***/ "./src/components/utils/getInputValue.js":
/*!***********************************************!*\
  !*** ./src/components/utils/getInputValue.js ***!
  \***********************************************/
/***/ ((module) => {

eval("// Returns the value of a given input-element\nfunction getInputValue(inputID) {\n  const element = document.querySelector(`#${inputID}`);\n  return element.value;\n}\n\nmodule.exports = getInputValue;\n\n\n//# sourceURL=webpack://cd-manager/./src/components/utils/getInputValue.js?");

/***/ }),

/***/ "./src/components/utils/index.js":
/*!***************************************!*\
  !*** ./src/components/utils/index.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const setTitle = __webpack_require__(/*! ./setTitle.js */ \"./src/components/utils/setTitle.js\");\nconst clearContentHolders = __webpack_require__(/*! ./clearHolders.js */ \"./src/components/utils/clearHolders.js\");\nconst getInputValue = __webpack_require__(/*! ./getInputValue.js */ \"./src/components/utils/getInputValue.js\");\nconst createFormInput = __webpack_require__(/*! ./createFormInput.js */ \"./src/components/utils/createFormInput.js\");\nconst getCurrentDate = __webpack_require__(/*! ./getCurrentDate.js */ \"./src/components/utils/getCurrentDate.js\");\nconst buildRatingStars = __webpack_require__(/*! ./buildRatingStars.js */ \"./src/components/utils/buildRatingStars.js\");\nconst buildRatingOptions = __webpack_require__(/*! ./buildRatingOptions.js */ \"./src/components/utils/buildRatingOptions.js\");\nconst buildYearOptions = __webpack_require__(/*! ./buildYearOptions.js */ \"./src/components/utils/buildYearOptions.js\");\nconst buildItemOptions = __webpack_require__(/*! ./buildItemOptions.js */ \"./src/components/utils/buildItemOptions.js\");\n\n// Get all needed elements in the DOM, no functions\nconst { commonElements } = __webpack_require__(/*! ./commonElements.js */ \"./src/components/utils/commonElements.js\");\n\nmodule.exports = {\n  setTitle,\n  clearContentHolders,\n  getInputValue,\n  createFormInput,\n  getCurrentDate,\n  buildRatingStars,\n  buildRatingOptions,\n  buildYearOptions,\n  buildItemOptions,\n  commonElements,\n};\n\n\n//# sourceURL=webpack://cd-manager/./src/components/utils/index.js?");

/***/ }),

/***/ "./src/components/utils/setTitle.js":
/*!******************************************!*\
  !*** ./src/components/utils/setTitle.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const commonElements = __webpack_require__(/*! ./commonElements.js */ \"./src/components/utils/commonElements.js\");\n\n// Set the title above the content section\nfunction setTitle(title) {\n  commonElements.titleHolder.textContent = title; // Set text of the title\n}\n\nmodule.exports = setTitle;\n\n\n//# sourceURL=webpack://cd-manager/./src/components/utils/setTitle.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// const Controller = require('./controller/Controller.js');\n// const User = require('./modules/User.js');\nconst setNavEventListeners = __webpack_require__(/*! ./components/nav/navBar.js */ \"./src/components/nav/navBar.js\");\nconst buildHomePage = __webpack_require__(/*! ./pages/homePage.js */ \"./src/pages/homePage.js\");\n\n\n// // Test account\n// const _USERNAME = 'admin';\n\n// // Create a new user with acces to all the controller-methods\n// const controller = new Controller();\n// const user = new User(controller, _USERNAME);\n\n// Activate navigation buttons\ndocument.addEventListener('DOMContentLoaded', () => {\n  setNavEventListeners();\n});\n\n\n// Start on default page\nbuildHomePage();\n\n\n//# sourceURL=webpack://cd-manager/./src/index.js?");

/***/ }),

/***/ "./src/pages/album/addAlbum.js":
/*!*************************************!*\
  !*** ./src/pages/album/addAlbum.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { clearContentHolders, setTitle } = __webpack_require__(/*! ../../components/utils/index.js */ \"./src/components/utils/index.js\");\nconst buildAddItemForm = __webpack_require__(/*! ../../components/forms/addItem.js */ \"./src/components/forms/addItem.js\");\n\n// Create the add page after clearing the page from any other content\nfunction buildAlbumsAddPage() {\n\n  clearContentHolders();\n\n  setTitle('Add a new album to your collection');\n\n  buildAddItemForm('album');\n}\n\nmodule.exports = buildAlbumsAddPage;\n\n\n//# sourceURL=webpack://cd-manager/./src/pages/album/addAlbum.js?");

/***/ }),

/***/ "./src/pages/album/deleteAlbum.js":
/*!****************************************!*\
  !*** ./src/pages/album/deleteAlbum.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { clearContentHolders, setTitle } = __webpack_require__(/*! ../../components/utils/index.js */ \"./src/components/utils/index.js\");\nconst buildSearchItemForm = __webpack_require__(/*! ../../components/forms/searchItem.js */ \"./src/components/forms/searchItem.js\");\n\n// Create the delete page after clearing the page from any other content\nfunction buildAlbumsDeletePage() {\n\n  clearContentHolders();\n\n  setTitle('Remove a album from your collection');\n\n  buildSearchItemForm('album', 'delete');\n}\n\nmodule.exports = buildAlbumsDeletePage;\n\n\n//# sourceURL=webpack://cd-manager/./src/pages/album/deleteAlbum.js?");

/***/ }),

/***/ "./src/pages/album/editAlbum.js":
/*!**************************************!*\
  !*** ./src/pages/album/editAlbum.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { clearContentHolders, setTitle } = __webpack_require__(/*! ../../components/utils/index.js */ \"./src/components/utils/index.js\");\nconst buildSearchItemForm = __webpack_require__(/*! ../../components/forms/searchItem.js */ \"./src/components/forms/searchItem.js\");\n\n// Create the edit page after clearing the page from any other content\nfunction buildAlbumsEditPage() {\n\n  clearContentHolders();\n\n  setTitle('Edit a album');\n\n  buildSearchItemForm('album', 'edit');\n}\n\nmodule.exports = buildAlbumsEditPage;\n\n\n//# sourceURL=webpack://cd-manager/./src/pages/album/editAlbum.js?");

/***/ }),

/***/ "./src/pages/album/index.js":
/*!**********************************!*\
  !*** ./src/pages/album/index.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const buildAlbumsAllPage = __webpack_require__(/*! ./viewAllAlbums.js */ \"./src/pages/album/viewAllAlbums.js\");\nconst buildAlbumsAddPage = __webpack_require__(/*! ./addAlbum.js */ \"./src/pages/album/addAlbum.js\");\nconst buildAlbumsEditPage = __webpack_require__(/*! ./editAlbum.js */ \"./src/pages/album/editAlbum.js\");\nconst buildAlbumsDeletePage = __webpack_require__(/*! ./deleteAlbum.js */ \"./src/pages/album/deleteAlbum.js\");\n\nmodule.exports = {\n  buildAlbumsAllPage,\n  buildAlbumsAddPage,\n  buildAlbumsEditPage,\n  buildAlbumsDeletePage,\n};\n\n\n//# sourceURL=webpack://cd-manager/./src/pages/album/index.js?");

/***/ }),

/***/ "./src/pages/album/viewAllAlbums.js":
/*!******************************************!*\
  !*** ./src/pages/album/viewAllAlbums.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { clearContentHolders, setTitle } = __webpack_require__(/*! ../../components/utils/index.js */ \"./src/components/utils/index.js\");\nconst getItemsHTML = __webpack_require__(/*! ../../../api/getItemsHTML.js */ \"./api/getItemsHTML.js\");\n\n// Create the overview page after clearing the page from any other content\nfunction buildAlbumsAllPage() {\n\n  clearContentHolders();\n\n  setTitle('Overview of all albums in your collection');\n\n  getItemsHTML('album');\n}\n\nmodule.exports = buildAlbumsAllPage;\n\n\n//# sourceURL=webpack://cd-manager/./src/pages/album/viewAllAlbums.js?");

/***/ }),

/***/ "./src/pages/cd/addCD.js":
/*!*******************************!*\
  !*** ./src/pages/cd/addCD.js ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { clearContentHolders, setTitle } = __webpack_require__(/*! ../../components/utils/index.js */ \"./src/components/utils/index.js\");\nconst { buildAddItemForm } = __webpack_require__(/*! ../../components/forms/index.js */ \"./src/components/forms/index.js\");\n\n// Create the add page after clearing the page from any other content\nfunction buildCDsAddPage() {\n\n  clearContentHolders();\n\n  setTitle('Add a new CD to your collection');\n\n  buildAddItemForm('cd');\n}\n\nmodule.exports = buildCDsAddPage;\n\n\n//# sourceURL=webpack://cd-manager/./src/pages/cd/addCD.js?");

/***/ }),

/***/ "./src/pages/cd/deleteCD.js":
/*!**********************************!*\
  !*** ./src/pages/cd/deleteCD.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { clearContentHolders, setTitle } = __webpack_require__(/*! ../../components/utils/index.js */ \"./src/components/utils/index.js\");\n\n// Create the edit page after clearing the page from any other content\nconst buildCDsDeletePage = async () => {\n\n  // Import the buildSearchItemForm function asynchronic\n  await Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(__webpack_require__, /*! ../../components/forms/searchItem.js */ \"./src/components/forms/searchItem.js\", 23)).then((module) => {\n\n    // Call the defalut function\n    const buildSearchItemForm = module.default;\n\n    // Clear all content\n    clearContentHolders();\n\n    // Build the 'edit CD' page\n    setTitle('Delete a CD');\n    buildSearchItemForm('cd', 'edit');\n  });\n};\n\nmodule.exports = buildCDsDeletePage;\n\n\n//# sourceURL=webpack://cd-manager/./src/pages/cd/deleteCD.js?");

/***/ }),

/***/ "./src/pages/cd/editCD.js":
/*!********************************!*\
  !*** ./src/pages/cd/editCD.js ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { clearContentHolders, setTitle } = __webpack_require__(/*! ../../components/utils/index.js */ \"./src/components/utils/index.js\");\n\n// Create the edit page after clearing the page from any other content\nconst buildCDsEditPage = async () => {\n\n  // Import the buildSearchItemForm function asynchronic\n  await Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(__webpack_require__, /*! ../../components/forms/searchItem.js */ \"./src/components/forms/searchItem.js\", 23)).then((module) => {\n\n    // Call the defalut function\n    const buildSearchItemForm = module.default;\n\n    // Clear all content\n    clearContentHolders();\n\n    // Build the 'edit CD' page\n    setTitle('Edit a CD');\n    buildSearchItemForm('cd', 'edit');\n  });\n};\n\nmodule.exports = buildCDsEditPage;\n\n\n//# sourceURL=webpack://cd-manager/./src/pages/cd/editCD.js?");

/***/ }),

/***/ "./src/pages/cd/index.js":
/*!*******************************!*\
  !*** ./src/pages/cd/index.js ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const buildCDsAllPage = __webpack_require__(/*! ./viewAllCDs.js */ \"./src/pages/cd/viewAllCDs.js\");\nconst buildCDsAddPage = __webpack_require__(/*! ./addCD.js */ \"./src/pages/cd/addCD.js\");\nconst buildCDsEditPage = __webpack_require__(/*! ./editCD.js */ \"./src/pages/cd/editCD.js\");\nconst buildCDsDeletePage = __webpack_require__(/*! ./deleteCD.js */ \"./src/pages/cd/deleteCD.js\");\n\nmodule.exports = {\n  buildCDsAllPage,\n  buildCDsAddPage,\n  buildCDsEditPage,\n  buildCDsDeletePage,\n};\n\n\n//# sourceURL=webpack://cd-manager/./src/pages/cd/index.js?");

/***/ }),

/***/ "./src/pages/cd/viewAllCDs.js":
/*!************************************!*\
  !*** ./src/pages/cd/viewAllCDs.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { clearContentHolders, setTitle } = __webpack_require__(/*! ../../components/utils/index.js */ \"./src/components/utils/index.js\");\nconst getItemsHTML = __webpack_require__(/*! ../../../api/getItemsHTML.js */ \"./api/getItemsHTML.js\");\n\n// Create the overview page after clearing the page from any other content\nfunction buildCDsAllPage() {\n\n  clearContentHolders();\n\n  setTitle('Overview of all CDs in your collection');\n\n  getItemsHTML('cd');\n}\n\nmodule.exports = buildCDsAllPage;\n\n\n//# sourceURL=webpack://cd-manager/./src/pages/cd/viewAllCDs.js?");

/***/ }),

/***/ "./src/pages/homePage.js":
/*!*******************************!*\
  !*** ./src/pages/homePage.js ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { clearContentHolders, setTitle } = __webpack_require__(/*! ../components/utils/index.js */ \"./src/components/utils/index.js\");\n\n// Create the home page after clearing the page from any other content\nfunction buildHomePage() {\n\n  clearContentHolders();\n\n  setTitle('Organize your music');\n}\n\nmodule.exports = buildHomePage;\n\n\n//# sourceURL=webpack://cd-manager/./src/pages/homePage.js?");

/***/ }),

/***/ "./src/pages/profilePage.js":
/*!**********************************!*\
  !*** ./src/pages/profilePage.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { clearContentHolders, setTitle } = __webpack_require__(/*! ../components/utils/index.js */ \"./src/components/utils/index.js\");\n\n// Create the profile page after clearing the page from any other content\nfunction buildProfilePage() {\n\n  clearContentHolders();\n\n  setTitle('Your profile');\n}\n\nmodule.exports = buildProfilePage;\n\n\n//# sourceURL=webpack://cd-manager/./src/pages/profilePage.js?");

/***/ }),

/***/ "./src/pages/searchPage.js":
/*!*********************************!*\
  !*** ./src/pages/searchPage.js ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { clearContentHolders, setTitle } = __webpack_require__(/*! ../components/utils/index.js */ \"./src/components/utils/index.js\");\n\n// Create the search page after clearing the page from any other content\nfunction buildSearchPage() {\n\n  clearContentHolders();\n\n  setTitle('Search for Albums, CDs or tracks');\n}\n\nmodule.exports = buildSearchPage;\n\n\n//# sourceURL=webpack://cd-manager/./src/pages/searchPage.js?");

/***/ }),

/***/ "./src/pages/statisticsPage.js":
/*!*************************************!*\
  !*** ./src/pages/statisticsPage.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { clearContentHolders, setTitle } = __webpack_require__(/*! ../components/utils/index.js */ \"./src/components/utils/index.js\");\n\n// Create the statistics page after clearing the page from any other content\nfunction buildStatsPage() {\n\n  clearContentHolders();\n\n  setTitle('Statistics of your collection');\n}\n\nmodule.exports = buildStatsPage;\n\n\n//# sourceURL=webpack://cd-manager/./src/pages/statisticsPage.js?");

/***/ }),

/***/ "./src/pages/track/addTrack.js":
/*!*************************************!*\
  !*** ./src/pages/track/addTrack.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { clearContentHolders, setTitle } = __webpack_require__(/*! ../../components/utils/index.js */ \"./src/components/utils/index.js\");\nconst buildAddItemForm = __webpack_require__(/*! ../../components/forms/addItem.js */ \"./src/components/forms/addItem.js\");\n\n// Create the tracks add page after clearing the page from any other content\nfunction buildTracksAddPage() {\n\n  clearContentHolders();\n\n  setTitle('Add a new track to your collection');\n\n  buildAddItemForm('track');\n}\n\nmodule.exports = buildTracksAddPage;\n\n\n//# sourceURL=webpack://cd-manager/./src/pages/track/addTrack.js?");

/***/ }),

/***/ "./src/pages/track/deleteTrack.js":
/*!****************************************!*\
  !*** ./src/pages/track/deleteTrack.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { clearContentHolders, setTitle } = __webpack_require__(/*! ../../components/utils/index.js */ \"./src/components/utils/index.js\");\n\n// Create the edit page after clearing the page from any other content\nconst buildTracksDeletePage = async () => {\n\n  // Import the buildSearchItemForm function asynchronic\n  await Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(__webpack_require__, /*! ../../components/forms/searchItem.js */ \"./src/components/forms/searchItem.js\", 23)).then((module) => {\n\n    // Call the defalut function\n    const buildSearchItemForm = module.default;\n\n    // Clear all content\n    clearContentHolders();\n\n    // Build the 'edit CD' page\n    setTitle('Delete a track');\n    buildSearchItemForm('track', 'edit');\n  });\n};\n\nmodule.exports = buildTracksDeletePage;\n\n\n//# sourceURL=webpack://cd-manager/./src/pages/track/deleteTrack.js?");

/***/ }),

/***/ "./src/pages/track/editTrack.js":
/*!**************************************!*\
  !*** ./src/pages/track/editTrack.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { clearContentHolders, setTitle } = __webpack_require__(/*! ../../components/utils/index.js */ \"./src/components/utils/index.js\");\n\n// Create the tracks edit page after clearing the page from any other content\nconst buildTracksEditPage = async () => {\n\n  // Import the buildSearchItemForm function asynchronic\n  await Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(__webpack_require__, /*! ../../components/forms/searchItem.js */ \"./src/components/forms/searchItem.js\", 23)).then((module) => {\n\n    // Call the defalut function\n    const buildSearchItemForm = module.default;\n\n    // Clear all content\n    clearContentHolders();\n\n    // Build the 'edit CD' page\n    setTitle('Edit a track');\n    buildSearchItemForm('track', 'edit');\n  });\n};\n\nmodule.exports = buildTracksEditPage;\n\n\n//# sourceURL=webpack://cd-manager/./src/pages/track/editTrack.js?");

/***/ }),

/***/ "./src/pages/track/index.js":
/*!**********************************!*\
  !*** ./src/pages/track/index.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const buildTracksAllPage = __webpack_require__(/*! ./viewAllTracks.js */ \"./src/pages/track/viewAllTracks.js\");\nconst buildTracksAddPage = __webpack_require__(/*! ./addTrack.js */ \"./src/pages/track/addTrack.js\");\nconst buildTracksEditPage = __webpack_require__(/*! ./editTrack.js */ \"./src/pages/track/editTrack.js\");\nconst buildTracksDeletePage = __webpack_require__(/*! ./deleteTrack.js */ \"./src/pages/track/deleteTrack.js\");\n\nmodule.exports = {\n  buildTracksAllPage,\n  buildTracksAddPage,\n  buildTracksEditPage,\n  buildTracksDeletePage,\n};\n\n\n//# sourceURL=webpack://cd-manager/./src/pages/track/index.js?");

/***/ }),

/***/ "./src/pages/track/viewAllTracks.js":
/*!******************************************!*\
  !*** ./src/pages/track/viewAllTracks.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { clearContentHolders, setTitle } = __webpack_require__(/*! ../../components/utils/index.js */ \"./src/components/utils/index.js\");\nconst getItemsHTML = __webpack_require__(/*! ../../../api/getItemsHTML.js */ \"./api/getItemsHTML.js\");\n\n// Create the tracks overview page after clearing the page from any other content\nfunction buildTracksAllPage() {\n\n  clearContentHolders();\n\n  setTitle('Overview of all tracks in your collection');\n\n  getItemsHTML('track');\n}\n\nmodule.exports = buildTracksAllPage;\n\n\n//# sourceURL=webpack://cd-manager/./src/pages/track/viewAllTracks.js?");

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
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
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