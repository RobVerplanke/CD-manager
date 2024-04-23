const { clearContentHolders, setTitle, buildAddAlbumForm } = require('../../components/index.js');

function buildAddAllPage() {

  clearContentHolders();

  setTitle('Add a new album to your collection');

  buildAddAlbumForm();
}

module.exports = buildAddAllPage;
