const { clearContentHolders, setTitle } = require('../../components/utils/index.js');
const { getAlbumsHTML } = require('../../../api/album/index.js');

function buildAlbumsAllPage() {

  clearContentHolders();

  setTitle('Overview of all albums in your collection');

  getAlbumsHTML();
}

module.exports = buildAlbumsAllPage;
