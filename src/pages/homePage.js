const { clearContentHolders, setTitle } = require('../components/index.js');

// Create the home page with components
function buildHomePage() {

  clearContentHolders();

  setTitle('Organize your music');
}

module.exports = buildHomePage;
