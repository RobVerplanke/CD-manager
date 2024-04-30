const { clearContentHolders, setTitle } = require('../../components/utils/index.js');
const getItemsHTML = require('../../../api/getItemsHTML.js');

// Create the overview page after clearing the page from any other content
function buildCDsAllPage() {

  clearContentHolders();

  setTitle('Overview of all CDs in your collection');

  getItemsHTML('cd');
}

module.exports = buildCDsAllPage;
