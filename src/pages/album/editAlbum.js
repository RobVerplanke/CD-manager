const { clearContentHolders, setTitle } = require('../../components/utils/index.js');
const { searchAlbumForm } = require('../../components/forms/album/index.js');

function buildEditAllPage() {

  clearContentHolders();

  setTitle('Edit a album');

  searchAlbumForm();
}

module.exports = buildEditAllPage;
