const getAllTitles = require('../../../api/getAllTitles.js');

// Create options for the 'Album' and 'CD' selection elements.
// The 'Album' options contain the titles of all albums in the collection so when a CD is added
// or edited, the user can select an album of which this CD is part.
async function buildSelectOptions(element, callback) {
  let titlesList = [];
  const selectElement = element;

  // Create and add a neutral default option
  const defaultOption = document.createElement('option');
  defaultOption.textContent = '-';
  selectElement.append(defaultOption);

  // Call the corresponding API function to get a list of all existing titles
  if (element.id === 'album') titlesList = await getAllTitles('album');
  if (element.id === 'cd') titlesList = await getAllTitles('cd');

  // Each title needs to becomes a selectable option
  titlesList.forEach(([title]) => {
    const newOption = document.createElement('option');

    newOption.setAttribute('value', title);
    newOption.textContent = title;
    selectElement.append(newOption);
  });

  // After all options are loaded, set the corresponding option as value
  if (callback) callback();
}

module.exports = buildSelectOptions;
