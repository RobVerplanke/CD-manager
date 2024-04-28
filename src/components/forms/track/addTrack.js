const { createFormInput } = require('../../utils/index.js');
const { addTrackToCollection } = require('../../../../api/track/index.js');
const buildTracksAllPage = require('../../../pages/track/viewAllTracks.js');

// Create a new input form with all the corresponding input fields and a submit button
function buildAddTrackForm() {

  // Create the form and its elements
  const form = document.querySelector('#form');
  form.classList.add('add-form');

  form.append(createFormInput('Cd', 'text', 'select'));
  form.append(createFormInput('Title', 'text', 'input', 'Title of track...'));
  form.append(createFormInput('Artist', 'text', 'input', 'Name of artist...'));
  form.append(createFormInput('Remix', 'text', 'input', 'Mixed by...'));
  form.append(createFormInput('Collaborators', 'text', 'input', 'Artist 2, Artist 3, ...'));
  form.append(createFormInput('Label', 'text', 'input', 'Enter label here...'));
  form.append(createFormInput('Style', 'text', 'input', 'Ambient, Blues rock, Trance, ...'));
  form.append(createFormInput('Length', 'text', 'input', '3:45...'));
  form.append(createFormInput('Info', 'text', 'textarea', 'Extra info here...'));
  form.append(createFormInput('Rating', 'text', 'select'));

  // Create a submit button
  const submitButton = document.createElement('button');
  submitButton.setAttribute('type', 'submit');
  submitButton.setAttribute('id', 'add-button');
  submitButton.textContent = 'Add';

  submitButton.addEventListener('click', async (e) => {
    e.preventDefault();

    // Wait for the corresponding API module to add the data to the database
    await addTrackToCollection();

    // Redirect the user to the updated overview page
    buildTracksAllPage();
  });

  form.appendChild(submitButton);
}

module.exports = buildAddTrackForm;
