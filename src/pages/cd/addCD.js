const { clearContentHolders, setTitle } = require('../../components/utils/index.js');
const { buildAddItemForm } = require('../../components/forms/index.js');

// Create the add page after clearing the page from any other content
function buildCDsAddPage() {

  clearContentHolders();

  setTitle('Add a new CD to your collection');

  buildAddItemForm('cd');
}

module.exports = buildCDsAddPage;
