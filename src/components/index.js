const setTitle = require('./titleHolder.js');
const buildAddAlbumForm = require('./forms/addAlbum.js');
const buildAddCDForm = require('./forms/addCD.js');
const buildAddTrackForm = require('./forms/addTrack.js');

const {
  pageHolder,
  titleHolder,
  contentHolder,
  buttonHome,
  buttonSearch,
  buttonStats,
  buttonProfile,
  // Albums
  buttonAlbumsAll,
  buttonAlbumsAdd,
  buttonAlbumsEdit,
  buttonAlbumsDelete,
  // CDs
  buttonCDsAll,
  buttonCDsAdd,
  buttonCDsEdit,
  buttonCDsDelete,
  // Tracks
  buttonTracksAll,
  buttonTracksAdd,
  buttonTracksEdit,
  buttonTracksDelete,
} = require('./commonElements.js');


module.exports = {
  pageHolder,
  titleHolder,
  contentHolder,
  buttonHome,
  buttonSearch,
  buttonStats,
  buttonProfile,
  // Albums
  buttonAlbumsAll,
  buttonAlbumsAdd,
  buttonAlbumsEdit,
  buttonAlbumsDelete,
  // CDs
  buttonCDsAll,
  buttonCDsAdd,
  buttonCDsEdit,
  buttonCDsDelete,
  // Tracks
  buttonTracksAll,
  buttonTracksAdd,
  buttonTracksEdit,
  buttonTracksDelete,
  setTitle,
  buildAddAlbumForm,
  buildAddCDForm,
  buildAddTrackForm,
};
