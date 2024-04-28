const { clearContentHolders, setTitle } = require('../components/utils/index.js');

// Create the home page after clearing the page from any other content
function buildHomePage() {

  clearContentHolders();

  setTitle('Organize your music');
}

module.exports = buildHomePage;
