const { setTitle } = require('../../components/index.js');
const clearContentHolder = require('../../utils/dom.js');

function buildTracksDeletePage() {

  clearContentHolder();

  setTitle('Remove a track from your collection');
}

module.exports = buildTracksDeletePage;
