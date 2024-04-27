const { clearContentHolders, setTitle } = require('../../components/utils/index.js');
const { buildAddTrackForm } = require('../../components/forms/track/index.js');

function buildTracksAddPage() {

  clearContentHolders();

  setTitle('Add a new track to your collection');

  buildAddTrackForm();
}

module.exports = buildTracksAddPage;
