const { clearContentHolders, setTitle } = require('../../components/utils/index.js');
const buildSearchItemForm = require('../../components/forms/searchItem.js');

// Create the delete page after clearing the page from any other content
function buildAlbumsDeletePage() {

  clearContentHolders();

  setTitle('Remove a album from your collection');

  buildSearchItemForm('album', 'delete');
}

module.exports = buildAlbumsDeletePage;
