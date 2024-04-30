const { clearContentHolders, setTitle } = require('../../components/utils/index.js');

// Create the tracks edit page after clearing the page from any other content
const buildTracksEditPage = async () => {

  // Import the buildSearchItemForm function asynchronic
  await import('../../components/forms/searchItem.js').then((module) => {

    // Call the defalut function
    const buildSearchItemForm = module.default;

    // Clear all content
    clearContentHolders();

    // Build the 'edit CD' page
    setTitle('Edit a track');
    buildSearchItemForm('track', 'edit');
  });
};

module.exports = buildTracksEditPage;
