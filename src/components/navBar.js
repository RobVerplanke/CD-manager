const {
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
} = require('./index.js');

const buildHomePage = require('../pages/home.js');
const buildSearchPage = require('../pages/search.js');
const buildStatsPage = require('../pages/statistics.js');
const buildProfilePage = require('../pages/profile.js');

const {
  buildAlbumsAllPage,
  buildAlbumsAddPage,
  buildAlbumsEditPage,
  buildAlbumsDeletePage,
} = require('../pages/albums.js');

const {
  buildCDsAllPage,
  buildCDsAddPage,
  buildCDsEditPage,
  buildCDsDeletePage,
} = require('../pages/cds.js');

const {
  buildTracksAllPage,
  buildTracksAddPage,
  buildTracksEditPage,
  buildTracksDeletePage,
} = require('../pages/tracks.js');

// When clicked on a navigation button, build the corresponding page in the content holder
function setNavEventListeners() {

  buttonHome.addEventListener('click', () => buildHomePage()); // Home
  buttonSearch.addEventListener('click', () => buildSearchPage()); // Search
  buttonStats.addEventListener('click', () => buildStatsPage()); // Statistics
  buttonProfile.addEventListener('click', () => buildProfilePage()); // Statistics

  // Albums
  buttonAlbumsAll.addEventListener('click', () => buildAlbumsAllPage());
  buttonAlbumsAdd.addEventListener('click', () => buildAlbumsAddPage());
  buttonAlbumsEdit.addEventListener('click', () => buildAlbumsEditPage());
  buttonAlbumsDelete.addEventListener('click', () => buildAlbumsDeletePage());

  // CDs
  buttonCDsAll.addEventListener('click', () => buildCDsAllPage());
  buttonCDsAdd.addEventListener('click', () => buildCDsAddPage());
  buttonCDsEdit.addEventListener('click', () => buildCDsEditPage());
  buttonCDsDelete.addEventListener('click', () => buildCDsDeletePage());

  // Tracks
  buttonTracksAll.addEventListener('click', () => buildTracksAllPage());
  buttonTracksAdd.addEventListener('click', () => buildTracksAddPage());
  buttonTracksEdit.addEventListener('click', () => buildTracksEditPage());
  buttonTracksDelete.addEventListener('click', () => buildTracksDeletePage());
}

module.exports = setNavEventListeners;
