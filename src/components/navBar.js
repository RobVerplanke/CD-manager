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
const {
  buildAlbumsAllPage,
  buildAlbumsAddPage,
  buildAlbumsEditPage,
  buildAlbumsDeletePage,
} = require('../pages/albums/index.js');

// CDs
const {
  buildCDsAllPage,
  buildCDsAddPage,
  buildCDsEditPage,
  buildCDsDeletePage,
} = require('../pages/cds/index.js');

// Tracks
const {
  buildTracksAllPage,
  buildTracksAddPage,
  buildTracksEditPage,
  buildTracksDeletePage,
} = require('../pages/tracks/index.js');

// Iterate through each button in the navigation menu and link them to the corresponding build-function
function addButtonEventListeners(buttons, buildFunctions) {
  buttons.forEach((button, index) => {
    button.addEventListener('click', buildFunctions[index]);
  });
}

// Collect all buttons and build-functions to add eventlisteners on
function setNavEventListeners() {

  // All buttons in the navigation menu
  const homeButtons = [
    buttonHome, buttonSearch, buttonStats, buttonProfile,
    buttonAlbumsAll, buttonAlbumsAdd, buttonAlbumsEdit, buttonAlbumsDelete,
    buttonCDsAll, buttonCDsAdd, buttonCDsEdit, buttonCDsDelete,
    buttonTracksAll, buttonTracksAdd, buttonTracksEdit, buttonTracksDelete,
  ];

  // All corresponding build-page functions in order
  const buildFunctions = [
    buildHomePage, buildSearchPage, buildStatsPage, buildProfilePage,
    buildAlbumsAllPage, buildAlbumsAddPage, buildAlbumsEditPage, buildAlbumsDeletePage,
    buildCDsAllPage, buildCDsAddPage, buildCDsEditPage, buildCDsDeletePage,
    buildTracksAllPage, buildTracksAddPage, buildTracksEditPage, buildTracksDeletePage,
  ];

  // Use both lists to add the event listeners
  addButtonEventListeners(homeButtons, buildFunctions);
}

module.exports = setNavEventListeners;
