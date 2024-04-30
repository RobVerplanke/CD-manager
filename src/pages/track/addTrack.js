const { clearContentHolders, setTitle } = require('../../components/utils/index.js');
const buildAddItemForm = require('../../components/forms/addItem.js');

// Create the tracks add page after clearing the page from any other content
function buildTracksAddPage() {

  clearContentHolders();

  setTitle('Add a new track to your collection');

  buildAddItemForm('track');
}

module.exports = buildTracksAddPage;
