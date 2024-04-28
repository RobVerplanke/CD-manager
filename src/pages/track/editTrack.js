const { clearContentHolders, setTitle } = require('../../components/utils/index.js');
const { searchTrackForm } = require('../../components/forms/track/index.js');

// Create the tracks edit page after clearing the page from any other content
function buildTracksEditPage() {

  clearContentHolders();

  setTitle('Edit a track');

  searchTrackForm('edit');
}

module.exports = buildTracksEditPage;
