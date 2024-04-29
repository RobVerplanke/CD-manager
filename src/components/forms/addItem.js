const { createFormInput } = require('../utils/index.js');
const addItem = require('../../../api/addItem.js');
const buildTracksAllPage = require('../../pages/track/viewAllTracks.js');
const buildCDsAllPage = require('../../pages/cd/viewAllCDs.js');
const { buildAlbumsAllPage } = require('../../pages/album/index.js');

// Create a new input form with all the corresponding input fields and a submit button
function buildAddItemForm(itemType) {

  // Create the form and its elements
  const form = document.querySelector('#form');
  form.classList.add('add-form');

  // Add specific needed elements to the form, depending on the item type
  if (itemType === 'cd') form.append(createFormInput('Album', 'text', 'select', '#'));
  if (itemType === 'track') form.append(createFormInput('Cd', 'text', 'select', '#'));

  // Format: (Labelname and element-id, input-type, element-type, placeholder text, current value)
  form.append(createFormInput('Title', 'text', 'input', 'Title of track...'));
  form.append(createFormInput('Artist', 'text', 'input', 'Name of artist...'));
  form.append(createFormInput('Collaborators', 'text', 'input', 'Artists...'));
  form.append(createFormInput('Label', 'text', 'input', 'Enter label here...'));

  if (itemType === 'album' || itemType === 'cd') {
    form.append(createFormInput('Year', 'number', 'select', '#'));
    form.append(createFormInput('Genre', 'text', 'input', 'Rock, Classical...'));
    form.append(createFormInput('Image', 'text', 'input', 'http://image.jpg...'));
  }

  if (itemType === 'track') {
    form.append(createFormInput('Remix', 'text', 'input', 'Mixed by...'));
    form.append(createFormInput('Style', 'text', 'input', 'Ambient, Blues rock...'));
    form.append(createFormInput('Length', 'text', 'input', '3:45...'));
  }

  form.append(createFormInput('Info', 'text', 'textarea', 'Extra info here...'));
  form.append(createFormInput('Rating', 'text', 'select', '#'));

  // Create a submit button
  const submitButton = document.createElement('button');
  submitButton.setAttribute('type', 'submit');
  submitButton.setAttribute('id', 'add-button');
  submitButton.textContent = 'Add';

  submitButton.addEventListener('click', async (e) => {
    e.preventDefault();

    // Wait for the API module to add the data to the database
    await addItem(itemType);

    // Redirect the user to the corresponding updated overview page
    if (itemType === 'album') buildAlbumsAllPage();
    if (itemType === 'cd') buildCDsAllPage();
    if (itemType === 'track') buildTracksAllPage();
  });

  form.appendChild(submitButton);
}

module.exports = buildAddItemForm;
