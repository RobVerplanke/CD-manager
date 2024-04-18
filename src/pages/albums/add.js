const { setTitle, buildAddAlbumForm } = require('../../components/index.js');
const clearContentHolder = require('../../utils/dom.js');

function buildAddAllPage() {

  clearContentHolder();

  setTitle('Add a new album to your collection');

  buildAddAlbumForm();
}

module.exports = buildAddAllPage;
