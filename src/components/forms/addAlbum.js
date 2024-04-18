const { pageHolder, contentHolder } = require('../commonElements.js');

function buildAddAlbumForm() {
  const template = 'form';

  contentHolder.innerHTML += template;

  pageHolder.append(contentHolder);
}

module.exports = buildAddAlbumForm;
