const { clearContentHolders, setTitle } = require('../../components/index.js');

function buildCDsEditPage() {

  clearContentHolders();

  setTitle('Edit a CD');
}

module.exports = buildCDsEditPage;
