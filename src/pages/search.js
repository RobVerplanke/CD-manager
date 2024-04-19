const { setTitle } = require('../components/index.js');
const clearContentHolder = require('../utils/dom.js');

// Create the search page with individual components
function buildSearchPage() {

  clearContentHolder();

  setTitle('Search for Albums, CDs or tracks');
}

module.exports = buildSearchPage;
