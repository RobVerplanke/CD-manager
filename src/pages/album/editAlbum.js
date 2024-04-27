const clearContentHolders = require('../../components/utils/clearHolders.js');
const setTitle = require('../../components/utils/setTitle.js');
const { searchAlbumForm } = require('../../components/forms/album/index.js');

function buildEditAllPage() {

  clearContentHolders();

  setTitle('Edit a album');

  searchAlbumForm();
}

module.exports = buildEditAllPage;
