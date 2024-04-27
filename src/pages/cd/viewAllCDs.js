const { clearContentHolders, setTitle } = require('../../components/utils/index.js');
const { getCDsHTML } = require('../../../api/cd/index.js');

function buildCDsAllPage() {

  clearContentHolders();

  setTitle('Overview of all CDs in your collection');

  getCDsHTML();
}

module.exports = buildCDsAllPage;
