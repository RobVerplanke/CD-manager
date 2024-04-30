const { clearContentHolders, setTitle } = require('../../components/utils/index.js');
const buildAddItemForm = require('../../components/forms/addItem.js');

// Create the add page after clearing the page from any other content
function buildAlbumsAddPage() {

  clearContentHolders();

  setTitle('Add a new album to your collection');

  buildAddItemForm('album');
}

module.exports = buildAlbumsAddPage;
