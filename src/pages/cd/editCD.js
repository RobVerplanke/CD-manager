const { clearContentHolders, setTitle } = require('../../components/utils/index.js');

// Create the edit page after clearing the page from any other content
const buildCDsEditPage = async () => {

  // Import the buildSearchItemForm function asynchronic
  await import('../../components/forms/searchItem.js').then((module) => {

    // Call the defalut function
    const buildSearchItemForm = module.default;

    // Clear all content
    clearContentHolders();

    // Build the 'edit CD' page
    setTitle('Edit a CD');
    buildSearchItemForm('cd', 'edit');
  });
};

module.exports = buildCDsEditPage;
