const { clearContentHolders, setTitle } = require('../../components/index.js');

function buildTracksEditPage() {

  clearContentHolders();

  setTitle('Edit a track');
}

module.exports = buildTracksEditPage;
