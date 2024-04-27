const { clearContentHolders, setTitle } = require('../../components/utils/index.js');
const { getTracksHTML } = require('../../../api/track/index.js');

function buildTracksAllPage() {

  clearContentHolders();

  setTitle('Overview of all tracks in your collection');

  getTracksHTML();
}

module.exports = buildTracksAllPage;
