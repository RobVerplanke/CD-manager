const { clearContentHolders, setTitle } = require('../../components/index.js');
const { getTracksHTML } = require('../../../api/index.js');

function buildTracksAllPage() {

  clearContentHolders();

  setTitle('Overview of all tracks in your collection');

  getTracksHTML();
}

module.exports = buildTracksAllPage;
