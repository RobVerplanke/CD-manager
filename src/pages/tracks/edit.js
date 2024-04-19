const { setTitle } = require('../../components/index.js');
const clearContentHolder = require('../../utils/dom.js');

function buildTracksEditPage() {

  clearContentHolder();

  setTitle('Edit a track');
}

module.exports = buildTracksEditPage;
