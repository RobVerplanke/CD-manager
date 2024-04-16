const { setTitle } = require('../components/index.js');

function buildCDsAllPage() {
  setTitle('Overview of all CDs');
}

function buildCDsAddPage() {
  setTitle('Add a new CD to your collection');
}

function buildCDsEditPage() {
  setTitle('Edit a CD');
}

function buildCDsDeletePage() {
  setTitle('Remove a CD from your collection');
}

module.exports = {
  buildCDsAllPage,
  buildCDsAddPage,
  buildCDsEditPage,
  buildCDsDeletePage,
};
