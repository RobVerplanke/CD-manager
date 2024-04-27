const clearContentHolders = require('../../components/utils/clearHolders.js');
const setTitle = require('../../components/utils/setTitle.js');

function buildDeletePage() {

  clearContentHolders();

  setTitle('Remove a album from your collection');
}

module.exports = buildDeletePage;
