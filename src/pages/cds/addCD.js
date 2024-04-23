const { clearContentHolders, setTitle, buildAddCDForm } = require('../../components/index.js');

function buildCDsAddPage() {

  clearContentHolders();

  setTitle('Add a new CD to your collection');

  buildAddCDForm();
}

module.exports = buildCDsAddPage;
