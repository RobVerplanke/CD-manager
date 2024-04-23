const { clearContentHolders, setTitle } = require('../../components/index.js');

function buildDeletePage() {

  clearContentHolders();

  setTitle('Remove a album from your collection');
}

module.exports = buildDeletePage;
