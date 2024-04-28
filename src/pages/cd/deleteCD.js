const { clearContentHolders, setTitle } = require('../../components/utils/index.js');

// Create the delete page after clearing the page from any other content
function buildCDsDeletePage() {

  clearContentHolders();

  setTitle('Remove a CD from your collection');
}

module.exports = buildCDsDeletePage;
