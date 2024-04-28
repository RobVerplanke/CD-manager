const { clearContentHolders, setTitle } = require('../../components/utils/index.js');
const { searchCDForm } = require('../../components/forms/cd/index.js');

// Create the delete page after clearing the page from any other content
function buildCDsDeletePage() {

  clearContentHolders();

  setTitle('Remove a CD from your collection');

  searchCDForm('delete');
}

module.exports = buildCDsDeletePage;
