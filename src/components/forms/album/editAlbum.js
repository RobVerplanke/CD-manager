const { getInputValue, clearContentHolders, createFormInput } = require('../../utils/index.js');
const { getItemById, updateItem } = require('../../../../api/common/index.js');
const buildAlbumsAllPage = require('../../../pages/album/viewAllAlbums.js');

// Create a input form with in which all values are pre-filled with items current data
async function buildEditAlbumForm(selectedID) {

  clearContentHolders();

  // Get the corresponding CD from the API module
  const album = await getItemById('album', selectedID);

  // Create the form and its elements
  const form = document.querySelector('#form');
  form.classList.add('add-form');

  form.append(createFormInput('Title', 'text', 'input', 'Title of album...', album.title));
  form.append(createFormInput('Artist', 'text', 'input', 'Name of artist...', album.artist));
  form.append(createFormInput('Collabs', 'text', 'input', 'Artiss...', album.collabs));
  form.append(createFormInput('Label', 'text', 'input', 'Enter label here...', album.label));
  form.append(createFormInput('Genre', 'text', 'input', 'Rock, Classical...', album.genre));
  form.append(createFormInput('Year', 'number', 'select', '#', album.year));
  form.append(createFormInput('Info', 'text', 'textarea', 'Extra info here...', album.info));
  form.append(createFormInput('Rating', 'text', 'select', '#', album.rating));
  form.append(createFormInput('Image', 'text', 'input', 'http://image.jpg...', album.image));

  // Add a submitbutton to the form
  const submitButton = document.createElement('button');
  submitButton.setAttribute('type', 'submit');
  submitButton.setAttribute('id', 'edit-button');
  submitButton.textContent = 'Edit';

  // Create the submit button and set its behaviour
  submitButton.addEventListener('click', async (e) => {
    e.preventDefault();

    // Create a list of all album properties
    const editedAlbumData = {};
    const fields = [
      'title',
      'artist',
      'collabs',
      'label',
      'genre',
      'year',
      'info',
      'rating',
      'image',
    ];

    // Get the current data from the corresponding property
    fields.forEach((field) => {
      editedAlbumData[field] = getInputValue(field);
    });

    // Wait for the API to set the new data
    await updateItem('album', album.id, editedAlbumData);

    // Redirect the user to the updated overview page
    buildAlbumsAllPage();
  });

  form.appendChild(submitButton);
}

module.exports = buildEditAlbumForm;
