const { setTitle } = require('../components/index.js');

function buildTracksAllPage() {
  setTitle('Overview of all tracks');
}

function buildTracksAddPage() {
  setTitle('Add a new track to your collection');
}

function buildTracksEditPage() {
  setTitle('Edit a track');
}

function buildTracksDeletePage() {
  setTitle('Remove a track from your collection');
}

module.exports = {
  buildTracksAllPage,
  buildTracksAddPage,
  buildTracksEditPage,
  buildTracksDeletePage,
};
