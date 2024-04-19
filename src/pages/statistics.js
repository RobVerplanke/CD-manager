const { setTitle } = require('../components/index.js');
const clearContentHolder = require('../utils/dom.js');

// Create the statistics page with individual components
function buildStatsPage() {

  clearContentHolder();

  setTitle('Statistics of your collection');
}

module.exports = buildStatsPage;
