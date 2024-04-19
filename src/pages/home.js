const { setTitle } = require('../components/index.js');
const clearContentHolder = require('../utils/dom.js');

// Create the home page with components
function buildHomePage() {

  clearContentHolder();

  setTitle('Organize your music');
}

module.exports = buildHomePage;
