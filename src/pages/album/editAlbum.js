const clearContentHolders = require('../../components/utils/clearHolders.js');
const setTitle = require('../../components/utils/setTitle.js');
const searchItem = require('../../components/forms/common/searchItem.js');

// Create the edit page after clearing the page from any other content
function buildEditAllPage() {

  clearContentHolders();

  setTitle('Edit a album');

  searchItem('album', 'edit');
}

module.exports = buildEditAllPage;
