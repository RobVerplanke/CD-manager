const clearContentHolders = require('../../components/utils/clearHolders.js');
const setTitle = require('../../components/utils/setTitle.js');
const buildAddAlbumForm = require('../../components/forms/album/addAlbum.js');

// Create the add page after clearing the page from any other content
function buildAddAllPage() {

  clearContentHolders();

  setTitle('Add a new album to your collection');

  buildAddAlbumForm();
}

module.exports = buildAddAllPage;
