const getAlbumsHTML = require('./album/getAlbumsHTML.js');
const getCDsHTML = require('./cd/cdsHTML.js');
const getTracksHTML = require('./track/tracksHTML.js');
const getAlbumTitles = require('./album/getAlbumsTitles.js');
const getCDTitles = require('./cd/CDsTitles.js');
const addAlbumToCollection = require('./album/addAlbum.js');
const addCDToCollection = require('./album/addAlbum.js');

module.exports = {
  getAlbumsHTML,
  getCDsHTML,
  getTracksHTML,
  getAlbumTitles,
  getCDTitles,
  addAlbumToCollection,
  addCDToCollection,
};
