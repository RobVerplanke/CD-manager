const clearContentHolders = require('../../components/utils/clearHolders.js');
const setTitle = require('../../components/utils/setTitle.js');
const getCDsHTML = require('../../../api/cd/getCDsHTML.js');

function buildCDsAllPage() {

  clearContentHolders();

  setTitle('Overview of all CDs in your collection');

  getCDsHTML();
}

module.exports = buildCDsAllPage;
