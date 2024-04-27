const { clearContentHolders, setTitle } = require('../components/utils/index.js');

// Create the home page with components
function buildHomePage() {

  clearContentHolders();

  setTitle('Organize your music');
}

module.exports = buildHomePage;
