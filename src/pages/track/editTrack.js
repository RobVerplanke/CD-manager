const { clearContentHolders, setTitle } = require('../../components/utils/index.js');
const { searchTrackForm } = require('../../components/forms/track/index.js');

function buildTracksEditPage() {

  clearContentHolders();

  setTitle('Edit a track');

  searchTrackForm();
}

module.exports = buildTracksEditPage;
