const { getInputValue, clearContentHolders, createFormInput } = require('../../utils/index.js');
const { getAlbumByID, updateAlbum } = require('../../../../api/album/index.js');
const { buildAlbumsAllPage } = require('../../../pages/album/index.js');

async function buildEditAlbumForm(selectedID) {

  clearContentHolders();

  const album = await getAlbumByID(selectedID);
  const form = document.querySelector('#form');
  form.classList.add('add-form');

  form.append(createFormInput('Title', 'text', 'input', 'Title of album...', album.title));
  form.append(createFormInput('Artist', 'text', 'input', 'Name of artist...', album.artist));
  form.append(createFormInput('Collabs', 'text', 'input', 'Artist 2, Artist 3, ...', album.collabs));
  form.append(createFormInput('Label', 'text', 'input', 'Enter label here...', album.label));
  form.append(createFormInput('Genre', 'text', 'input', 'Rock, Classical, Electronic, ...', album.genre));
  form.append(createFormInput('Year', 'number', 'select', '#', album.year));
  form.append(createFormInput('Info', 'text', 'textarea', 'Extra info here...', album.info));
  form.append(createFormInput('Rating', 'text', 'select', '#', album.rating));
  form.append(createFormInput('Image', 'text', 'input', 'http://image.jpg...', album.image));

  // Voeg een verzendknop toe
  const submitButton = document.createElement('button');
  submitButton.setAttribute('type', 'submit');
  submitButton.setAttribute('id', 'edit-button');
  submitButton.textContent = 'Edit';

  submitButton.addEventListener('click', async (e) => {
    e.preventDefault();

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

    fields.forEach((field) => {
      editedAlbumData[field] = getInputValue(field);
    });

    await updateAlbum(album.id, editedAlbumData);

    // clearContentHolders();

    buildAlbumsAllPage();
  });

  form.appendChild(submitButton);
}

module.exports = buildEditAlbumForm;
