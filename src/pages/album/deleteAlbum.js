const { clearContentHolders, setTitle } = require('../../components/utils/index.js');
const { searchAlbumForm } = require('../../components/forms/album/index.js');

// Create the delete page after clearing the page from any other content
function buildDeletePage() {

  clearContentHolders();

  setTitle('Remove a album from your collection');

  searchAlbumForm('delete');
}

module.exports = buildDeletePage;
