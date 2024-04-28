const { createFormInput } = require('../../utils/index.js');
const { addAlbumToCollection } = require('../../../../api/album/index.js');
const buildAlbumsAllPage = require('../../../pages/album/viewAllAlbums.js');

// Create a new input form with all the corresponding input fields and a submit button
function buildAddAlbumForm() {

  // Create the form and its elements
  const form = document.querySelector('#form');
  form.classList.add('add-form');

  form.append(createFormInput('Title', 'text', 'input', 'Title of album...'));
  form.append(createFormInput('Artist', 'text', 'input', 'Name of artist...'));
  form.append(createFormInput('Collaborators', 'text', 'input', 'Artist 2, Artist 3, ...'));
  form.append(createFormInput('Label', 'text', 'input', 'Enter label here...'));
  form.append(createFormInput('Genre', 'text', 'input', 'Rock, Classical, Electronic, ...'));
  form.append(createFormInput('Year', 'number', 'select'));
  form.append(createFormInput('Info', 'text', 'textarea', 'Extra info here...'));
  form.append(createFormInput('Rating', 'text', 'select'));
  form.append(createFormInput('Cover', 'text', 'input', 'http://image.jpg...'));

  // Create a submit button
  const submitButton = document.createElement('button');
  submitButton.setAttribute('type', 'submit');
  submitButton.setAttribute('id', 'add-button');
  submitButton.textContent = 'Add';

  submitButton.addEventListener('click', async (e) => {

    // Wait for the corresponding API module to add the data to the database
    await addAlbumToCollection(e);

    // Redirect the user to the updated overview page
    buildAlbumsAllPage();
  });

  form.appendChild(submitButton);
}

module.exports = buildAddAlbumForm;
