const { clearContentHolders, setTitle } = require('../components/utils/index.js');

// Create the statistics page with individual components
function buildStatsPage() {

  clearContentHolders();

  setTitle('Statistics of your collection');
}

module.exports = buildStatsPage;
