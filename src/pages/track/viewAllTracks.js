const { clearContentHolders, setTitle } = require('../../components/utils/index.js');
const getItemsHTML = require('../../../api/getItemsHTML.js');

// Create the tracks overview page after clearing the page from any other content
function buildTracksAllPage() {

  clearContentHolders();

  setTitle('Overview of all tracks in your collection');

  getItemsHTML('track');
}

module.exports = buildTracksAllPage;
