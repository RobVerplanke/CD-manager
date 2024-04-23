const { clearContentHolders, setTitle } = require('../../components/index.js');

function buildEditAllPage() {

  clearContentHolders();

  setTitle('Edit a album');
}

module.exports = buildEditAllPage;
