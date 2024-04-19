const renderCDsList = require('../../../api/getAllCDsList.js');
const renderAlbumsList = require('../../../api/getAllAlbumsList.js');

function buildYearOptions(element) {
  const selectElement = element;
  const currentYear = new Date().getFullYear();

  for (let i = currentYear; i > 1900; i--) {
    const newOption = document.createElement('option');
    newOption.setAttribute('value', i);
    newOption.textContent = i;
    selectElement.append(newOption);
  }
}

async function buildCDOptions(element) {
  const selectElement = element;
  const defaultOption = document.createElement('option');
  defaultOption.textContent = '-';
  defaultOption.setAttribute('selected', 'selected');
  selectElement.append(defaultOption);

  const CDsList = await renderCDsList();

  CDsList.forEach(([title]) => {
    const newOption = document.createElement('option');
    newOption.setAttribute('value', title);
    newOption.textContent = title;
    selectElement.append(newOption);
  });
}


async function buildAlbumOptions(element) {
  const selectElement = element;
  const defaultOption = document.createElement('option');
  defaultOption.textContent = '-';
  defaultOption.setAttribute('selected', 'selected');

  selectElement.append(defaultOption);

  const albumsList = await renderAlbumsList();

  albumsList.forEach(([title]) => {
    const newOption = document.createElement('option');
    newOption.setAttribute('value', title);
    newOption.textContent = title;
    selectElement.append(newOption);
  });
}

function buildRatingStars(amount) {
  let starsList = '';

  for (let i = 0; i < amount; i++) {
    starsList += '⭐';
  }
  return starsList;
}

function buildRatingOptions(element) {
  const selectElement = element;
  const defaultOption = document.createElement('option');
  defaultOption.textContent = '-';
  defaultOption.setAttribute('selected', 'selected');

  selectElement.append(defaultOption);

  for (let i = 1; i <= 5; i++) {
    const newOption = document.createElement('option');
    newOption.textContent = buildRatingStars(i);
    selectElement.append(newOption);
  }
}

function createFormInput(labelText, type, element, placeholder) {
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

  if (labelText === 'Cover') input.setAttribute('accept', 'image/png, image/jpeg');
  if (labelText === 'Year') buildYearOptions(input);
  if (labelText === 'Cd') buildCDOptions(input);
  if (labelText === 'Album') buildAlbumOptions(input);
  if (labelText === 'Rating') buildRatingOptions(input);

  holder.append(label, input);

  return holder;
}

module.exports = createFormInput;
