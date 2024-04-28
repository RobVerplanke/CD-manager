const { createFormInput } = require('../../utils/index.js');
const getTracksResult = require('../../../../api/track/getTracksResult.js');
const getCDsResult = require('../../../../api/cd/getCDsResult.js');
const getAlbumsResult = require('../../../../api/album/getAlbumsResult.js');

/**
 * Build the page that is loaded after the user clicks on the 'edit' button
 * in the sub-menu of the 'Track' option in the main navigation menu.
 * This page contains a search field and a search button.
 * Show the results of the search query on a results page.
 */
function searchTrackForm(type, action) {
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

    // Get the search results
    if (type === 'album') getAlbumsResult(action, form.search.value);
    if (type === 'cd') getCDsResult(action, form.search.value);
    if (type === 'track') getTracksResult(action, form.search.value);

  });

  form.appendChild(submitButton);
}

module.exports = searchTrackForm;
