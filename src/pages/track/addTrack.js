const { clearContentHolders, setTitle } = require('../../components/utils/index.js');
const { buildAddTrackForm } = require('../../components/forms/track/index.js');

// Create the tracks add page after clearing the page from any other content
function buildTracksAddPage() {

  clearContentHolders();

  setTitle('Add a new track to your collection');

  buildAddTrackForm();
}

module.exports = buildTracksAddPage;
