const { setTitle, buildAddCDForm } = require('../../components/index.js');
const clearContentHolder = require('../../utils/dom.js');

function buildCDsAddPage() {

  clearContentHolder();

  setTitle('Add a new CD to your collection');

  buildAddCDForm();
}

module.exports = buildCDsAddPage;
