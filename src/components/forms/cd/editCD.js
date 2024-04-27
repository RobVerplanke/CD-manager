const { getInputValue, clearContentHolders, createFormInput } = require('../../utils/index.js');
const { getCDByID, updateCD } = require('../../../../api/cd/index.js');
const { buildCDsAllPage } = require('../../../pages/cd/index.js');

async function buildEditCDForm(selectedID) {

  clearContentHolders();

  const cd = await getCDByID(selectedID);
  const form = document.querySelector('#form');
  form.classList.add('add-form');

  form.append(createFormInput('Album', 'text', 'select', '#', cd.album));
  form.append(createFormInput('Title', 'text', 'input', 'Title of CD...', cd.title));
  form.append(createFormInput('Artist', 'text', 'input', 'Name of artist...', cd.artist));
  form.append(createFormInput('Collabs', 'text', 'input', 'Artist 2, Artist 3, ...', cd.collabs));
  form.append(createFormInput('Label', 'text', 'input', 'Enter label here...', cd.label));
  form.append(createFormInput('Genre', 'text', 'input', 'Rock, Classical, Electronic, ...', cd.genre));
  form.append(createFormInput('Year', 'number', 'select', '#', cd.year));
  form.append(createFormInput('Info', 'text', 'textarea', 'Extra info here...', cd.info));
  form.append(createFormInput('Rating', 'text', 'select', '#', cd.rating));
  form.append(createFormInput('Image', 'text', 'input', 'http://image.jpg...', cd.image));

  // Voeg een verzendknop toe
  const submitButton = document.createElement('button');
  submitButton.setAttribute('type', 'submit');
  submitButton.setAttribute('id', 'edit-button');
  submitButton.textContent = 'Edit';

  submitButton.addEventListener('click', async (e) => {
    e.preventDefault();

    const editedCDData = {};
    const fields = [
      'album',
      'title',
      'artist',
      'collabs',
      'label',
      'genre',
      'year',
      'info',
      'rating',
      'image',
    ];

    fields.forEach((field) => {
      editedCDData[field] = getInputValue(field);
    });

    await updateCD(cd.id, editedCDData);

    // clearContentHolders();

    buildCDsAllPage();
  });

  form.appendChild(submitButton);
}

module.exports = buildEditCDForm;
