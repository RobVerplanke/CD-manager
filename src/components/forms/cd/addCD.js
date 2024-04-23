const createFormInput = require('../utils.js');
const addCDToCollection = require('../../../../api/cd/addCD.js');

function buildAddCDForm() {
  const form = document.querySelector('#form');
  form.classList.add('add-form');

  form.append(createFormInput('Album', 'text', 'select'));
  form.append(createFormInput('Title', 'text', 'input', 'Title of CD...'));
  form.append(createFormInput('Artist', 'text', 'input', 'Name of artist...'));
  form.append(createFormInput('Collaborators', 'text', 'input', 'Artist 2, Artist 3, ...'));
  form.append(createFormInput('Label', 'text', 'input', 'Enter label here...'));
  form.append(createFormInput('Genre', 'text', 'input', 'Rock, Classical, Electronic, ...'));
  form.append(createFormInput('Year', 'number', 'select'));
  form.append(createFormInput('Info', 'text', 'textarea', 'Extra info here...'));
  form.append(createFormInput('Rating', 'text', 'select'));
  // form.append(createFormInput('Cover', 'file', 'input'));
  form.append(createFormInput('Cover', 'text', 'input', 'http://image.jpg...'));

  // Voeg een verzendknop toe
  const submitButton = document.createElement('button');
  submitButton.setAttribute('type', 'submit');
  submitButton.setAttribute('id', 'add-button');
  submitButton.textContent = 'Add';

  submitButton.addEventListener('click', addCDToCollection);

  form.appendChild(submitButton);
}

module.exports = buildAddCDForm;
