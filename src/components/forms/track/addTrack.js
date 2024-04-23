const createFormInput = require('../utils.js');
const addTrackToCollection = require('../../../../api/track/addTrack.js');

function buildAddTrackForm() {
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

  // Voeg een verzendknop toe
  const submitButton = document.createElement('button');
  submitButton.setAttribute('type', 'submit');
  submitButton.setAttribute('id', 'add-button');
  submitButton.textContent = 'Add';

  submitButton.addEventListener('click', addTrackToCollection);

  form.appendChild(submitButton);
}

module.exports = buildAddTrackForm;
