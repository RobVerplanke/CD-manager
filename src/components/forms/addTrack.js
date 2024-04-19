const { pageHolder, contentHolder } = require('../commonElements.js');
const createFormInput = require('./utils.js');

function buildAddTrackForm() {
  const form = document.createElement('form');
  form.classList.add('add-form');

  form.append(createFormInput('Title', 'text', 'input', 'Title of track...'));
  form.append(createFormInput('Artist', 'text', 'input', 'Name of artist...'));
  form.append(createFormInput('Collaborators', 'text', 'input', 'Artist 2, Artist 3, ...'));
  form.append(createFormInput('Genre', 'text', 'input', 'Rock, Classical, Electronic, ...'));
  form.append(createFormInput('Length', 'text', 'input', '3:45...'));
  form.append(createFormInput('Info', 'text', 'textarea', 'Extra info here...'));

  // Voeg een verzendknop toe
  const submitButton = document.createElement('button');
  submitButton.setAttribute('type', 'submit');
  submitButton.setAttribute('id', 'add-button');
  submitButton.textContent = 'Add';

  form.appendChild(submitButton);
  contentHolder.append(form);

  pageHolder.append(contentHolder);
}

module.exports = buildAddTrackForm;
