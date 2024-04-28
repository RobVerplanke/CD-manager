const { clearContentHolders, setTitle } = require('../components/utils/index.js');

// Create the statistics page after clearing the page from any other content
function buildStatsPage() {

  clearContentHolders();

  setTitle('Statistics of your collection');
}

module.exports = buildStatsPage;
