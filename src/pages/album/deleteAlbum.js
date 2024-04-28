const { clearContentHolders, setTitle } = require('../../components/utils/index.js');
const searchItem = require('../../components/forms/common/searchItem.js');

// Create the delete page after clearing the page from any other content
function buildDeletePage() {

  clearContentHolders();

  setTitle('Remove a album from your collection');

  searchItem('album', 'delete');
}

module.exports = buildDeletePage;
