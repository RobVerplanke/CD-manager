const { createFormInput } = require('../../utils/index.js');
const getAlbumsResult = require('../../../../api/album/getAlbumsResult.js');

/**
 * Build the page that is loaded after the user clicks on the 'edit' button
 * in the sub-menu of the 'Album' option in the main navigation menu.
 * This page contains a search field and a search button.
 * Show the results of the search query on a results page.
 */
function searchAlbumForm() {
  const form = document.querySelector('#form');
  form.classList.add('edit-form');

  // Create a searchbar at the top of the form
  const searchField = createFormInput('Search', 'text', 'input', 'Title or artist name...');
  form.append(searchField);

  // Add a submit button to the form
  const submitButton = document.createElement('button');
  submitButton.setAttribute('type', 'submit');
  submitButton.setAttribute('id', 'search-button');
  submitButton.textContent = 'Search';

  // Redirect the user to a results page
  submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    getAlbumsResult(form.search.value);
  });

  form.appendChild(submitButton);
}

module.exports = searchAlbumForm;
