const { setTitle } = require('../components/index.js');

function buildAlbumsAllPage() {
  setTitle('Overview of all albums');
}

function buildAlbumsAddPage() {
  setTitle('Add a new album to your collection');
}

function buildAlbumsEditPage() {
  setTitle('Edit a album');
}

function buildAlbumsDeletePage() {
  setTitle('Remove a album from your collection');
}

module.exports = {
  buildAlbumsAllPage,
  buildAlbumsAddPage,
  buildAlbumsEditPage,
  buildAlbumsDeletePage,
};
