const { clearContentHolders, setTitle } = require('../../components/utils/index.js');
const getTracksHTML = require('../../../api/track/getTracksHTML.js');

// Create the tracks overview page after clearing the page from any other content
function buildTracksAllPage() {

  clearContentHolders();

  setTitle('Overview of all tracks in your collection');

  getTracksHTML();
}

module.exports = buildTracksAllPage;
