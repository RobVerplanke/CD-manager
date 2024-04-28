const { clearContentHolders, setTitle } = require('../../components/utils/index.js');
const searchItem = require('../../components/forms/common/searchItem.js');

// Create the edit page after clearing the page from any other content
function buildCDsEditPage() {

  clearContentHolders();

  setTitle('Edit a CD');

  searchItem('cd', 'edit');
}

module.exports = buildCDsEditPage;
