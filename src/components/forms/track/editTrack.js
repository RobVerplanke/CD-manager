const { getInputValue, clearContentHolders, createFormInput } = require('../../utils/index.js');
const getTrackbyID = require('../../../../api/track/getTrackByID.js');
const updateTrack = require('../../../../api/track/updateTrack.js');
const buildTracksAllPage = require('../../../pages/track/viewAllTracks.js');

// Create a input form with in which all values are pre-filled with items current data
async function buildEditTrackForm(selectedID) {

  clearContentHolders();

  // Get the corresponding track from the API module
  const track = await getTrackbyID(selectedID);

  // Create the form and its elements
  const form = document.querySelector('#form');
  form.classList.add('add-form');

  // Format: (Labelname and element-id, input-type, element-type, placeholder text, current value)
  form.append(createFormInput('Cd', 'text', 'select', '#', track.cd));
  form.append(createFormInput('Title', 'text', 'input', 'Title of track...', track.title));
  form.append(createFormInput('Artist', 'text', 'input', 'Name of artist...', track.artist));
  form.append(createFormInput('Remix', 'text', 'input', 'Mixed by...', track.remix));
  form.append(createFormInput('Collaborators', 'text', 'input', 'Artists...', track.collaborators));
  form.append(createFormInput('Label', 'text', 'input', 'Enter label here...', track.label));
  form.append(createFormInput('Style', 'text', 'input', 'Ambient, Blues rock...', track.style));
  form.append(createFormInput('Length', 'text', 'input', '3:45...', track.length));
  form.append(createFormInput('Info', 'text', 'textarea', 'Extra info here...', track.info));
  form.append(createFormInput('Rating', 'text', 'select', '#', track.rating));

  // Add a submitbutton to the form
  const submitButton = document.createElement('button');
  submitButton.setAttribute('type', 'submit');
  submitButton.setAttribute('id', 'edit-button');
  submitButton.textContent = 'Edit';

  // Create the submit button and set its behaviour
  submitButton.addEventListener('click', async (e) => {
    e.preventDefault();

    // Create a list of all track properties
    const editedTrackData = {};
    const fields = [
      'cd',
      'title',
      'artist',
      'remix',
      'collaborators',
      'label',
      'style',
      'length',
      'info',
      'rating',
    ];

    // Get the current data from the corresponding property
    fields.forEach((field) => {
      editedTrackData[field] = getInputValue(field);
    });

    // Wait for the API to set the new data
    await updateTrack(track.id, editedTrackData);

    // Redirect the user to the updated overview page
    buildTracksAllPage();
  });

  form.appendChild(submitButton);
}

module.exports = buildEditTrackForm;
