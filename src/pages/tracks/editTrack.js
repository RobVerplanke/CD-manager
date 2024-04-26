const { clearContentHolders, setTitle } = require('../../components/index.js');
const searchTrackForm = require('../../components/forms/track/editTrackSearch.js');

function buildTracksEditPage() {

  clearContentHolders();

  setTitle('Edit a track');

  searchTrackForm();
}

module.exports = buildTracksEditPage;
