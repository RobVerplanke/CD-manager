const getAllCDTitles = require('../../../api/cd/getAllCDTitles.js');
const getAllAlbumTitles = require('../../../api/album/getAllAlbumTitles.js');

function buildYearOptions(element) {
  const selectElement = element;
  const currentYear = new Date().getFullYear();

  for (let i = currentYear; i > 1900; i--) {
    const newOption = document.createElement('option');
    newOption.textContent = i;
    selectElement.append(newOption);
  }
}

async function buildCDOptions(element, callback) {
  const selectElement = element;
  const defaultOption = document.createElement('option');

  defaultOption.textContent = '-';
  selectElement.append(defaultOption);

  const CDsList = await getAllCDTitles();

  CDsList.forEach(([title]) => {
    const newOption = document.createElement('option');
    newOption.setAttribute('value', title);
    newOption.textContent = title;
    selectElement.append(newOption);
  });

  // After all options are loaded, set the corresponding option as value
  if (callback) callback();
}

// Merge these two functions

async function buildAlbumOptions(element, callback) {
  const selectElement = element;
  const defaultOption = document.createElement('option');

  defaultOption.textContent = '-';
  selectElement.append(defaultOption);

  const albumsList = await getAllAlbumTitles();

  albumsList.forEach(([title]) => {
    const newOption = document.createElement('option');
    newOption.setAttribute('value', title);
    newOption.textContent = title;
    selectElement.append(newOption);
  });

  // After all options are loaded, set the corresponding option as value
  if (callback) callback();
}

function buildRatingStars(amount) {
  let starsList = '';

  for (let i = 0; i < amount; i++) {
    // starsList += '⭐';
    starsList = i;

  }
  return starsList;
}

function buildRatingOptions(element) {
  const selectElement = element;
  const defaultOption = document.createElement('option');

  defaultOption.textContent = '-';
  selectElement.append(defaultOption);

  for (let i = 1; i <= 5; i++) {
    const newOption = document.createElement('option');
    newOption.textContent = buildRatingStars(i);
    selectElement.append(newOption);
  }
}

function createFormInput(labelText, type, element, placeholder, value) {

  const holder = document.createElement('div');
  holder.classList.add('form-input-holder');

  const label = document.createElement('label');
  label.textContent = `${labelText}:`;
  label.classList.add('form-label');
  label.setAttribute('for', labelText.toLowerCase());

  const input = document.createElement(element);
  input.setAttribute('type', type);
  input.setAttribute('id', labelText.toLowerCase());
  input.setAttribute('name', labelText.toLowerCase());
  input.setAttribute('placeholder', placeholder);

  if (labelText === 'Rating') buildRatingOptions(input);

  if (labelText === 'Album') {
    buildAlbumOptions(input, () => {
      input.value = value;
    });
  }

  if (labelText === 'Cd') {
    buildCDOptions(input, () => {
      input.value = value;
    });
  }

  if (labelText === 'Year') {
    buildYearOptions(input);
    input.value = value;
  }

  if (value) {
    if (element === 'textarea') {
      input.textContent = value;
    } else if (element === 'select' && labelText === 'Rating') {
      input.value = value;
    } else {
      input.setAttribute('value', value);
    }
  }

  holder.append(label, input);

  return holder;
}


module.exports = createFormInput;
