const { clearContentHolders, setTitle } = require('../../components/utils/index.js');
const searchItem = require('../../components/forms/common/searchItem.js');

// Create the tracks delete page after clearing the page from any other content
function buildTracksDeletePage() {

  clearContentHolders();

  setTitle('Remove a track from your collection');

  searchItem('track', 'delete');
}

module.exports = buildTracksDeletePage;
