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

/***/ "./api/album/addAlbum.js":
/*!*******************************!*\
  !*** ./api/album/addAlbum.js ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { getCurrentDate } = __webpack_require__(/*! ../../src/components/utils/index.js */ \"./src/components/utils/index.js\");\n\nconst addAlbumToCollection = async (e) => {\n\n  const form = document.querySelector('#form');\n\n  e.preventDefault();\n\n  console.log('form', form);\n\n  const album = {\n    title: form.title.value,\n    artist: form.artist.value,\n    year: form.year.value,\n    collabs: form.collaborators.value,\n    label: form.label.value,\n    genre: form.genre.value,\n    added: getCurrentDate(),\n    rating: form.rating.value,\n    info: form.info.value,\n    img: form.cover.value,\n    views: 0,\n  };\n\n  await fetch('http://localhost:3000/albums', {\n    headers: { 'Content-type': 'application/json' },\n    method: 'POST',\n    body: JSON.stringify(album),\n  });\n};\n\nmodule.exports = addAlbumToCollection;\n\n\n//# sourceURL=webpack://cd-manager/./api/album/addAlbum.js?");

/***/ }),

/***/ "./api/album/getAlbumByID.js":
/*!***********************************!*\
  !*** ./api/album/getAlbumByID.js ***!
  \***********************************/
/***/ ((module) => {

eval("async function getAlbumByID(albumID) {\n  const url = 'http://localhost:3000/albums';\n  const result = await fetch(url, { timeout: 5000 });\n  const data = await result.json();\n\n  const foundAlbum = data.find((album) => album.id === albumID);\n\n  return foundAlbum;\n}\n\nmodule.exports = getAlbumByID;\n\n\n//# sourceURL=webpack://cd-manager/./api/album/getAlbumByID.js?");

/***/ }),

/***/ "./api/album/getAlbumsHTML.js":
/*!************************************!*\
  !*** ./api/album/getAlbumsHTML.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// Don't import from the index file, as it may cause asynchronous issues\nconst commonElements = __webpack_require__(/*! ../../src/components/utils/commonElements.js */ \"./src/components/utils/commonElements.js\");\n\nasync function getAlbumsHTML() {\n  const url = 'http://localhost:3000/albums';\n\n  const result = await fetch(url);\n  const data = await result.json();\n\n  let template = '';\n\n  data.forEach((album) => {\n    template += `\n    <ul class=\"items-list\">\n      <li class=\"list-img\"><img width=\"150px\" height=\"auto\" src=\"${album.image}\"></li>\n      <li class=\"list-item text-title-light\"><p>${album.title}</p></li>\n      <li class=\"list-item text-artist-light\"><p>${album.artist}</p></li>\n    </ul>\n    `;\n  });\n\n  commonElements.contentHolder.innerHTML += template;\n\n  commonElements.contentHolder.classList.remove('no-img-in-item');\n  commonElements.contentHolder.classList.add('img-in-item');\n\n  commonElements.pageHolder.append(commonElements.contentHolder);\n}\n\nmodule.exports = getAlbumsHTML;\n\n\n//# sourceURL=webpack://cd-manager/./api/album/getAlbumsHTML.js?");

/***/ }),

/***/ "./api/album/getAlbumsResult.js":
/*!**************************************!*\
  !*** ./api/album/getAlbumsResult.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// Don't import from the index file, as it may cause asynchronous issues\nconst commonElements = __webpack_require__(/*! ../../src/components/utils/commonElements.js */ \"./src/components/utils/commonElements.js\");\nconst buildEditAlbumForm = __webpack_require__(/*! ../../src/components/forms/album/editAlbum.js */ \"./src/components/forms/album/editAlbum.js\");\n\nasync function getAlbumsResult(searchKeyword) {\n\n  const url = 'http://localhost:3000/albums';\n  const result = await fetch(url, { timeout: 5000 });\n  const data = await result.json();\n\n  const searchTerm = searchKeyword;\n  const filteredAlbums = data.filter((album) => album.title.includes(searchTerm) || album.artist.includes(searchTerm));\n\n  commonElements.contentHolder.classList.remove('img-in-item');\n  commonElements.contentHolder.classList.add('no-img-in-item');\n\n  let template = `\n  <table class=\"albums-table\">\n    <thead>\n      <tr>\n        <th>Title</th>\n        <th>Artist</th>\n        <th>CDs</th>\n        <th></th>\n      </tr>\n    </thead>\n    <tbody>`;\n\n  filteredAlbums.forEach((album) => {\n    template += `\n      <tr>\n        <td>${album.title}</td>\n        <td>${album.artist}</td>\n        <td>${album.cds.length}</td>\n        <td><a class=\"edit-link\" data-trackID=\"${album.id}\" href=\"#\">edit</a<</td>\n      </tr>\n    `;\n  });\n\n  function handleEditClick(trackID) {\n    buildEditAlbumForm(trackID);\n    // Voer hier de code uit die je wilt uitvoeren wanneer op de edit-link wordt geklikt\n  }\n\n  document.addEventListener('click', (e) => {\n    if (e.target && e.target.classList.contains('edit-link')) {\n      e.preventDefault(); // Voorkomt dat de link naar een andere pagina gaat\n\n      // Hier roep je de functie aan die je wilt uitvoeren\n      handleEditClick(e.target.getAttribute('data-trackID'));\n    }\n  });\n\n  template += '</tbody></table>';\n\n  commonElements.contentHolder.innerHTML += template;\n\n  commonElements.pageHolder.append(commonElements.contentHolder);\n}\n\nmodule.exports = getAlbumsResult;\n\n\n//# sourceURL=webpack://cd-manager/./api/album/getAlbumsResult.js?");

/***/ }),

/***/ "./api/album/getAllAlbumTitles.js":
/*!****************************************!*\
  !*** ./api/album/getAllAlbumTitles.js ***!
  \****************************************/
/***/ ((module) => {

eval("async function getAllAlbumTitles() {\n  const list = [];\n  const url = 'http://localhost:3000/albums';\n\n  const result = await fetch(url);\n  const data = await result.json();\n\n\n  data.forEach((album) => {\n    list.push([album.title]);\n  });\n\n  return list;\n}\n\nmodule.exports = getAllAlbumTitles;\n\n\n//# sourceURL=webpack://cd-manager/./api/album/getAllAlbumTitles.js?");

/***/ }),

/***/ "./api/album/index.js":
/*!****************************!*\
  !*** ./api/album/index.js ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const getAlbumsHTML = __webpack_require__(/*! ./getAlbumsHTML.js */ \"./api/album/getAlbumsHTML.js\");\nconst getAlbumByID = __webpack_require__(/*! ./getAlbumByID.js */ \"./api/album/getAlbumByID.js\");\nconst getAllAlbumTitles = __webpack_require__(/*! ./getAllAlbumTitles.js */ \"./api/album/getAllAlbumTitles.js\");\nconst addAlbumToCollection = __webpack_require__(/*! ./addAlbum.js */ \"./api/album/addAlbum.js\");\nconst updateAlbum = __webpack_require__(/*! ./updateAlbum.js */ \"./api/album/updateAlbum.js\");\nconst getAlbumsResult = __webpack_require__(/*! ./getAlbumsResult.js */ \"./api/album/getAlbumsResult.js\");\n\n\nmodule.exports = {\n  getAlbumsHTML,\n  getAlbumByID,\n  getAllAlbumTitles,\n  addAlbumToCollection,\n  updateAlbum,\n  getAlbumsResult,\n};\n\n\n//# sourceURL=webpack://cd-manager/./api/album/index.js?");

/***/ }),

/***/ "./api/album/updateAlbum.js":
/*!**********************************!*\
  !*** ./api/album/updateAlbum.js ***!
  \**********************************/
/***/ ((module) => {

eval("async function updateAlbum(AlbumID, updatedAlbumData) {\n  // Stap 1: Haal de huidige data op\n  const url = `http://localhost:3000/albums/${AlbumID}`; // Update URL met trackID\n  const result = await fetch(url);\n  const album = await result.json();\n\n  if (album) {\n    // Stap 2: Vervang het item\n    const updatedAlbum = { ...album, ...updatedAlbumData };\n\n    // Stap 3: Schrijf de bijgewerkte data terug\n    await fetch(url, {\n      method: 'PUT',\n      headers: {\n        'Content-Type': 'application/json',\n      },\n      body: JSON.stringify(updatedAlbum),\n    });\n\n    console.log(`CD met ID ${AlbumID} is succesvol bijgewerkt.`);\n  } else {\n    console.log(`CD met ID ${AlbumID} is niet gevonden.`);\n  }\n}\n\nmodule.exports = updateAlbum;\n\n\n//# sourceURL=webpack://cd-manager/./api/album/updateAlbum.js?");

/***/ }),

/***/ "./api/cd/addCD.js":
/*!*************************!*\
  !*** ./api/cd/addCD.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { getCurrentDate } = __webpack_require__(/*! ../../src/components/utils/index.js */ \"./src/components/utils/index.js\");\n\nconst addCDToCollection = async (e) => {\n\n  const form = document.querySelector('#form');\n\n  e.preventDefault();\n\n  console.log('form', form);\n\n  const cd = {\n    album: form.album.value,\n    title: form.title.value,\n    artist: form.artist.value,\n    year: form.year.value,\n    collabs: form.collaborators.value,\n    label: form.label.value,\n    genre: form.genre.value,\n    added: getCurrentDate(),\n    rating: form.rating.value,\n    info: form.info.value,\n    image: form.image.value,\n    views: 0,\n  };\n\n  await fetch('http://localhost:3000/cds', {\n    headers: { 'Content-type': 'application/json' },\n    method: 'POST',\n    body: JSON.stringify(cd),\n  });\n};\n\nmodule.exports = addCDToCollection;\n\n\n//# sourceURL=webpack://cd-manager/./api/cd/addCD.js?");

/***/ }),

/***/ "./api/cd/getAllCDTitles.js":
/*!**********************************!*\
  !*** ./api/cd/getAllCDTitles.js ***!
  \**********************************/
/***/ ((module) => {

eval("async function getAllCDTitles() {\n  const list = [];\n  const url = 'http://localhost:3000/cds';\n\n  const result = await fetch(url);\n  const data = await result.json();\n\n\n  data.forEach((cd) => {\n    list.push([cd.title]);\n  });\n\n  return list;\n}\n\nmodule.exports = getAllCDTitles;\n\n\n//# sourceURL=webpack://cd-manager/./api/cd/getAllCDTitles.js?");

/***/ }),

/***/ "./api/cd/getCDByID.js":
/*!*****************************!*\
  !*** ./api/cd/getCDByID.js ***!
  \*****************************/
/***/ ((module) => {

eval("async function getCDByID(CDID) {\n  const url = 'http://localhost:3000/cds';\n  const result = await fetch(url, { timeout: 5000 });\n  const data = await result.json();\n\n  const foundCD = data.find((cd) => cd.id === CDID);\n\n  return foundCD;\n}\n\nmodule.exports = getCDByID;\n\n\n//# sourceURL=webpack://cd-manager/./api/cd/getCDByID.js?");

/***/ }),

/***/ "./api/cd/getCDsHTML.js":
/*!******************************!*\
  !*** ./api/cd/getCDsHTML.js ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// Don't import from the index file, as it may cause asynchronous issues\nconst commonElements = __webpack_require__(/*! ../../src/components/utils/commonElements.js */ \"./src/components/utils/commonElements.js\");\n\nasync function getCDsHTML() {\n  const url = 'http://localhost:3000/cds';\n\n  const result = await fetch(url);\n  const data = await result.json();\n\n  let template = '';\n\n  data.forEach((cd) => {\n    template += `\n    <ul class=\"items-list\">\n      <li class=\"list-img\"><img width=\"150px\" height=\"auto\" src=\"${cd.image}\"></li>\n      <li class=\"list-item text-album\"><p>${cd.album}</p></li>\n      <li class=\"list-item text-title-light\"><p>${cd.title}</p></li>\n      <li class=\"list-item text-artist-light\"><p>${cd.artist}</p></li>\n    </ul>\n    `;\n  });\n\n  commonElements.contentHolder.innerHTML += template;\n\n  commonElements.contentHolder.classList.remove('no-img-in-item');\n  commonElements.contentHolder.classList.add('img-in-item');\n\n  commonElements.pageHolder.append(commonElements.contentHolder);\n}\n\nmodule.exports = getCDsHTML;\n\n\n//# sourceURL=webpack://cd-manager/./api/cd/getCDsHTML.js?");

/***/ }),

/***/ "./api/cd/getCDsResult.js":
/*!********************************!*\
  !*** ./api/cd/getCDsResult.js ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// Don't import from the index file, as it may cause asynchronous issues\nconst commonElements = __webpack_require__(/*! ../../src/components/utils/commonElements.js */ \"./src/components/utils/commonElements.js\");\nconst buildEditCDForm = __webpack_require__(/*! ../../src/components/forms/cd/editCD.js */ \"./src/components/forms/cd/editCD.js\");\n\nasync function getCDsResult(searchKeyword) {\n\n  const url = 'http://localhost:3000/cds';\n  const result = await fetch(url, { timeout: 5000 });\n  const data = await result.json();\n\n  const searchTerm = searchKeyword;\n  const filteredCDs = data.filter((cd) => cd.title.includes(searchTerm) || cd.artist.includes(searchTerm));\n\n  commonElements.contentHolder.classList.remove('img-in-item');\n  commonElements.contentHolder.classList.add('no-img-in-item');\n\n  let template = `\n  <table class=\"cds-table\">\n    <thead>\n      <tr>\n        <th>Title</th>\n        <th>Artist</th>\n        <th>Tracks</th>\n        <th></th>\n      </tr>\n    </thead>\n    <tbody>`;\n\n  filteredCDs.forEach((cd) => {\n    template += `\n      <tr>\n        <td>${cd.title}</td>\n        <td>${cd.artist}</td>\n        <td>${cd.tracks.length}</td>\n        <td><a class=\"edit-link\" data-trackID=\"${cd.id}\" href=\"#\">edit</a<</td>\n      </tr>\n    `;\n  });\n\n  function handleEditClick(trackID) {\n    buildEditCDForm(trackID);\n    // Voer hier de code uit die je wilt uitvoeren wanneer op de edit-link wordt geklikt\n  }\n\n  document.addEventListener('click', (e) => {\n    if (e.target && e.target.classList.contains('edit-link')) {\n      e.preventDefault(); // Voorkomt dat de link naar een andere pagina gaat\n\n      // Hier roep je de functie aan die je wilt uitvoeren\n      handleEditClick(e.target.getAttribute('data-trackID'));\n    }\n  });\n\n  template += '</tbody></table>';\n\n  commonElements.contentHolder.innerHTML += template;\n\n  commonElements.pageHolder.append(commonElements.contentHolder);\n}\n\nmodule.exports = getCDsResult;\n\n\n//# sourceURL=webpack://cd-manager/./api/cd/getCDsResult.js?");

/***/ }),

/***/ "./api/cd/index.js":
/*!*************************!*\
  !*** ./api/cd/index.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const getCDsHTML = __webpack_require__(/*! ./getCDsHTML.js */ \"./api/cd/getCDsHTML.js\");\nconst getCDByID = __webpack_require__(/*! ./getCDByID.js */ \"./api/cd/getCDByID.js\");\nconst getAllCDTitles = __webpack_require__(/*! ./getAllCDTitles.js */ \"./api/cd/getAllCDTitles.js\");\nconst addCDToCollection = __webpack_require__(/*! ./addCD.js */ \"./api/cd/addCD.js\");\nconst updateCD = __webpack_require__(/*! ./updateCD.js */ \"./api/cd/updateCD.js\");\nconst getCDsResult = __webpack_require__(/*! ./getCDsResult.js */ \"./api/cd/getCDsResult.js\");\n\nmodule.exports = {\n  getCDsHTML,\n  getCDByID,\n  getAllCDTitles,\n  addCDToCollection,\n  updateCD,\n  getCDsResult,\n};\n\n\n//# sourceURL=webpack://cd-manager/./api/cd/index.js?");

/***/ }),

/***/ "./api/cd/updateCD.js":
/*!****************************!*\
  !*** ./api/cd/updateCD.js ***!
  \****************************/
/***/ ((module) => {

eval("async function updateCD(CDID, updatedCDData) {\n  // Stap 1: Haal de huidige data op\n  const url = `http://localhost:3000/cds/${CDID}`; // Update URL met trackID\n  const result = await fetch(url);\n  const cd = await result.json();\n\n  if (cd) {\n    // Stap 2: Vervang het item\n    const updatedCD = { ...cd, ...updatedCDData };\n\n    // Stap 3: Schrijf de bijgewerkte data terug\n    await fetch(url, {\n      method: 'PUT',\n      headers: {\n        'Content-Type': 'application/json',\n      },\n      body: JSON.stringify(updatedCD),\n    });\n\n    console.log(`CD met ID ${CDID} is succesvol bijgewerkt.`);\n  } else {\n    console.log(`CD met ID ${CDID} is niet gevonden.`);\n  }\n}\n\nmodule.exports = updateCD;\n\n\n//# sourceURL=webpack://cd-manager/./api/cd/updateCD.js?");

/***/ }),

/***/ "./api/track/addTrack.js":
/*!*******************************!*\
  !*** ./api/track/addTrack.js ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { getCurrentDate } = __webpack_require__(/*! ../../src/components/utils/index.js */ \"./src/components/utils/index.js\");\n\nconst addTrackToCollection = async (e) => {\n  e.preventDefault();\n\n  const form = document.querySelector('#form');\n\n  const track = {\n    cds: form.cd.value,\n    title: form.title.value,\n    artist: form.artist.value,\n    remix: form.remix.value,\n    collabs: form.collaborators.value,\n    label: form.label.value,\n    style: form.style.value,\n    length: form.length.value,\n    added: getCurrentDate(),\n    rating: form.rating.value,\n    info: form.info.value,\n    views: 0,\n  };\n\n  await fetch('http://localhost:3000/tracks', {\n    headers: { 'Content-type': 'application/json' },\n    method: 'POST',\n    body: JSON.stringify(track),\n  });\n};\n\nmodule.exports = addTrackToCollection;\n\n\n//# sourceURL=webpack://cd-manager/./api/track/addTrack.js?");

/***/ }),

/***/ "./api/track/getTrackByID.js":
/*!***********************************!*\
  !*** ./api/track/getTrackByID.js ***!
  \***********************************/
/***/ ((module) => {

eval("async function getTrackbyID(trackID) {\n  const url = 'http://localhost:3000/tracks';\n  const result = await fetch(url, { timeout: 5000 });\n  const data = await result.json();\n\n  const foundTrack = data.find((track) => track.id === trackID);\n\n  return foundTrack;\n}\n\nmodule.exports = getTrackbyID;\n\n\n//# sourceURL=webpack://cd-manager/./api/track/getTrackByID.js?");

/***/ }),

/***/ "./api/track/getTracksHTML.js":
/*!************************************!*\
  !*** ./api/track/getTracksHTML.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// Don't import from the index file, as it may cause asynchronous issues\nconst commonElements = __webpack_require__(/*! ../../src/components/utils/commonElements.js */ \"./src/components/utils/commonElements.js\");\n\nasync function getTracksHTML() {\n\n  const url = 'http://localhost:3000/tracks';\n  const result = await fetch(url);\n  const data = await result.json();\n\n  let template = `<table class=\"tracks-table\">\n  <thead>\n    <tr>\n      <th>Title</th>\n      <th>Artist</th>\n      <th>Length</th>\n    </tr>\n  </thead>\n  <tbody>`;\n\n  data.forEach((track) => {\n    template += `\n        <tr>\n          <td>${track.title}</td>\n          <td>${track.artist}</td>\n          <td>${track.length}</td>\n        </tr>\n    `;\n\n  });\n  template += '</tbody></table>';\n\n  commonElements.contentHolder.innerHTML += template;\n\n  commonElements.contentHolder.classList.remove('img-in-item');\n  commonElements.contentHolder.classList.add('no-img-in-item');\n\n  commonElements.pageHolder.append(commonElements.contentHolder);\n}\n\nmodule.exports = getTracksHTML;\n\n\n//# sourceURL=webpack://cd-manager/./api/track/getTracksHTML.js?");

/***/ }),

/***/ "./api/track/getTracksResult.js":
/*!**************************************!*\
  !*** ./api/track/getTracksResult.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// Don't import from the index file, as it may cause asynchronous issues\nconst commonElements = __webpack_require__(/*! ../../src/components/utils/commonElements.js */ \"./src/components/utils/commonElements.js\");\nconst buildEditTrackForm = __webpack_require__(/*! ../../src/components/forms/track/editTrack.js */ \"./src/components/forms/track/editTrack.js\");\n\nasync function getTracksResult(searchKeyword) {\n\n  const url = 'http://localhost:3000/tracks';\n  const result = await fetch(url, { timeout: 5000 });\n  const data = await result.json();\n\n  const searchTerm = searchKeyword;\n  const filteredTracks = data.filter((track) => track.title.includes(searchTerm) || track.artist.includes(searchTerm));\n\n  commonElements.contentHolder.classList.remove('img-in-item');\n  commonElements.contentHolder.classList.add('no-img-in-item');\n\n  let template = `\n  <table class=\"tracks-table\">\n    <thead>\n      <tr>\n        <th>Title</th>\n        <th>Artist</th>\n        <th>Length</th>\n        <th></th>\n      </tr>\n    </thead>\n    <tbody>`;\n\n  filteredTracks.forEach((track) => {\n    template += `\n      <tr>\n        <td>${track.title}</td>\n        <td>${track.artist}</td>\n        <td>${track.length}</td>\n        <td><a class=\"edit-link\" data-trackID=\"${track.id}\" href=\"#\">edit</a<</td>\n      </tr>\n    `;\n  });\n\n  function handleEditClick(trackID) {\n    buildEditTrackForm(trackID);\n    // Voer hier de code uit die je wilt uitvoeren wanneer op de edit-link wordt geklikt\n  }\n\n  document.addEventListener('click', (e) => {\n    if (e.target && e.target.classList.contains('edit-link')) {\n      e.preventDefault(); // Voorkomt dat de link naar een andere pagina gaat\n\n      // Hier roep je de functie aan die je wilt uitvoeren\n      handleEditClick(e.target.getAttribute('data-trackID'));\n    }\n  });\n\n  template += '</tbody></table>';\n\n  commonElements.contentHolder.innerHTML += template;\n\n  commonElements.pageHolder.append(commonElements.contentHolder);\n}\n\nmodule.exports = getTracksResult;\n\n\n//# sourceURL=webpack://cd-manager/./api/track/getTracksResult.js?");

/***/ }),

/***/ "./api/track/index.js":
/*!****************************!*\
  !*** ./api/track/index.js ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const getTracksHTML = __webpack_require__(/*! ./getTracksHTML.js */ \"./api/track/getTracksHTML.js\");\nconst getTrackbyID = __webpack_require__(/*! ./getTrackByID.js */ \"./api/track/getTrackByID.js\");\nconst updateTrack = __webpack_require__(/*! ./updateTrack.js */ \"./api/track/updateTrack.js\");\nconst getTracksResult = __webpack_require__(/*! ./getTracksResult.js */ \"./api/track/getTracksResult.js\");\nconst addTrackToCollection = __webpack_require__(/*! ./addTrack.js */ \"./api/track/addTrack.js\");\n\nmodule.exports = {\n  getTracksHTML,\n  getTrackbyID,\n  updateTrack,\n  getTracksResult,\n  addTrackToCollection,\n};\n\n\n//# sourceURL=webpack://cd-manager/./api/track/index.js?");

/***/ }),

/***/ "./api/track/updateTrack.js":
/*!**********************************!*\
  !*** ./api/track/updateTrack.js ***!
  \**********************************/
/***/ ((module) => {

eval("async function updateTrack(trackID, updatedTrackData) {\n  // Stap 1: Haal de huidige data op\n  const url = `http://localhost:3000/tracks/${trackID}`; // Update URL met trackID\n  const result = await fetch(url);\n  const track = await result.json();\n\n  if (track) {\n    // Stap 2: Vervang het item\n    const updatedTrack = { ...track, ...updatedTrackData };\n\n    // Stap 3: Schrijf de bijgewerkte data terug\n    await fetch(url, {\n      method: 'PUT',\n      headers: {\n        'Content-Type': 'application/json',\n      },\n      body: JSON.stringify(updatedTrack),\n    });\n\n    console.log(`Track met ID ${trackID} is succesvol bijgewerkt.`);\n  } else {\n    console.log(`Track met ID ${trackID} is niet gevonden.`);\n  }\n}\n\nmodule.exports = updateTrack;\n\n\n//# sourceURL=webpack://cd-manager/./api/track/updateTrack.js?");

/***/ }),

/***/ "./src/components/forms/album/addAlbum.js":
/*!************************************************!*\
  !*** ./src/components/forms/album/addAlbum.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { createFormInput } = __webpack_require__(/*! ../../utils/index.js */ \"./src/components/utils/index.js\");\nconst { addAlbumToCollection } = __webpack_require__(/*! ../../../../api/album/index.js */ \"./api/album/index.js\");\n\nfunction buildAddAlbumForm() {\n  const form = document.querySelector('#form');\n  form.classList.add('add-form');\n\n  form.append(createFormInput('Title', 'text', 'input', 'Title of album...'));\n  form.append(createFormInput('Artist', 'text', 'input', 'Name of artist...'));\n  form.append(createFormInput('Collaborators', 'text', 'input', 'Artist 2, Artist 3, ...'));\n  form.append(createFormInput('Label', 'text', 'input', 'Enter label here...'));\n  form.append(createFormInput('Genre', 'text', 'input', 'Rock, Classical, Electronic, ...'));\n  form.append(createFormInput('Year', 'number', 'select'));\n  form.append(createFormInput('Info', 'text', 'textarea', 'Extra info here...'));\n  form.append(createFormInput('Rating', 'text', 'select'));\n  form.append(createFormInput('Cover', 'text', 'input', 'http://image.jpg...'));\n\n  // Voeg een verzendknop toe\n  const submitButton = document.createElement('button');\n  submitButton.setAttribute('type', 'submit');\n  submitButton.setAttribute('id', 'add-button');\n  submitButton.textContent = 'Add';\n\n  submitButton.addEventListener('click', addAlbumToCollection);\n\n  form.appendChild(submitButton);\n}\n\nmodule.exports = buildAddAlbumForm;\n\n\n//# sourceURL=webpack://cd-manager/./src/components/forms/album/addAlbum.js?");

/***/ }),

/***/ "./src/components/forms/album/editAlbum.js":
/*!*************************************************!*\
  !*** ./src/components/forms/album/editAlbum.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { getInputValue, clearContentHolders, createFormInput } = __webpack_require__(/*! ../../utils/index.js */ \"./src/components/utils/index.js\");\nconst getAlbumByID = __webpack_require__(/*! ../../../../api/album/getAlbumByID.js */ \"./api/album/getAlbumByID.js\");\nconst updateAlbum = __webpack_require__(/*! ../../../../api/album/updateAlbum.js */ \"./api/album/updateAlbum.js\");\nconst buildAlbumsAllPage = __webpack_require__(/*! ../../../pages/album/viewAllAlbums.js */ \"./src/pages/album/viewAllAlbums.js\");\n\nasync function buildEditAlbumForm(selectedID) {\n\n  clearContentHolders();\n\n  const album = await getAlbumByID(selectedID);\n  const form = document.querySelector('#form');\n  form.classList.add('add-form');\n\n  form.append(createFormInput('Title', 'text', 'input', 'Title of album...', album.title));\n  form.append(createFormInput('Artist', 'text', 'input', 'Name of artist...', album.artist));\n  form.append(createFormInput('Collabs', 'text', 'input', 'Artist 2, Artist 3, ...', album.collabs));\n  form.append(createFormInput('Label', 'text', 'input', 'Enter label here...', album.label));\n  form.append(createFormInput('Genre', 'text', 'input', 'Rock, Classical, Electronic, ...', album.genre));\n  form.append(createFormInput('Year', 'number', 'select', '#', album.year));\n  form.append(createFormInput('Info', 'text', 'textarea', 'Extra info here...', album.info));\n  form.append(createFormInput('Rating', 'text', 'select', '#', album.rating));\n  form.append(createFormInput('Image', 'text', 'input', 'http://image.jpg...', album.image));\n\n  // Voeg een verzendknop toe\n  const submitButton = document.createElement('button');\n  submitButton.setAttribute('type', 'submit');\n  submitButton.setAttribute('id', 'edit-button');\n  submitButton.textContent = 'Edit';\n\n  submitButton.addEventListener('click', async (e) => {\n    e.preventDefault();\n\n    const editedAlbumData = {};\n    const fields = [\n      'title',\n      'artist',\n      'collabs',\n      'label',\n      'genre',\n      'year',\n      'info',\n      'rating',\n      'image',\n    ];\n\n    fields.forEach((field) => {\n      editedAlbumData[field] = getInputValue(field);\n    });\n\n    await updateAlbum(album.id, editedAlbumData);\n\n    // clearContentHolders();\n\n    buildAlbumsAllPage();\n  });\n\n  form.appendChild(submitButton);\n}\n\nmodule.exports = buildEditAlbumForm;\n\n\n//# sourceURL=webpack://cd-manager/./src/components/forms/album/editAlbum.js?");

/***/ }),

/***/ "./src/components/forms/album/editAlbumSearch.js":
/*!*******************************************************!*\
  !*** ./src/components/forms/album/editAlbumSearch.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { createFormInput } = __webpack_require__(/*! ../../utils/index.js */ \"./src/components/utils/index.js\");\nconst getAlbumsResult = __webpack_require__(/*! ../../../../api/album/getAlbumsResult.js */ \"./api/album/getAlbumsResult.js\");\n\nfunction searchAlbumForm() {\n  const form = document.querySelector('#form');\n  form.classList.add('edit-form');\n  const searchField = createFormInput('Search', 'text', 'input', 'Title or artist name...');\n\n  form.append(searchField);\n\n  // Voeg een verzendknop toe\n  const submitButton = document.createElement('button');\n  submitButton.setAttribute('type', 'submit');\n  submitButton.setAttribute('id', 'search-button');\n  submitButton.textContent = 'Search';\n\n  submitButton.addEventListener('click', (e) => {\n    e.preventDefault();\n    getAlbumsResult(form.search.value);\n  });\n\n  form.appendChild(submitButton);\n}\n\nmodule.exports = searchAlbumForm;\n\n\n//# sourceURL=webpack://cd-manager/./src/components/forms/album/editAlbumSearch.js?");

/***/ }),

/***/ "./src/components/forms/album/index.js":
/*!*********************************************!*\
  !*** ./src/components/forms/album/index.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const buildAddAlbumForm = __webpack_require__(/*! ./addAlbum.js */ \"./src/components/forms/album/addAlbum.js\");\nconst buildEditAlbumForm = __webpack_require__(/*! ./editAlbum.js */ \"./src/components/forms/album/editAlbum.js\");\nconst searchAlbumForm = __webpack_require__(/*! ./editAlbumSearch.js */ \"./src/components/forms/album/editAlbumSearch.js\");\n\nmodule.exports = {\n  buildAddAlbumForm,\n  buildEditAlbumForm,\n  searchAlbumForm,\n};\n\n\n//# sourceURL=webpack://cd-manager/./src/components/forms/album/index.js?");

/***/ }),

/***/ "./src/components/forms/cd/addCD.js":
/*!******************************************!*\
  !*** ./src/components/forms/cd/addCD.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { createFormInput } = __webpack_require__(/*! ../../utils/index.js */ \"./src/components/utils/index.js\");\nconst { addCDToCollection } = __webpack_require__(/*! ../../../../api/cd/index.js */ \"./api/cd/index.js\");\n\nfunction buildAddCDForm() {\n  const form = document.querySelector('#form');\n  form.classList.add('add-form');\n\n  form.append(createFormInput('Album', 'text', 'select'));\n  form.append(createFormInput('Title', 'text', 'input', 'Title of CD...'));\n  form.append(createFormInput('Artist', 'text', 'input', 'Name of artist...'));\n  form.append(createFormInput('Collaborators', 'text', 'input', 'Artist 2, Artist 3, ...'));\n  form.append(createFormInput('Label', 'text', 'input', 'Enter label here...'));\n  form.append(createFormInput('Genre', 'text', 'input', 'Rock, Classical, Electronic, ...'));\n  form.append(createFormInput('Year', 'number', 'select'));\n  form.append(createFormInput('Info', 'text', 'textarea', 'Extra info here...'));\n  form.append(createFormInput('Rating', 'text', 'select'));\n  form.append(createFormInput('Image', 'text', 'input', 'http://image.jpg...'));\n\n  // Voeg een verzendknop toe\n  const submitButton = document.createElement('button');\n  submitButton.setAttribute('type', 'submit');\n  submitButton.setAttribute('id', 'add-button');\n  submitButton.textContent = 'Add';\n\n  submitButton.addEventListener('click', addCDToCollection);\n\n  form.appendChild(submitButton);\n}\n\nmodule.exports = buildAddCDForm;\n\n\n//# sourceURL=webpack://cd-manager/./src/components/forms/cd/addCD.js?");

/***/ }),

/***/ "./src/components/forms/cd/editCD.js":
/*!*******************************************!*\
  !*** ./src/components/forms/cd/editCD.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { getInputValue, clearContentHolders, createFormInput } = __webpack_require__(/*! ../../utils/index.js */ \"./src/components/utils/index.js\");\nconst getCDByID = __webpack_require__(/*! ../../../../api/cd/getCDByID.js */ \"./api/cd/getCDByID.js\");\nconst updateCD = __webpack_require__(/*! ../../../../api/cd/updateCD.js */ \"./api/cd/updateCD.js\");\nconst buildCDsAllPage = __webpack_require__(/*! ../../../pages/cd/viewAllCDs.js */ \"./src/pages/cd/viewAllCDs.js\");\n\nasync function buildEditCDForm(selectedID) {\n\n  clearContentHolders();\n\n  const cd = await getCDByID(selectedID);\n  const form = document.querySelector('#form');\n  form.classList.add('add-form');\n\n  form.append(createFormInput('Album', 'text', 'select', '#', cd.album));\n  form.append(createFormInput('Title', 'text', 'input', 'Title of CD...', cd.title));\n  form.append(createFormInput('Artist', 'text', 'input', 'Name of artist...', cd.artist));\n  form.append(createFormInput('Collabs', 'text', 'input', 'Artist 2, Artist 3, ...', cd.collabs));\n  form.append(createFormInput('Label', 'text', 'input', 'Enter label here...', cd.label));\n  form.append(createFormInput('Genre', 'text', 'input', 'Rock, Classical, Electronic, ...', cd.genre));\n  form.append(createFormInput('Year', 'number', 'select', '#', cd.year));\n  form.append(createFormInput('Info', 'text', 'textarea', 'Extra info here...', cd.info));\n  form.append(createFormInput('Rating', 'text', 'select', '#', cd.rating));\n  form.append(createFormInput('Image', 'text', 'input', 'http://image.jpg...', cd.image));\n\n  // Voeg een verzendknop toe\n  const submitButton = document.createElement('button');\n  submitButton.setAttribute('type', 'submit');\n  submitButton.setAttribute('id', 'edit-button');\n  submitButton.textContent = 'Edit';\n\n  submitButton.addEventListener('click', async (e) => {\n    e.preventDefault();\n\n    const editedCDData = {};\n    const fields = [\n      'album',\n      'title',\n      'artist',\n      'collabs',\n      'label',\n      'genre',\n      'year',\n      'info',\n      'rating',\n      'image',\n    ];\n\n    fields.forEach((field) => {\n      editedCDData[field] = getInputValue(field);\n    });\n\n    await updateCD(cd.id, editedCDData);\n\n    // clearContentHolders();\n\n    buildCDsAllPage();\n  });\n\n  form.appendChild(submitButton);\n}\n\nmodule.exports = buildEditCDForm;\n\n\n//# sourceURL=webpack://cd-manager/./src/components/forms/cd/editCD.js?");

/***/ }),

/***/ "./src/components/forms/cd/editCDSearch.js":
/*!*************************************************!*\
  !*** ./src/components/forms/cd/editCDSearch.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { createFormInput } = __webpack_require__(/*! ../../utils/index.js */ \"./src/components/utils/index.js\");\nconst getCDsResult = __webpack_require__(/*! ../../../../api/cd/getCDsResult.js */ \"./api/cd/getCDsResult.js\");\n\nfunction searchCDForm() {\n  const form = document.querySelector('#form');\n  form.classList.add('edit-form');\n  const searchField = createFormInput('Search', 'text', 'input', 'Title or artist name...');\n\n  form.append(searchField);\n\n  // Voeg een verzendknop toe\n  const submitButton = document.createElement('button');\n  submitButton.setAttribute('type', 'submit');\n  submitButton.setAttribute('id', 'search-button');\n  submitButton.textContent = 'Search';\n\n  submitButton.addEventListener('click', (e) => {\n    e.preventDefault();\n    getCDsResult(form.search.value);\n  });\n\n  form.appendChild(submitButton);\n}\n\nmodule.exports = searchCDForm;\n\n\n//# sourceURL=webpack://cd-manager/./src/components/forms/cd/editCDSearch.js?");

/***/ }),

/***/ "./src/components/forms/cd/index.js":
/*!******************************************!*\
  !*** ./src/components/forms/cd/index.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const buildAddCDForm = __webpack_require__(/*! ./addCD.js */ \"./src/components/forms/cd/addCD.js\");\nconst buildEditCDForm = __webpack_require__(/*! ./editCD.js */ \"./src/components/forms/cd/editCD.js\");\nconst searchCDForm = __webpack_require__(/*! ./editCDSearch.js */ \"./src/components/forms/cd/editCDSearch.js\");\n\nmodule.exports = {\n  buildAddCDForm,\n  buildEditCDForm,\n  searchCDForm,\n};\n\n\n//# sourceURL=webpack://cd-manager/./src/components/forms/cd/index.js?");

/***/ }),

/***/ "./src/components/forms/track/addTrack.js":
/*!************************************************!*\
  !*** ./src/components/forms/track/addTrack.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { createFormInput } = __webpack_require__(/*! ../../utils/index.js */ \"./src/components/utils/index.js\");\nconst { addTrackToCollection } = __webpack_require__(/*! ../../../../api/track/index.js */ \"./api/track/index.js\");\n\nfunction buildAddTrackForm() {\n  const form = document.querySelector('#form');\n  form.classList.add('add-form');\n\n  form.append(createFormInput('Cd', 'text', 'select'));\n  form.append(createFormInput('Title', 'text', 'input', 'Title of track...'));\n  form.append(createFormInput('Artist', 'text', 'input', 'Name of artist...'));\n  form.append(createFormInput('Remix', 'text', 'input', 'Mixed by...'));\n  form.append(createFormInput('Collaborators', 'text', 'input', 'Artist 2, Artist 3, ...'));\n  form.append(createFormInput('Label', 'text', 'input', 'Enter label here...'));\n  form.append(createFormInput('Style', 'text', 'input', 'Ambient, Blues rock, Trance, ...'));\n  form.append(createFormInput('Length', 'text', 'input', '3:45...'));\n  form.append(createFormInput('Info', 'text', 'textarea', 'Extra info here...'));\n  form.append(createFormInput('Rating', 'text', 'select'));\n\n  // Voeg een verzendknop toe\n  const submitButton = document.createElement('button');\n  submitButton.setAttribute('type', 'submit');\n  submitButton.setAttribute('id', 'add-button');\n  submitButton.textContent = 'Add';\n\n  submitButton.addEventListener('click', addTrackToCollection);\n\n  form.appendChild(submitButton);\n}\n\nmodule.exports = buildAddTrackForm;\n\n\n//# sourceURL=webpack://cd-manager/./src/components/forms/track/addTrack.js?");

/***/ }),

/***/ "./src/components/forms/track/editTrack.js":
/*!*************************************************!*\
  !*** ./src/components/forms/track/editTrack.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { getInputValue, clearContentHolders, createFormInput } = __webpack_require__(/*! ../../utils/index.js */ \"./src/components/utils/index.js\");\nconst getTrackbyID = __webpack_require__(/*! ../../../../api/track/getTrackByID.js */ \"./api/track/getTrackByID.js\");\nconst updateTrack = __webpack_require__(/*! ../../../../api/track/updateTrack.js */ \"./api/track/updateTrack.js\");\nconst buildTracksAllPage = __webpack_require__(/*! ../../../pages/track/viewAllTracks.js */ \"./src/pages/track/viewAllTracks.js\");\n\nasync function buildEditTrackForm(selectedID) {\n\n  clearContentHolders();\n\n  const track = await getTrackbyID(selectedID);\n  const form = document.querySelector('#form');\n  form.classList.add('add-form');\n\n  form.append(createFormInput('Cd', 'text', 'select', '#', track.cd));\n  form.append(createFormInput('Title', 'text', 'input', 'Title of track...', track.title));\n  form.append(createFormInput('Artist', 'text', 'input', 'Name of artist...', track.artist));\n  form.append(createFormInput('Remix', 'text', 'input', 'Mixed by...', track.remix));\n  form.append(createFormInput('Collaborators', 'text', 'input', 'Artist 2, Artist 3, ...', track.collaborators));\n  form.append(createFormInput('Label', 'text', 'input', 'Enter label here...', track.label));\n  form.append(createFormInput('Style', 'text', 'input', 'Ambient, Blues rock, Trance, ...', track.style));\n  form.append(createFormInput('Length', 'text', 'input', '3:45...', track.length));\n  form.append(createFormInput('Info', 'text', 'textarea', 'Extra info here...', track.info));\n  form.append(createFormInput('Rating', 'text', 'select', '#', track.rating));\n\n  // Voeg een verzendknop toe\n  const submitButton = document.createElement('button');\n  submitButton.setAttribute('type', 'submit');\n  submitButton.setAttribute('id', 'edit-button');\n  submitButton.textContent = 'Edit';\n\n  submitButton.addEventListener('click', async (e) => {\n    e.preventDefault();\n\n    const editedTrackData = {};\n    const fields = [\n      'cd',\n      'title',\n      'artist',\n      'remix',\n      'collaborators',\n      'label',\n      'style',\n      'length',\n      'info',\n      'rating',\n    ];\n\n    fields.forEach((field) => {\n      editedTrackData[field] = getInputValue(field);\n    });\n\n    await updateTrack(track.id, editedTrackData);\n\n    // clearContentHolders();\n\n    buildTracksAllPage();\n  });\n\n  form.appendChild(submitButton);\n}\n\nmodule.exports = buildEditTrackForm;\n\n\n//# sourceURL=webpack://cd-manager/./src/components/forms/track/editTrack.js?");

/***/ }),

/***/ "./src/components/forms/track/editTrackSearch.js":
/*!*******************************************************!*\
  !*** ./src/components/forms/track/editTrackSearch.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { createFormInput } = __webpack_require__(/*! ../../utils/index.js */ \"./src/components/utils/index.js\");\nconst getTracksResult = __webpack_require__(/*! ../../../../api/track/getTracksResult.js */ \"./api/track/getTracksResult.js\");\n\nfunction searchTrackForm() {\n  const form = document.querySelector('#form');\n  form.classList.add('edit-form');\n  const searchField = createFormInput('Search', 'text', 'input', 'Title or artist name...');\n\n  form.append(searchField);\n\n  // Voeg een verzendknop toe\n  const submitButton = document.createElement('button');\n  submitButton.setAttribute('type', 'submit');\n  submitButton.setAttribute('id', 'search-button');\n  submitButton.textContent = 'Search';\n\n  submitButton.addEventListener('click', (e) => {\n    e.preventDefault();\n    getTracksResult(form.search.value);\n  });\n\n  form.appendChild(submitButton);\n}\n\nmodule.exports = searchTrackForm;\n\n\n//# sourceURL=webpack://cd-manager/./src/components/forms/track/editTrackSearch.js?");

/***/ }),

/***/ "./src/components/forms/track/index.js":
/*!*********************************************!*\
  !*** ./src/components/forms/track/index.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const buildAddTrackForm = __webpack_require__(/*! ./addTrack.js */ \"./src/components/forms/track/addTrack.js\");\nconst buildEditTrackForm = __webpack_require__(/*! ./editTrack.js */ \"./src/components/forms/track/editTrack.js\");\nconst searchTrackForm = __webpack_require__(/*! ./editTrackSearch.js */ \"./src/components/forms/track/editTrackSearch.js\");\n\nmodule.exports = {\n  buildAddTrackForm,\n  buildEditTrackForm,\n  searchTrackForm,\n};\n\n\n//# sourceURL=webpack://cd-manager/./src/components/forms/track/index.js?");

/***/ }),

/***/ "./src/components/nav/navBar.js":
/*!**************************************!*\
  !*** ./src/components/nav/navBar.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const commonElements = __webpack_require__(/*! ../utils/commonElements.js */ \"./src/components/utils/commonElements.js\");\n\n// Functions that build all the pages\nconst buildHomePage = __webpack_require__(/*! ../../pages/homePage.js */ \"./src/pages/homePage.js\");\nconst buildSearchPage = __webpack_require__(/*! ../../pages/searchPage.js */ \"./src/pages/searchPage.js\");\nconst buildStatsPage = __webpack_require__(/*! ../../pages/statisticsPage.js */ \"./src/pages/statisticsPage.js\");\nconst buildProfilePage = __webpack_require__(/*! ../../pages/profilePage.js */ \"./src/pages/profilePage.js\");\n\n// Albums\nconst {\n  buildAlbumsAllPage,\n  buildAlbumsAddPage,\n  buildAlbumsEditPage,\n  buildAlbumsDeletePage,\n} = __webpack_require__(/*! ../../pages/album/index.js */ \"./src/pages/album/index.js\");\n\n// CDs\nconst {\n  buildCDsAllPage,\n  buildCDsAddPage,\n  buildCDsEditPage,\n  buildCDsDeletePage,\n} = __webpack_require__(/*! ../../pages/cd/index.js */ \"./src/pages/cd/index.js\");\n\n// Tracks\nconst {\n  buildTracksAllPage,\n  buildTracksAddPage,\n  buildTracksEditPage,\n  buildTracksDeletePage,\n} = __webpack_require__(/*! ../../pages/track/index.js */ \"./src/pages/track/index.js\");\n\n// Iterate through each button in the navigation menu and link them to the corresponding build-function\nfunction addButtonEventListeners(buttons, buildFunctions) {\n  buttons.forEach((button, index) => {\n    button.addEventListener('click', buildFunctions[index]);\n  });\n}\n\n// Collect all buttons and build-functions to add eventlisteners on\nfunction setNavEventListeners() {\n\n  // All buttons in the navigation menu\n  const homeButtons = [\n    commonElements.buttonHome,\n    commonElements.buttonSearch,\n    commonElements.buttonStats,\n    commonElements.buttonProfile,\n    // Albums\n    commonElements.buttonAlbumsAll,\n    commonElements.buttonAlbumsAdd,\n    commonElements.buttonAlbumsEdit,\n    commonElements.buttonAlbumsDelete,\n    // CDs\n    commonElements.buttonCDsAll,\n    commonElements.buttonCDsAdd,\n    commonElements.buttonCDsEdit,\n    commonElements.buttonCDsDelete,\n    // Tracks\n    commonElements.buttonTracksAll,\n    commonElements.buttonTracksAdd,\n    commonElements.buttonTracksEdit,\n    commonElements.buttonTracksDelete,\n  ];\n\n  // All corresponding build-page functions in order\n  const buildFunctions = [\n    buildHomePage,\n    buildSearchPage,\n    buildStatsPage,\n    buildProfilePage,\n    // Albums\n    buildAlbumsAllPage,\n    buildAlbumsAddPage,\n    buildAlbumsEditPage,\n    buildAlbumsDeletePage,\n    // CDs\n    buildCDsAllPage,\n    buildCDsAddPage,\n    buildCDsEditPage,\n    buildCDsDeletePage,\n    // Tracks\n    buildTracksAllPage,\n    buildTracksAddPage,\n    buildTracksEditPage,\n    buildTracksDeletePage,\n  ];\n\n  // Use both lists to add the event listeners\n  addButtonEventListeners(homeButtons, buildFunctions);\n}\n\nmodule.exports = setNavEventListeners;\n\n\n//# sourceURL=webpack://cd-manager/./src/components/nav/navBar.js?");

/***/ }),

/***/ "./src/components/utils/clearHolders.js":
/*!**********************************************!*\
  !*** ./src/components/utils/clearHolders.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const commonElements = __webpack_require__(/*! ./commonElements.js */ \"./src/components/utils/commonElements.js\");\n\nfunction clearContentHolders() {\n  while (commonElements.contentHolder.firstChild) {\n    commonElements.contentHolder.removeChild(commonElements.contentHolder.firstChild);\n  }\n\n  const formElement = document.createElement('form');\n\n  formElement.setAttribute('id', 'form');\n  commonElements.contentHolder.appendChild(formElement);\n  commonElements.pageHolder.append(commonElements.contentHolder);\n}\n\nmodule.exports = clearContentHolders;\n\n\n//# sourceURL=webpack://cd-manager/./src/components/utils/clearHolders.js?");

/***/ }),

/***/ "./src/components/utils/commonElements.js":
/*!************************************************!*\
  !*** ./src/components/utils/commonElements.js ***!
  \************************************************/
/***/ ((module) => {

eval("const pageHolder = document.querySelector('#page-holder');\nconst titleHolder = document.querySelector('#title-holder');\nconst contentHolder = document.querySelector('#content-holder');\nconst form = document.querySelector('#form');\nconst buttonHome = document.querySelector('#menu-button-home');\nconst buttonSearch = document.querySelector('#menu-button-search');\nconst buttonStats = document.querySelector('#menu-button-stats');\nconst buttonProfile = document.querySelector('#menu-button-profile');\n\n// Albums\nconst buttonAlbumsAll = document.querySelector('#drop-menu-albums-all');\nconst buttonAlbumsAdd = document.querySelector('#drop-menu-albums-add');\nconst buttonAlbumsEdit = document.querySelector('#drop-menu-albums-edit');\nconst buttonAlbumsDelete = document.querySelector('#drop-menu-albums-delete');\n\n// CDs\nconst buttonCDsAll = document.querySelector('#drop-menu-cds-all');\nconst buttonCDsAdd = document.querySelector('#drop-menu-cds-add');\nconst buttonCDsEdit = document.querySelector('#drop-menu-cds-edit');\nconst buttonCDsDelete = document.querySelector('#drop-menu-cds-delete');\n\n// Tracks\nconst buttonTracksAll = document.querySelector('#drop-menu-tracks-all');\nconst buttonTracksAdd = document.querySelector('#drop-menu-tracks-add');\nconst buttonTracksEdit = document.querySelector('#drop-menu-tracks-edit');\nconst buttonTracksDelete = document.querySelector('#drop-menu-tracks-delete');\n\nmodule.exports = {\n  pageHolder,\n  titleHolder,\n  contentHolder,\n  form,\n  buttonHome,\n  buttonSearch,\n  buttonStats,\n  buttonProfile,\n  // Albums\n  buttonAlbumsAll,\n  buttonAlbumsAdd,\n  buttonAlbumsEdit,\n  buttonAlbumsDelete,\n  // CDs\n  buttonCDsAll,\n  buttonCDsAdd,\n  buttonCDsEdit,\n  buttonCDsDelete,\n  // Tracks\n  buttonTracksAll,\n  buttonTracksAdd,\n  buttonTracksEdit,\n  buttonTracksDelete,\n};\n\n\n//# sourceURL=webpack://cd-manager/./src/components/utils/commonElements.js?");

/***/ }),

/***/ "./src/components/utils/createFormInput.js":
/*!*************************************************!*\
  !*** ./src/components/utils/createFormInput.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const getAllCDTitles = __webpack_require__(/*! ../../../api/cd/getAllCDTitles.js */ \"./api/cd/getAllCDTitles.js\");\nconst getAllAlbumTitles = __webpack_require__(/*! ../../../api/album/getAllAlbumTitles.js */ \"./api/album/getAllAlbumTitles.js\");\n\nfunction buildYearOptions(element) {\n  const selectElement = element;\n  const currentYear = new Date().getFullYear();\n\n  for (let i = currentYear; i > 1900; i--) {\n    const newOption = document.createElement('option');\n    newOption.textContent = i;\n    selectElement.append(newOption);\n  }\n}\n\nasync function buildCDOptions(element, callback) {\n  const selectElement = element;\n  const defaultOption = document.createElement('option');\n\n  defaultOption.textContent = '-';\n  selectElement.append(defaultOption);\n\n  const CDsList = await getAllCDTitles();\n\n  CDsList.forEach(([title]) => {\n    const newOption = document.createElement('option');\n    newOption.setAttribute('value', title);\n    newOption.textContent = title;\n    selectElement.append(newOption);\n  });\n\n  // After all options are loaded, set the corresponding option as value\n  if (callback) callback();\n}\n\n// Merge these two functions\n\nasync function buildAlbumOptions(element, callback) {\n  const selectElement = element;\n  const defaultOption = document.createElement('option');\n\n  defaultOption.textContent = '-';\n  selectElement.append(defaultOption);\n\n  const albumsList = await getAllAlbumTitles();\n\n  albumsList.forEach(([title]) => {\n    const newOption = document.createElement('option');\n    newOption.setAttribute('value', title);\n    newOption.textContent = title;\n    selectElement.append(newOption);\n  });\n\n  // After all options are loaded, set the corresponding option as value\n  if (callback) callback();\n}\n\nfunction buildRatingStars(amount) {\n  let starsList = '';\n\n  for (let i = 0; i < amount; i++) {\n    // starsList += '⭐';\n    starsList = i;\n\n  }\n  return starsList;\n}\n\nfunction buildRatingOptions(element) {\n  const selectElement = element;\n  const defaultOption = document.createElement('option');\n\n  defaultOption.textContent = '-';\n  selectElement.append(defaultOption);\n\n  for (let i = 1; i <= 5; i++) {\n    const newOption = document.createElement('option');\n    newOption.textContent = buildRatingStars(i);\n    selectElement.append(newOption);\n  }\n}\n\nfunction createFormInput(labelText, type, element, placeholder, value) {\n\n  const holder = document.createElement('div');\n  holder.classList.add('form-input-holder');\n\n  const label = document.createElement('label');\n  label.textContent = `${labelText}:`;\n  label.classList.add('form-label');\n  label.setAttribute('for', labelText.toLowerCase());\n\n  const input = document.createElement(element);\n  input.setAttribute('type', type);\n  input.setAttribute('id', labelText.toLowerCase());\n  input.setAttribute('name', labelText.toLowerCase());\n  input.setAttribute('placeholder', placeholder);\n\n  if (labelText === 'Rating') buildRatingOptions(input);\n\n  if (labelText === 'Album') {\n    buildAlbumOptions(input, () => {\n      input.value = value;\n    });\n  }\n\n  if (labelText === 'Cd') {\n    buildCDOptions(input, () => {\n      input.value = value;\n    });\n  }\n\n  if (labelText === 'Year') {\n    buildYearOptions(input);\n    input.value = value;\n  }\n\n  if (value) {\n    if (element === 'textarea') {\n      input.textContent = value;\n    } else if (element === 'select' && labelText === 'Rating') {\n      input.value = value;\n    } else {\n      input.setAttribute('value', value);\n    }\n  }\n\n  holder.append(label, input);\n\n  return holder;\n}\n\n\nmodule.exports = createFormInput;\n\n\n//# sourceURL=webpack://cd-manager/./src/components/utils/createFormInput.js?");

/***/ }),

/***/ "./src/components/utils/getCurrentDate.js":
/*!************************************************!*\
  !*** ./src/components/utils/getCurrentDate.js ***!
  \************************************************/
/***/ ((module) => {

eval("function getCurrentDate() {\n\n  let today = new Date();\n  const dd = String(today.getDate()).padStart(2, '0');\n  const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!\n  const yyyy = today.getFullYear();\n\n  today = `${mm}-${dd}-${yyyy}`;\n\n  return today;\n}\n\nmodule.exports = getCurrentDate;\n\n\n//# sourceURL=webpack://cd-manager/./src/components/utils/getCurrentDate.js?");

/***/ }),

/***/ "./src/components/utils/getInputValue.js":
/*!***********************************************!*\
  !*** ./src/components/utils/getInputValue.js ***!
  \***********************************************/
/***/ ((module) => {

eval("function getInputValue(inputID) {\n  const element = document.querySelector(`#${inputID}`);\n  return element.value;\n}\n\nmodule.exports = getInputValue;\n\n\n//# sourceURL=webpack://cd-manager/./src/components/utils/getInputValue.js?");

/***/ }),

/***/ "./src/components/utils/index.js":
/*!***************************************!*\
  !*** ./src/components/utils/index.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const setTitle = __webpack_require__(/*! ./setTitle.js */ \"./src/components/utils/setTitle.js\");\nconst clearContentHolders = __webpack_require__(/*! ./clearHolders.js */ \"./src/components/utils/clearHolders.js\");\nconst getInputValue = __webpack_require__(/*! ./getInputValue.js */ \"./src/components/utils/getInputValue.js\");\nconst createFormInput = __webpack_require__(/*! ./createFormInput.js */ \"./src/components/utils/createFormInput.js\");\nconst getCurrentDate = __webpack_require__(/*! ./getCurrentDate.js */ \"./src/components/utils/getCurrentDate.js\");\n\n// Get all needed elements in the DOM, no functions\nconst { commonElements } = __webpack_require__(/*! ./commonElements.js */ \"./src/components/utils/commonElements.js\");\n\nmodule.exports = {\n  setTitle,\n  clearContentHolders,\n  getInputValue,\n  createFormInput,\n  getCurrentDate,\n  commonElements,\n};\n\n\n//# sourceURL=webpack://cd-manager/./src/components/utils/index.js?");

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

eval("const clearContentHolders = __webpack_require__(/*! ../../components/utils/clearHolders.js */ \"./src/components/utils/clearHolders.js\");\nconst setTitle = __webpack_require__(/*! ../../components/utils/setTitle.js */ \"./src/components/utils/setTitle.js\");\nconst buildAddAlbumForm = __webpack_require__(/*! ../../components/forms/album/addAlbum.js */ \"./src/components/forms/album/addAlbum.js\");\n\nfunction buildAddAllPage() {\n\n  clearContentHolders();\n\n  setTitle('Add a new album to your collection');\n\n  buildAddAlbumForm();\n}\n\nmodule.exports = buildAddAllPage;\n\n\n//# sourceURL=webpack://cd-manager/./src/pages/album/addAlbum.js?");

/***/ }),

/***/ "./src/pages/album/deleteAlbum.js":
/*!****************************************!*\
  !*** ./src/pages/album/deleteAlbum.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const clearContentHolders = __webpack_require__(/*! ../../components/utils/clearHolders.js */ \"./src/components/utils/clearHolders.js\");\nconst setTitle = __webpack_require__(/*! ../../components/utils/setTitle.js */ \"./src/components/utils/setTitle.js\");\n\nfunction buildDeletePage() {\n\n  clearContentHolders();\n\n  setTitle('Remove a album from your collection');\n}\n\nmodule.exports = buildDeletePage;\n\n\n//# sourceURL=webpack://cd-manager/./src/pages/album/deleteAlbum.js?");

/***/ }),

/***/ "./src/pages/album/editAlbum.js":
/*!**************************************!*\
  !*** ./src/pages/album/editAlbum.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const clearContentHolders = __webpack_require__(/*! ../../components/utils/clearHolders.js */ \"./src/components/utils/clearHolders.js\");\nconst setTitle = __webpack_require__(/*! ../../components/utils/setTitle.js */ \"./src/components/utils/setTitle.js\");\nconst { searchAlbumForm } = __webpack_require__(/*! ../../components/forms/album/index.js */ \"./src/components/forms/album/index.js\");\n\nfunction buildEditAllPage() {\n\n  clearContentHolders();\n\n  setTitle('Edit a album');\n\n  searchAlbumForm();\n}\n\nmodule.exports = buildEditAllPage;\n\n\n//# sourceURL=webpack://cd-manager/./src/pages/album/editAlbum.js?");

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

eval("const clearContentHolders = __webpack_require__(/*! ../../components/utils/clearHolders.js */ \"./src/components/utils/clearHolders.js\");\nconst setTitle = __webpack_require__(/*! ../../components/utils/setTitle.js */ \"./src/components/utils/setTitle.js\");\nconst getAlbumsHTML = __webpack_require__(/*! ../../../api/album/getAlbumsHTML.js */ \"./api/album/getAlbumsHTML.js\");\n\nfunction buildAlbumsAllPage() {\n\n  clearContentHolders();\n\n  setTitle('Overview of all albums in your collection');\n\n  getAlbumsHTML();\n}\n\nmodule.exports = buildAlbumsAllPage;\n\n\n//# sourceURL=webpack://cd-manager/./src/pages/album/viewAllAlbums.js?");

/***/ }),

/***/ "./src/pages/cd/addCD.js":
/*!*******************************!*\
  !*** ./src/pages/cd/addCD.js ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const clearContentHolders = __webpack_require__(/*! ../../components/utils/clearHolders.js */ \"./src/components/utils/clearHolders.js\");\nconst setTitle = __webpack_require__(/*! ../../components/utils/setTitle.js */ \"./src/components/utils/setTitle.js\");\nconst buildAddCDForm = __webpack_require__(/*! ../../components/forms/cd/addCD.js */ \"./src/components/forms/cd/addCD.js\");\n\nfunction buildCDsAddPage() {\n\n  clearContentHolders();\n\n  setTitle('Add a new CD to your collection');\n\n  buildAddCDForm();\n}\n\nmodule.exports = buildCDsAddPage;\n\n\n//# sourceURL=webpack://cd-manager/./src/pages/cd/addCD.js?");

/***/ }),

/***/ "./src/pages/cd/deleteCD.js":
/*!**********************************!*\
  !*** ./src/pages/cd/deleteCD.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { clearContentHolders, setTitle } = __webpack_require__(/*! ../../components/utils/index.js */ \"./src/components/utils/index.js\");\n\nfunction buildCDsDeletePage() {\n\n  clearContentHolders();\n\n  setTitle('Remove a CD from your collection');\n}\n\nmodule.exports = buildCDsDeletePage;\n\n\n//# sourceURL=webpack://cd-manager/./src/pages/cd/deleteCD.js?");

/***/ }),

/***/ "./src/pages/cd/editCD.js":
/*!********************************!*\
  !*** ./src/pages/cd/editCD.js ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { clearContentHolders, setTitle } = __webpack_require__(/*! ../../components/utils/index.js */ \"./src/components/utils/index.js\");\nconst { searchCDForm } = __webpack_require__(/*! ../../components/forms/cd/index.js */ \"./src/components/forms/cd/index.js\");\n\nfunction buildCDsEditPage() {\n\n  clearContentHolders();\n\n  setTitle('Edit a CD');\n\n  searchCDForm();\n\n}\n\nmodule.exports = buildCDsEditPage;\n\n\n//# sourceURL=webpack://cd-manager/./src/pages/cd/editCD.js?");

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

eval("const clearContentHolders = __webpack_require__(/*! ../../components/utils/clearHolders.js */ \"./src/components/utils/clearHolders.js\");\nconst setTitle = __webpack_require__(/*! ../../components/utils/setTitle.js */ \"./src/components/utils/setTitle.js\");\nconst getCDsHTML = __webpack_require__(/*! ../../../api/cd/getCDsHTML.js */ \"./api/cd/getCDsHTML.js\");\n\nfunction buildCDsAllPage() {\n\n  clearContentHolders();\n\n  setTitle('Overview of all CDs in your collection');\n\n  getCDsHTML();\n}\n\nmodule.exports = buildCDsAllPage;\n\n\n//# sourceURL=webpack://cd-manager/./src/pages/cd/viewAllCDs.js?");

/***/ }),

/***/ "./src/pages/homePage.js":
/*!*******************************!*\
  !*** ./src/pages/homePage.js ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { clearContentHolders, setTitle } = __webpack_require__(/*! ../components/utils/index.js */ \"./src/components/utils/index.js\");\n\n// Create the home page with components\nfunction buildHomePage() {\n\n  clearContentHolders();\n\n  setTitle('Organize your music');\n}\n\nmodule.exports = buildHomePage;\n\n\n//# sourceURL=webpack://cd-manager/./src/pages/homePage.js?");

/***/ }),

/***/ "./src/pages/profilePage.js":
/*!**********************************!*\
  !*** ./src/pages/profilePage.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { clearContentHolders, setTitle } = __webpack_require__(/*! ../components/utils/index.js */ \"./src/components/utils/index.js\");\n\n// Create the profile page with individual components\nfunction buildProfilePage() {\n\n  clearContentHolders();\n\n  setTitle('Your profile');\n}\n\nmodule.exports = buildProfilePage;\n\n\n//# sourceURL=webpack://cd-manager/./src/pages/profilePage.js?");

/***/ }),

/***/ "./src/pages/searchPage.js":
/*!*********************************!*\
  !*** ./src/pages/searchPage.js ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { clearContentHolders, setTitle } = __webpack_require__(/*! ../components/utils/index.js */ \"./src/components/utils/index.js\");\n\n// Create the search page with individual components\nfunction buildSearchPage() {\n\n  clearContentHolders();\n\n  setTitle('Search for Albums, CDs or tracks');\n}\n\nmodule.exports = buildSearchPage;\n\n\n//# sourceURL=webpack://cd-manager/./src/pages/searchPage.js?");

/***/ }),

/***/ "./src/pages/statisticsPage.js":
/*!*************************************!*\
  !*** ./src/pages/statisticsPage.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { clearContentHolders, setTitle } = __webpack_require__(/*! ../components/utils/index.js */ \"./src/components/utils/index.js\");\n\n// Create the statistics page with individual components\nfunction buildStatsPage() {\n\n  clearContentHolders();\n\n  setTitle('Statistics of your collection');\n}\n\nmodule.exports = buildStatsPage;\n\n\n//# sourceURL=webpack://cd-manager/./src/pages/statisticsPage.js?");

/***/ }),

/***/ "./src/pages/track/addTrack.js":
/*!*************************************!*\
  !*** ./src/pages/track/addTrack.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { clearContentHolders, setTitle } = __webpack_require__(/*! ../../components/utils/index.js */ \"./src/components/utils/index.js\");\nconst { buildAddTrackForm } = __webpack_require__(/*! ../../components/forms/track/index.js */ \"./src/components/forms/track/index.js\");\n\nfunction buildTracksAddPage() {\n\n  clearContentHolders();\n\n  setTitle('Add a new track to your collection');\n\n  buildAddTrackForm();\n}\n\nmodule.exports = buildTracksAddPage;\n\n\n//# sourceURL=webpack://cd-manager/./src/pages/track/addTrack.js?");

/***/ }),

/***/ "./src/pages/track/deleteTrack.js":
/*!****************************************!*\
  !*** ./src/pages/track/deleteTrack.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { clearContentHolders, setTitle } = __webpack_require__(/*! ../../components/utils/index.js */ \"./src/components/utils/index.js\");\n\nfunction buildTracksDeletePage() {\n\n  clearContentHolders();\n\n  setTitle('Remove a track from your collection');\n}\n\nmodule.exports = buildTracksDeletePage;\n\n\n//# sourceURL=webpack://cd-manager/./src/pages/track/deleteTrack.js?");

/***/ }),

/***/ "./src/pages/track/editTrack.js":
/*!**************************************!*\
  !*** ./src/pages/track/editTrack.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { clearContentHolders, setTitle } = __webpack_require__(/*! ../../components/utils/index.js */ \"./src/components/utils/index.js\");\nconst { searchTrackForm } = __webpack_require__(/*! ../../components/forms/track/index.js */ \"./src/components/forms/track/index.js\");\n\nfunction buildTracksEditPage() {\n\n  clearContentHolders();\n\n  setTitle('Edit a track');\n\n  searchTrackForm();\n}\n\nmodule.exports = buildTracksEditPage;\n\n\n//# sourceURL=webpack://cd-manager/./src/pages/track/editTrack.js?");

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

eval("const { clearContentHolders, setTitle } = __webpack_require__(/*! ../../components/utils/index.js */ \"./src/components/utils/index.js\");\nconst getTracksHTML = __webpack_require__(/*! ../../../api/track/getTracksHTML.js */ \"./api/track/getTracksHTML.js\");\n\nfunction buildTracksAllPage() {\n\n  clearContentHolders();\n\n  setTitle('Overview of all tracks in your collection');\n\n  getTracksHTML();\n}\n\nmodule.exports = buildTracksAllPage;\n\n\n//# sourceURL=webpack://cd-manager/./src/pages/track/viewAllTracks.js?");

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