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

/***/ "./src/controller/Controller.js":
/*!**************************************!*\
  !*** ./src/controller/Controller.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/* eslint-disable class-methods-use-this */\n\nconst validations = __webpack_require__(/*! ../utils/validations.js */ \"./src/utils/validations.js\");\n\nclass Controller {\n  constructor() {\n    this.albums = []; // Store album when applicable, contains multiple CD's\n    this.cds = []; // Store each individual CD so they can be linked to albums as well as to tracks\n    this.tracks = []; // Store tracks individually because they can occur on multiple CD's or albums\n  }\n\n  // Add a album to the list of owned albums\n  addAlbumToCollection(album) {\n    validations.instanceOfAlbum(album);\n\n    this.albums.push(album);\n  }\n\n  // Add a CD to the list of owned cds\n  addCDToCollection(cd) {\n    validations.instanceOfCD(cd);\n\n    this.cds.push(cd);\n  }\n\n  // Add a track to the list of owned tracks\n  addTrackToCollection(track) {\n    validations.instanceOfTrack(track);\n\n    this.tracks.push(track);\n  }\n\n  // Add a CD to a specific album\n  addCDToAlbum(album, cd) {\n    validations.instanceOfAlbum(album);\n    validations.instanceOfCD(cd);\n\n    album.addCD(cd);\n  }\n\n  // Add a album, on which the cd occurs on, to the cds album list\n  addAlbumToCD(cd, album) {\n    validations.instanceOfCD(cd);\n    validations.instanceOfAlbum(album);\n\n    cd.addAlbum(album);\n  }\n\n  // Add a track to a specific CD's track list\n  addTrackToCD(cd, track) {\n    validations.instanceOfCD(cd);\n    validations.instanceOfTrack(track);\n\n    cd.addTrack(track);\n  }\n\n  // Add a cd to a specific track's cd list\n  addCDToTrack(track, cd) {\n    validations.instanceOfTrack(track);\n    validations.instanceOfCD(cd);\n\n    track.addCD(cd);\n  }\n\n  // Add collaborator to a ablum\n  addCollabToAlbum(album, collab) {\n    validations.instanceOfAlbum(album);\n    validations.valueOfArtist(collab);\n\n    album.addCollaborator(collab);\n  }\n\n  // Add collaborator to a CD\n  addCollabToCD(cd, collab) {\n    validations.instanceOfCD(cd);\n    validations.valueOfArtist(collab);\n\n    cd.addCollaborator(collab);\n  }\n\n  // Add collaborator to a track\n  addCollabToTrack(track, collab) {\n    validations.instanceOfTrack(track);\n    validations.valueOfArtist(collab);\n\n    track.addCollaborator(collab);\n  }\n\n  // Get a overview of all ablums in the collection\n  getAlbums() {\n    return this.albums;\n  }\n\n  // Get a overview of all CD's in the collection\n  getCDs() {\n    return this.cds;\n  }\n\n  // Get a overview of all tracks in the collection\n  getTracks() {\n    return this.tracks;\n  }\n\n  // Get a complete album object\n  getFullAlbum(album) {\n    album.getFullObject();\n  }\n\n  // Get a complete CD object\n  getFullCD(cd) {\n    cd.getFullObject();\n  }\n\n  // Get a complete track object\n  getFullTrack(track) {\n    track.getFullObject();\n  }\n\n  // Get a list of all the CD's of a specific album\n  getCDsFromAlbum(album) {\n    validations.instanceOfAlbum(album);\n\n    return album.getCDs();\n  }\n\n  // Get a list of all the trackss of a specific CD\n  getTracksFromCD(cd) {\n    validations.instanceOfCD(cd);\n\n    return cd.getTracks();\n  }\n\n  // Get a list of all the albums where a specific CD occurs in\n  getAlbumsOfCD(cd) {\n    validations.instanceOfCD(cd);\n\n    return cd.getAlbums();\n  }\n\n  // Get a list of all CD's where a specific track occurs in\n  getCDsOfTrack(track) {\n    validations.instanceOfTrack(track);\n\n    return track.getCDs();\n  }\n\n  // Set properties of the selected album\n  setAlbumProperties(album, title, artist, collaborators, label, year) {\n\n    // Validate arguments\n    validations.instanceOfAlbum(album);\n    validations.valueOfTitle(title);\n    validations.valueOfArtist(artist);\n    validations.valueOfCollaborators(collaborators);\n    validations.valueOfLabel(label);\n    validations.valueOfYear(year);\n\n    // Send changes to the corresponding album\n    album.setProperties(title, artist, collaborators, label, year);\n  }\n\n  // Set properties of the selected CD\n  setCDProperties(cd, title, artist, collaborators, label, year) {\n\n    // Validate arguments\n    validations.instanceOfCD(cd);\n    validations.valueOfTitle(title);\n    validations.valueOfArtist(artist);\n    validations.valueOfCollaborators(collaborators);\n    validations.valueOfLabel(label);\n    validations.valueOfYear(year);\n\n    // Send changes to the corresponding CD\n    cd.setProperties(title, artist, collaborators, label, year);\n  }\n\n  // Set properties of the selected track\n  setTrackProperties(track, title, artist, collaborators, label, year, length) {\n\n    // Validate arguments\n    validations.instanceOfTrack(track);\n    validations.valueOfTitle(title);\n    validations.valueOfArtist(artist);\n    validations.valueOfCollaborators(collaborators);\n    validations.valueOfLabel(label);\n    validations.valueOfYear(year);\n    validations.valueOfLength(length);\n\n    // Set properties of the selected track\n    track.setProperties(title, artist, collaborators, label, year, length);\n  }\n\n  // Removes a specific album from the collection\n  removeAlbumFromCollection(album) {\n    validations.instanceOfAlbum(album);\n\n    const index = this.albums.indexOf(album);\n    if (index !== -1) {\n      this.albums.splice(index, 1);\n    }\n  }\n\n  // Removes a specific CD from the collection\n  removeCDFromCollection(cd) {\n    validations.instanceOfCD(cd);\n\n    const index = this.cds.indexOf(cd);\n    if (index !== -1) {\n      this.cds.splice(index, 1);\n    }\n  }\n\n  // Removes a specific track from the collection\n  removeTrackFromCollection(track) {\n    validations.instanceOfTrack(track);\n\n    const index = this.tracks.indexOf(track);\n    if (index !== -1) {\n      this.tracks.splice(index, 1);\n    }\n  }\n\n  // Removes a specific CD from a album\n  removeCDFromAlbum(album, cd) {\n    validations.instanceOfAlbum(album);\n    validations.instanceOfCD(cd);\n\n    album.removeCD(cd);\n  }\n\n  // Removes a specific album from a CD\n  removeAlbumFromCD(cd, album) {\n    validations.instanceOfCD(cd);\n    validations.instanceOfAlbum(album);\n\n    cd.removeAlbum(album);\n  }\n\n  // Removes a specific track from a CD\n  removeTrackFromCD(cd, track) {\n    validations.instanceOfCD(cd);\n    validations.instanceOfTrack(track);\n\n    cd.removeTrack(track);\n  }\n\n  // Removes a specific CD from a track\n  removeCDFromTrack(track, cd) {\n    validations.instanceOfTrack(track);\n    validations.instanceOfCD(cd);\n\n    track.removeCD(cd);\n  }\n\n  // Removes a collaborator from a album\n  removeCollabFromAlbum(album, collab) {\n    validations.instanceOfAlbum(album);\n    validations.valueOfArtist(collab);\n\n    album.removeCollaborator(collab);\n  }\n\n  // Removes a collaborator from a CD\n  removeCollabFromCD(cd, collab) {\n    validations.instanceOfCD(cd);\n    validations.valueOfArtist(collab);\n\n    cd.removeCollaborator(collab);\n  }\n\n  // Removes a collaborator from a track\n  removeCollabFromTrack(track, collab) {\n    validations.instanceOfTrack(track);\n    validations.valueOfArtist(collab);\n\n    track.removeCollaborator(collab);\n  }\n}\n\nmodule.exports = Controller;\n\n\n//# sourceURL=webpack://cd-manager/./src/controller/Controller.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const Controller = __webpack_require__(/*! ./controller/Controller.js */ \"./src/controller/Controller.js\");\nconst User = __webpack_require__(/*! ./modules/User.js */ \"./src/modules/User.js\");\n\n// Test account\nconst _USERNAME = 'admin';\n\n// Create a new user with acces to all the controller-methods\nconst controller = new Controller();\nconst user = new User(controller, _USERNAME);\n\nconsole.log('test webpack', user);\n\n\n//# sourceURL=webpack://cd-manager/./src/index.js?");

/***/ }),

/***/ "./src/modules/Album.js":
/*!******************************!*\
  !*** ./src/modules/Album.js ***!
  \******************************/
/***/ ((module) => {

eval("class Album {\n  constructor() {\n    this.title = ''; // Title of the album\n    this.artist = ''; // Artist who released the album\n    this.collaborators = []; // Other artists\n    this.label = ''; // Album-label when applicable\n    this.year = null; // Release year\n    this.cds = []; // CD's in the album\n  }\n\n  // Sends the complete object\n  getFullObject() {\n    return {\n      title: this.title,\n      artist: this.artist,\n      collaborators: this.collaborators,\n      label: this.label,\n      year: this.year,\n      cds: this.cds,\n    };\n  }\n\n  // Let the user be able to edit the properties of this album\n  setProperties(title, artist, collaborators, label, year) {\n    this.title = title;\n    this.artist = artist;\n    this.collaborators = collaborators;\n    this.label = label;\n    this.year = year;\n  }\n\n  // Add a CD to current album\n  addCD(cd) {\n    this.cds.push(cd);\n  }\n\n  // Add collaborators when applicable\n  addCollaborator(collab) {\n    this.collaborators.push(collab);\n  }\n\n  // A list of all the CD's in this album\n  getCDs() {\n    return this.cds;\n  }\n\n  // A list of all other artists who also worked on this album\n  getCollaborators() {\n    return this.collaborators;\n  }\n\n  // Remove a CD from the current album\n  removeCD(cd) {\n    const index = this.cds.indexOf(cd);\n    if (index !== -1) {\n      this.cds.splice(index, 1);\n    }\n  }\n\n  // Remove a collaborators from the collabs-list\n  removeCollaborator(collab) {\n    const index = this.collaborators.indexOf(collab);\n    if (index !== -1) {\n      this.collaborators.splice(index, 1);\n    }\n  }\n\n}\n\nmodule.exports = Album;\n\n\n//# sourceURL=webpack://cd-manager/./src/modules/Album.js?");

/***/ }),

/***/ "./src/modules/CD.js":
/*!***************************!*\
  !*** ./src/modules/CD.js ***!
  \***************************/
/***/ ((module) => {

eval("class CD {\n  constructor(title, artist) {\n    this.title = title; // Title of the CD\n    this.artist = artist; // Name of artist who produced the CD\n    this.collaborators = []; // Other artists\n    this.albums = []; // Album(s) that contain this CD\n    this.label = ''; // CD-label when applicable\n    this.year = null; // Release year\n    this.tracks = []; // Tracks on the CD\n  }\n\n  // Sends the complete object\n  getFullObject() {\n    return {\n      title: this.title,\n      artist: this.artist,\n      collaborators: this.collaborators,\n      albums: this.albums,\n      label: this.label,\n      year: this.year,\n      tracks: this.tracks,\n    };\n  }\n\n  // Let the user be able to edit the properties of this CD\n  setProperties(title, artist, collaborators, label, year) {\n    this.title = title;\n    this.artist = artist;\n    this.collaborators = collaborators;\n    this.label = label;\n    this.year = year;\n  }\n\n  // Add a track to the tracklist\n  addTrack(track) {\n    this.tracks.push(track);\n  }\n\n  // Add a album that contains this CD to the albums list\n  addAlbum(album) {\n    this.albums.push(album);\n  }\n\n  // Add collaborators when applicable\n  addCollaborator(collab) {\n    this.collaborators.push(collab);\n  }\n\n  // A list of all the tracks on this CD\n  getTracks() {\n    return this.tracks;\n  }\n\n  // A list of all albums where this CD occurs in\n  getAlbums() {\n    return this.albums;\n  }\n\n  // A list of all other artists who also worked on this CD\n  getCollaborators() {\n    return this.collaborators;\n  }\n\n  // Remove a track from the tracklist\n  removeTrack(track) {\n    const index = this.tracks.indexOf(track);\n    if (index !== -1) {\n      this.tracks.splice(index, 1);\n    }\n  }\n\n  // Remove a album from the albums that contain this CD\n  removeAlbum(album) {\n    const index = this.albums.indexOf(album);\n    if (index !== -1) {\n      this.albums.splice(index, 1);\n    }\n  }\n\n  // Remove a collaborators from the collabs-list\n  removeCollaborator(collab) {\n    const index = this.collaborators.indexOf(collab);\n    if (index !== -1) {\n      this.collaborators.splice(index, 1);\n    }\n  }\n}\n\nmodule.exports = CD;\n\n\n//# sourceURL=webpack://cd-manager/./src/modules/CD.js?");

/***/ }),

/***/ "./src/modules/Track.js":
/*!******************************!*\
  !*** ./src/modules/Track.js ***!
  \******************************/
/***/ ((module) => {

eval("class Track {\n  constructor(title, artist) {\n    this.title = title; // Title of the track\n    this.artist = artist; // Name of artist who produced the track\n    this.collaborators = []; // Other artists\n    this.cds = []; // CD(s) on which the track occurs\n    this.label = ''; // Single-label when applicable\n    this.year = null; // Release year\n    this.length = null; // Total length of track\n  }\n\n  // Sends the complete object\n  getFullObject() {\n    return {\n      title: this.title,\n      artist: this.artist,\n      collaborators: this.collaborators,\n      cds: this.cds,\n      label: this.label,\n      year: this.year,\n      length: this.length,\n    };\n  }\n\n  // Let the user be able to edit the properties of this track\n  setProperties(title, artist, collaborators, label, year, length) {\n    this.title = title;\n    this.artist = artist;\n    this.collaborators = collaborators;\n    this.label = label;\n    this.year = year;\n    this.length = length;\n  }\n\n  // Add a cd, on which this track occurs, to the cds list\n  addCD(cd) {\n    this.cds.push(cd);\n  }\n\n  // Add collaborators when applicable\n  addCollaborator(collab) {\n    this.collaborators.push(collab);\n  }\n\n  // A list of all CD's this track occurs in\n  getCDs() {\n    return this.cds;\n  }\n\n  // A list of all other artists who also worked on this track\n  getCollaborators() {\n    return this.collaborators;\n  }\n\n  // Remove a cd, on which this track occurs, from the cds list\n  removeCD(cd) {\n    const index = this.cds.indexOf(cd);\n    if (index !== -1) {\n      this.cds.splice(index, 1);\n    }\n  }\n\n  // Remove a collaborators from the collabs-list\n  removeCollaborator(collab) {\n    const index = this.collaborators.indexOf(collab);\n    if (index !== -1) {\n      this.collaborators.splice(index, 1);\n    }\n  }\n}\n\nmodule.exports = Track;\n\n\n//# sourceURL=webpack://cd-manager/./src/modules/Track.js?");

/***/ }),

/***/ "./src/modules/User.js":
/*!*****************************!*\
  !*** ./src/modules/User.js ***!
  \*****************************/
/***/ ((module) => {

eval("class User {\n  constructor(controller, username) {\n    this.id = null;\n    this.controller = controller;\n    this.username = username;\n  }\n}\n\nmodule.exports = User;\n\n\n//# sourceURL=webpack://cd-manager/./src/modules/User.js?");

/***/ }),

/***/ "./src/utils/validations.js":
/*!**********************************!*\
  !*** ./src/utils/validations.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Album = __webpack_require__(/*! ../modules/Album.js */ \"./src/modules/Album.js\");\nconst CD = __webpack_require__(/*! ../modules/CD.js */ \"./src/modules/CD.js\");\nconst Track = __webpack_require__(/*! ../modules/Track.js */ \"./src/modules/Track.js\");\n\n// Check if the given album is a instance of the Album-class\nfunction instanceOfAlbum(album) {\n  if (!(album instanceof Album)) throw new Error('Album is not a Album-instance');\n}\n\n// Check if the given CD is a instance of the CD-class\nfunction instanceOfCD(cd) {\n  if (!(cd instanceof CD)) throw new Error('CD is not a CD-instance');\n}\n\n// Check if the given track is a instance of the Track-class\nfunction instanceOfTrack(track) {\n  if (!(track instanceof Track)) throw new Error('Track is not a Track-instance');\n}\n\n// validate title, artist, label, year, length\n\n// Check if the given artist name is a valid value\nfunction valueOfTitle(title) {\n\n  // Title is not a string\n  if (typeof title !== 'string') throw new Error('Title is not a string');\n\n  // Title is longer than prefered length\n  if (title.length > 100) throw new Error('Title is too long');\n}\n\nfunction valueOfArtist(artist) {\n\n}\n\nfunction valueOfCollaborators(collabs) {\n\n}\n\nfunction valueOfLabel(label) {\n\n}\n\nfunction valueOfYear(year) {\n\n}\n\nfunction valueOfLength(length) {\n\n}\n\nmodule.exports = {\n  instanceOfAlbum,\n  instanceOfCD,\n  instanceOfTrack,\n  valueOfTitle,\n  valueOfArtist,\n  valueOfCollaborators,\n  valueOfLabel,\n  valueOfYear,\n  valueOfLength,\n};\n\n\n//# sourceURL=webpack://cd-manager/./src/utils/validations.js?");

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