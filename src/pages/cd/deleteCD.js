const { clearContentHolders, setTitle } = require('../../components/utils/index.js');
const searchItem = require('../../components/forms/common/searchItem.js');

// Create the delete page after clearing the page from any other content
function buildCDsDeletePage() {

  clearContentHolders();

  setTitle('Remove a CD from your collection');

  searchItem('cd', 'delete');
}

module.exports = buildCDsDeletePage;
