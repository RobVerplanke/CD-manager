const { clearContentHolders, setTitle } = require('../../components/index.js');
const { getAlbumsHTML } = require('../../../api/index.js');

function buildAlbumsAllPage() {

  clearContentHolders();

  setTitle('Overview of all albums in your collection');

  getAlbumsHTML();
}

module.exports = buildAlbumsAllPage;
