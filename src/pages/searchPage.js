const { clearContentHolders, setTitle } = require('../components/utils/index.js');

// Create the search page after clearing the page from any other content
function buildSearchPage() {

  clearContentHolders();

  setTitle('Search for Albums, CDs or tracks');
}

module.exports = buildSearchPage;
