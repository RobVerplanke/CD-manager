const { getInputValue, clearContentHolders, createFormInput } = require('../utils/index.js');
const getItemById = require('../../../api/getItemById.js');
const updateItem = require('../../../api/updateItem.js');
const buildTracksAllPage = require('../../pages/track/viewAllTracks.js');
const buildAlbumsAllPage = require('../../pages/album/viewAllAlbums.js');
const buildCDsAllPage = require('../../pages/cd/viewAllCDs.js');

// Create a input form with in which all values are pre-filled with items current data
async function buildEditItemForm(itemType, selectedID) {

  clearContentHolders();

  // Get the corresponding item from the API module
  const item = await getItemById(itemType, selectedID);

  // Create the form and its elements
  const form = document.querySelector('#form');
  form.classList.add('add-form');

  // Add specific needed elements to the form, depending on the item type
  if (itemType === 'cd') form.append(createFormInput('Album', 'text', 'select', '#', item.album));
  if (itemType === 'track') form.append(createFormInput('Cd', 'text', 'select', '#', item.cd));

  // Format: (Labelname and element-id, input-type, element-type, placeholder text, current value)
  form.append(createFormInput('Title', 'text', 'input', 'Title of track...', item.title));
  form.append(createFormInput('Artist', 'text', 'input', 'Name of artist...', item.artist));
  form.append(createFormInput('Collaborators', 'text', 'input', 'Artists...', item.collaborators));
  form.append(createFormInput('Label', 'text', 'input', 'Enter label here...', item.label));

  if (itemType === 'album' || itemType === 'cd') {
    form.append(createFormInput('Year', 'number', 'select', '#', item.year));
    form.append(createFormInput('Genre', 'text', 'input', 'Rock, Classical...', item.genre));
    form.append(createFormInput('Image', 'text', 'input', 'http://image.jpg...', item.image));
  }

  if (itemType === 'track') {
    form.append(createFormInput('Remix', 'text', 'input', 'Mixed by...', item.remix));
    form.append(createFormInput('Style', 'text', 'input', 'Ambient, Blues rock...', item.style));
    form.append(createFormInput('Length', 'text', 'input', '3:45...', item.length));
  }

  form.append(createFormInput('Info', 'text', 'textarea', 'Extra info here...', item.info));
  form.append(createFormInput('Rating', 'text', 'select', '#', item.rating));

  // Add a submitbutton to the form
  const submitButton = document.createElement('button');
  submitButton.setAttribute('type', 'submit');
  submitButton.setAttribute('id', 'edit-button');
  submitButton.textContent = 'Edit';

  // Create the submit button and set its behaviour
  submitButton.addEventListener('click', async (e) => {
    e.preventDefault();

    // Create a list of all item properties
    const editedItemData = {};
    const fields = [
      'title',
      'artist',
      'collaborators',
      'label',
      'info',
      'rating',
    ];

    if (itemType === 'album') fields.push('year', 'genre', 'image');
    if (itemType === 'cd') fields.push('year', 'genre', 'image', 'album');
    if (itemType === 'track') fields.push('cd', 'remix', 'style', 'length');

    // Get the current data from the corresponding property
    fields.forEach((field) => {
      editedItemData[field] = getInputValue(field);
    });

    // Wait for the API to set the new data
    await updateItem(itemType, item.id, editedItemData);

    // Redirect the user to the corresponding updated overview page
    if (itemType === 'album') buildAlbumsAllPage();
    if (itemType === 'cd') buildCDsAllPage();
    if (itemType === 'track') buildTracksAllPage();
  });

  form.appendChild(submitButton);
}

module.exports = buildEditItemForm;
