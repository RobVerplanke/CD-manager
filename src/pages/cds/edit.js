const { setTitle } = require('../../components/index.js');
const clearContentHolder = require('../../utils/dom.js');

function buildCDsEditPage() {

  clearContentHolder();

  setTitle('Edit a CD');
}

module.exports = buildCDsEditPage;
