const { clearContentHolders, setTitle } = require('../../components/utils/index.js');
const { searchCDForm } = require('../../components/forms/cd/index.js');

// Create the edit page after clearing the page from any other content
function buildCDsEditPage() {

  clearContentHolders();

  setTitle('Edit a CD');

  searchCDForm('edit');
}

module.exports = buildCDsEditPage;
