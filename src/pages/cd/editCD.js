const { clearContentHolders, setTitle } = require('../../components/utils/index.js');
const { searchCDForm } = require('../../components/forms/cd/index.js');

function buildCDsEditPage() {

  clearContentHolders();

  setTitle('Edit a CD');

  searchCDForm();

}

module.exports = buildCDsEditPage;
