const { clearContentHolders, setTitle } = require('../../components/utils/index.js');

function buildCDsDeletePage() {

  clearContentHolders();

  setTitle('Remove a CD from your collection');
}

module.exports = buildCDsDeletePage;
