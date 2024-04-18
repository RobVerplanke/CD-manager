const { setTitle } = require('../../components/index.js');
const clearContentHolder = require('../../utils/dom.js');

function buildCDsAddPage() {

  clearContentHolder();

  setTitle('Add a new CD to your collection');
}

module.exports = buildCDsAddPage;
