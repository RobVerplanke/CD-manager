const getAlbumsHTML = require('./album/getAlbumsHTML.js');
const getAlbumByID = require('./album/getAlbumByID.js');
const getAlbumTitles = require('./album/getAlbumsTitles.js');
const addAlbumToCollection = require('./album/addAlbum.js');
const getCDsHTML = require('./cd/cdsHTML.js');
const getCDByID = require('./cd/getCDByID.js');
const getCDTitles = require('./cd/CDsTitles.js');
const addCDToCollection = require('./album/addAlbum.js');
const getTracksHTML = require('./track/tracksHTML.js');
const getTrackbyID = require('./track/getTrackByID.js');
const updateAlbum = require('./album/updateAlbum.js');
const updateCD = require('./cd/updateCD.js');
const updateTrack = require('./track/updateTrack.js');

module.exports = {
  getAlbumsHTML,
  getAlbumByID,
  getAlbumTitles,
  addAlbumToCollection,
  getCDsHTML,
  getCDByID,
  getCDTitles,
  addCDToCollection,
  getTracksHTML,
  getTrackbyID,
  updateAlbum,
  updateCD,
  updateTrack,
};
