const { setTitle } = require('../../components/index.js');
const renderAlbums = require('../../../api/albumsAll.js');
const clearContentHolder = require('../../utils/dom.js');

function buildAlbumsAllPage() {

  clearContentHolder();

  setTitle('Overview of all albums in your collection');

  renderAlbums();
}

module.exports = buildAlbumsAllPage;
