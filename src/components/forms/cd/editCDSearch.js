const { createFormInput } = require('../utils.js');
const getCDsHTML = require('../../../../api/cd/getCDs.js');

function searchCDForm() {
  const form = document.querySelector('#form');
  form.classList.add('edit-form');
  const searchField = createFormInput('Search', 'text', 'input', 'Title or artist name...');

  form.append(searchField);

  // Voeg een verzendknop toe
  const submitButton = document.createElement('button');
  submitButton.setAttribute('type', 'submit');
  submitButton.setAttribute('id', 'search-button');
  submitButton.textContent = 'Search';

  submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    getCDsHTML(form.search.value);
  });

  form.appendChild(submitButton);
}

module.exports = searchCDForm;
