const { getInputValue, clearContentHolders, createFormInput } = require('../../utils/index.js');
const getCDByID = require('../../../../api/cd/getCDByID.js');
const updateCD = require('../../../../api/cd/updateCD.js');
const buildCDsAllPage = require('../../../pages/cd/viewAllCDs.js');

// Create a input form with in which all values are pre-filled with items current data
async function buildEditCDForm(selectedID) {

  clearContentHolders();

  // Get the corresponding CD from the API module
  const cd = await getCDByID(selectedID);

  // Create the form and its elements
  const form = document.querySelector('#form');
  form.classList.add('add-form');

  // Format: (Labelname and element-id, input-type, element-type, placeholder text, current value)
  form.append(createFormInput('Album', 'text', 'select', '#', cd.album));
  form.append(createFormInput('Title', 'text', 'input', 'Title of CD...', cd.title));
  form.append(createFormInput('Artist', 'text', 'input', 'Name of artist...', cd.artist));
  form.append(createFormInput('Collabs', 'text', 'input', 'Artist 2, Artist 3, ...', cd.collabs));
  form.append(createFormInput('Label', 'text', 'input', 'Enter label here...', cd.label));
  form.append(createFormInput('Genre', 'text', 'input', 'Rock, Classical...', cd.genre));
  form.append(createFormInput('Year', 'number', 'select', '#', cd.year));
  form.append(createFormInput('Info', 'text', 'textarea', 'Extra info here...', cd.info));
  form.append(createFormInput('Rating', 'text', 'select', '#', cd.rating));
  form.append(createFormInput('Image', 'text', 'input', 'http://image.jpg...', cd.image));

  // Add a submitbutton to the form
  const submitButton = document.createElement('button');
  submitButton.setAttribute('type', 'submit');
  submitButton.setAttribute('id', 'edit-button');
  submitButton.textContent = 'Edit';

  // Create the submit button and set its behaviour
  submitButton.addEventListener('click', async (e) => {
    e.preventDefault();

    // Create a list of all CD properties
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

    // Get the current data from the corresponding property
    fields.forEach((field) => {
      editedCDData[field] = getInputValue(field);
    });

    // Wait for the API to set the new data
    await updateCD(cd.id, editedCDData);

    // Redirect the user to the updated overview page
    buildCDsAllPage();
  });

  form.appendChild(submitButton);
}

module.exports = buildEditCDForm;
