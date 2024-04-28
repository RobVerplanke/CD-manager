const clearContentHolders = require('../../components/utils/clearHolders.js');
const setTitle = require('../../components/utils/setTitle.js');
const { searchAlbumForm } = require('../../components/forms/album/index.js');

// Create the edit page after clearing the page from any other content
function buildEditAllPage() {

  clearContentHolders();

  setTitle('Edit a album');

  searchAlbumForm();
}

module.exports = buildEditAllPage;
