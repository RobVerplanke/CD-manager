const { clearContentHolders, setTitle } = require('../../components/index.js');
const { getCDsHTML } = require('../../../api/index.js');

function buildCDsAllPage() {

  clearContentHolders();

  setTitle('Overview of all CDs in your collection');

  getCDsHTML();
}

module.exports = buildCDsAllPage;
