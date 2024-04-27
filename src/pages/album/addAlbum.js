const { clearContentHolders, setTitle } = require('../../components/utils/index.js');
const { buildAddAlbumForm } = require('../../components/forms/album/index.js');

function buildAddAllPage() {

  clearContentHolders();

  setTitle('Add a new album to your collection');

  buildAddAlbumForm();
}

module.exports = buildAddAllPage;
