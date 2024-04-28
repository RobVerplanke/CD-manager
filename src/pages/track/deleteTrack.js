const { clearContentHolders, setTitle } = require('../../components/utils/index.js');
const { searchTrackForm } = require('../../components/forms/track/index.js');

// Create the tracks delete page after clearing the page from any other content
function buildTracksDeletePage() {

  clearContentHolders();

  setTitle('Remove a track from your collection');

  searchTrackForm('delete');
}

module.exports = buildTracksDeletePage;
