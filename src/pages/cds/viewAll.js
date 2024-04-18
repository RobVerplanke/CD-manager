const { setTitle } = require('../../components/index.js');
const renderCDs = require('../../../api/cdsAll.js');
const clearContentHolder = require('../../utils/dom.js');

function buildCDsAllPage() {

  clearContentHolder();

  setTitle('Overview of all CDs in your collection');

  renderCDs();
}

module.exports = buildCDsAllPage;
