const { setTitle } = require('../../components/index.js');
const clearContentHolder = require('../../utils/dom.js');

function buildDeletePage() {

  clearContentHolder();

  setTitle('Remove a album from your collection');
}

module.exports = buildDeletePage;
