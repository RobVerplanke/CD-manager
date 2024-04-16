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

// Functions that build all the pages
const buildHomePage = require('../pages/home.js');
const buildSearchPage = require('../pages/search.js');
const buildStatsPage = require('../pages/statistics.js');
const buildProfilePage = require('../pages/profile.js');

// Albums
const buildAlbumsAllPage = require('../pages/albums/viewAll.js');
const buildAlbumsAddPage = require('../pages/albums/add.js');
const buildAlbumsEditPage = require('../pages/albums/edit.js');
const buildAlbumsDeletePage = require('../pages/albums/delete.js');

// CDs
const buildCDsAllPage = require('../pages/cds/viewAll.js');
const buildCDsAddPage = require('../pages/cds/add.js');
const buildCDsEditPage = require('../pages/cds/edit.js');
const buildCDsDeletePage = require('../pages/cds/delete.js');

// Tracks
const buildTracksAllPage = require('../pages/tracks/viewAll.js');
const buildTracksAddPage = require('../pages/tracks/add.js');
const buildTracksEditPage = require('../pages/tracks/edit.js');
const buildTracksDeletePage = require('../pages/tracks/delete.js');

// When clicked on a navigation button, build the corresponding page in the content holder
function setNavEventListeners() {

  buttonHome.addEventListener('click', () => buildHomePage()); // Home
  buttonSearch.addEventListener('click', () => buildSearchPage()); // Search
  buttonStats.addEventListener('click', () => buildStatsPage()); // Statistics
  buttonProfile.addEventListener('click', () => buildProfilePage()); // Profile

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
