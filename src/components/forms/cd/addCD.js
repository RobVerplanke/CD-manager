const { createFormInput } = require('../../utils/index.js');
const { addCDToCollection } = require('../../../../api/cd/index.js');
const buildCDsAllPage = require('../../../pages/cd/viewAllCDs.js');

// Create a new input form with all the corresponding input fields and a submit button
function buildAddCDForm() {

  // Create the form and its elements
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
  form.append(createFormInput('Image', 'text', 'input', 'http://image.jpg...'));

  // Create a submit button
  const submitButton = document.createElement('button');
  submitButton.setAttribute('type', 'submit');
  submitButton.setAttribute('id', 'add-button');
  submitButton.textContent = 'Add';

  submitButton.addEventListener('click', async (e) => {
    e.preventDefault();

    // Wait for the corresponding API module to add the data to the database
    await addCDToCollection();

    // Redirect the user to the updated overview page
    buildCDsAllPage();
  });

  form.appendChild(submitButton);
}

module.exports = buildAddCDForm;
