const setTitle = require('./utils/setTitleText.js');
const clearContentHolders = require('./utils/clearHolders.js');
const buildAddAlbumForm = require('./forms/album/addAlbum.js');
const buildAddCDForm = require('./forms/cd/addCD.js');
const buildAddTrackForm = require('./forms/track/addTrack.js');

const {
  // Holders
  pageHolder,
  titleHolder,
  contentHolder,
  // Buttons
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
} = require('./utils/commonElements.js');

module.exports = {
  // Holders
  pageHolder,
  titleHolder,
  contentHolder,
  // Buttons
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
  clearContentHolders,
  buildAddAlbumForm,
  buildAddCDForm,
  buildAddTrackForm,
};
