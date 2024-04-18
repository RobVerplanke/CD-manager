const { setTitle } = require('../../components/index.js');
const clearContentHolder = require('../../utils/dom.js');

function buildCDsDeletePage() {

  clearContentHolder();

  setTitle('Remove a CD from your collection');
}

module.exports = buildCDsDeletePage;
