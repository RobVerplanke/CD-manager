const { clearContentHolders, setTitle } = require('../../components/index.js');
const searchCDForm = require('../../components/forms/cd/editCDSearch.js');

function buildCDsEditPage() {

  clearContentHolders();

  setTitle('Edit a CD');

  searchCDForm();

}

module.exports = buildCDsEditPage;
