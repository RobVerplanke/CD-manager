const { clearContentHolders, setTitle } = require('../../components/utils/index.js');
const getItemsHTML = require('../../../api/getItemsHTML.js');

// Create the overview page after clearing the page from any other content
function buildAlbumsAllPage() {

  clearContentHolders();

  setTitle('Overview of all albums in your collection');

  getItemsHTML('album');
}

module.exports = buildAlbumsAllPage;
