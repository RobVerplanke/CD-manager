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
} = require('../index.js');

// Functions that build all the pages
const buildHomePage = require('../../pages/homePage.js');
const buildSearchPage = require('../../pages/searchPage.js');
const buildStatsPage = require('../../pages/statisticsPage.js');
const buildProfilePage = require('../../pages/profilePage.js');

// Albums
const {
  buildAlbumsAllPage,
  buildAlbumsAddPage,
  buildAlbumsEditPage,
  buildAlbumsDeletePage,
} = require('../../pages/album/index.js');

// CDs
const {
  buildCDsAllPage,
  buildCDsAddPage,
  buildCDsEditPage,
  buildCDsDeletePage,
} = require('../../pages/cd/index.js');

// Tracks
const {
  buildTracksAllPage,
  buildTracksAddPage,
  buildTracksEditPage,
  buildTracksDeletePage,
} = require('../../pages/track/index.js');

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
  ];

  // All corresponding build-page functions in order
  const buildFunctions = [
    buildHomePage,
    buildSearchPage,
    buildStatsPage,
    buildProfilePage,
    // Albums
    buildAlbumsAllPage,
    buildAlbumsAddPage,
    buildAlbumsEditPage,
    buildAlbumsDeletePage,
    // CDs
    buildCDsAllPage,
    buildCDsAddPage,
    buildCDsEditPage,
    buildCDsDeletePage,
    // Tracks
    buildTracksAllPage,
    buildTracksAddPage,
    buildTracksEditPage,
    buildTracksDeletePage,
  ];

  // Use both lists to add the event listeners
  addButtonEventListeners(homeButtons, buildFunctions);
}

module.exports = setNavEventListeners;
