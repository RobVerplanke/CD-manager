const { setTitle } = require('../../components/index.js');
const clearContentHolder = require('../../utils/dom.js');

function buildEditAllPage() {

  clearContentHolder();

  setTitle('Edit a album');
}

module.exports = buildEditAllPage;
