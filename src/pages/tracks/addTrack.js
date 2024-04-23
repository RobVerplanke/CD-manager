const { clearContentHolders, setTitle, buildAddTrackForm } = require('../../components/index.js');

function buildTracksAddPage() {

  clearContentHolders();

  setTitle('Add a new track to your collection');

  buildAddTrackForm();
}

module.exports = buildTracksAddPage;
