const getAllCDTitles = require('../../../api/cd/getAllCDTitles.js');
const getAllAlbumTitles = require('../../../api/album/getAllAlbumTitles.js');

async function buildSelectOptions(element, callback) {
  const selectElement = element;
  const defaultOption = document.createElement('option');
  let itemsList = [];

  defaultOption.textContent = '-';
  selectElement.append(defaultOption);

  if (element.id === 'album') itemsList = await getAllAlbumTitles();
  if (element.id === 'cd') itemsList = await getAllCDTitles();

  itemsList.forEach(([item]) => {
    const newOption = document.createElement('option');

    newOption.setAttribute('value', item);
    newOption.textContent = item;
    selectElement.append(newOption);
  });

  // After all options are loaded, set the corresponding option as value
  if (callback) callback();
}

module.exports = buildSelectOptions;
