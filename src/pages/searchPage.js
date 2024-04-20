const { clearContentHolders, setTitle } = require('../components/index.js');

// Create the search page with individual components
function buildSearchPage() {

  clearContentHolders();

  setTitle('Search for Albums, CDs or tracks');
}

module.exports = buildSearchPage;
