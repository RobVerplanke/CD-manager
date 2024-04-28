const clearContentHolders = require('../../components/utils/clearHolders.js');
const setTitle = require('../../components/utils/setTitle.js');

// Create the delete page after clearing the page from any other content
function buildDeletePage() {

  clearContentHolders();

  setTitle('Remove a album from your collection');
}

module.exports = buildDeletePage;
