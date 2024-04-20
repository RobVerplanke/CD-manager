const { clearContentHolders, setTitle } = require('../components/index.js');

// Create the statistics page with individual components
function buildStatsPage() {

  clearContentHolders();

  setTitle('Statistics of your collection');
}

module.exports = buildStatsPage;
