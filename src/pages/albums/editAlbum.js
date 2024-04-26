const { clearContentHolders, setTitle } = require('../../components/index.js');
const searchCDForm = require('../../components/forms/album/editAlbumSearch.js');

function buildEditAllPage() {

  clearContentHolders();

  setTitle('Edit a album');

  searchCDForm();
}

module.exports = buildEditAllPage;
