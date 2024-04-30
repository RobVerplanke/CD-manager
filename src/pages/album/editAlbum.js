const { clearContentHolders, setTitle } = require('../../components/utils/index.js');
const buildSearchItemForm = require('../../components/forms/searchItem.js');

// Create the edit page after clearing the page from any other content
function buildAlbumsEditPage() {

  clearContentHolders();

  setTitle('Edit a album');

  buildSearchItemForm('album', 'edit');
}

module.exports = buildAlbumsEditPage;
