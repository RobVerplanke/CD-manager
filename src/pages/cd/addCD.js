const { clearContentHolders, setTitle } = require('../../components/utils/index.js');
const { buildAddCDForm } = require('../../components/forms/cd/index.js');

function buildCDsAddPage() {

  clearContentHolders();

  setTitle('Add a new CD to your collection');

  buildAddCDForm();
}

module.exports = buildCDsAddPage;
