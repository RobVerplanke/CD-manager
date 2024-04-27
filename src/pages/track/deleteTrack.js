const { clearContentHolders, setTitle } = require('../../components/utils/index.js');

function buildTracksDeletePage() {

  clearContentHolders();

  setTitle('Remove a track from your collection');
}

module.exports = buildTracksDeletePage;
