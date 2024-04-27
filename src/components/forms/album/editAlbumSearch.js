const { createFormInput } = require('../../utils/index.js');
const getAlbumsResult = require('../../../../api/album/getAlbumsResult.js');

function searchAlbumForm() {
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
    getAlbumsResult(form.search.value);
  });

  form.appendChild(submitButton);
}

module.exports = searchAlbumForm;
