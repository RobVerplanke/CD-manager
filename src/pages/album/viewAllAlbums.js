const clearContentHolders = require('../../components/utils/clearHolders.js');
const setTitle = require('../../components/utils/setTitle.js');
const getAlbumsHTML = require('../../../api/album/getAlbumsHTML.js');

// Create the overview page after clearing the page from any other content
function buildAlbumsAllPage() {

  clearContentHolders();

  setTitle('Overview of all albums in your collection');

  getAlbumsHTML();
}

module.exports = buildAlbumsAllPage;
