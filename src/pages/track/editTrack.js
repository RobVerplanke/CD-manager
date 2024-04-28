const { clearContentHolders, setTitle } = require('../../components/utils/index.js');
const searchItem = require('../../components/forms/common/searchItem.js');

// Create the tracks edit page after clearing the page from any other content
function buildTracksEditPage() {

  clearContentHolders();

  setTitle('Edit a track');

  searchItem('track', 'edit');
}

module.exports = buildTracksEditPage;
