const clearContentHolders = require('../../components/utils/clearHolders.js');
const setTitle = require('../../components/utils/setTitle.js');
const buildAddCDForm = require('../../components/forms/cd/addCD.js');

function buildCDsAddPage() {

  clearContentHolders();

  setTitle('Add a new CD to your collection');

  buildAddCDForm();
}

module.exports = buildCDsAddPage;
