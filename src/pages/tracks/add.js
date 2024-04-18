const { setTitle } = require('../../components/index.js');
const clearContentHolder = require('../../utils/dom.js');

function buildTracksAddPage() {

  clearContentHolder();

  setTitle('Add a new track to your collection');
}

module.exports = buildTracksAddPage;
