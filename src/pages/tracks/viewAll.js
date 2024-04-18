const { setTitle } = require('../../components/index.js');
const renderTracks = require('../../../api/tracksAll.js');
const clearContentHolder = require('../../utils/dom.js');

function buildTracksAllPage() {

  clearContentHolder();

  setTitle('Overview of all tracks in your collection');

  renderTracks();
}

module.exports = buildTracksAllPage;
