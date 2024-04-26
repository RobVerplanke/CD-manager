const { createFormInput } = require('../utils.js');
const clearContentHolders = require('../../utils/clearHolders.js');
const getInputValue = require('../../utils/getInputValue.js');
const { getTrackbyID, updateTrack } = require('../../../../api/index.js');
const buildTracksAllPage = require('../../../pages/tracks/viewAllTracks.js');

async function buildEditTrackForm(selectedID) {

  clearContentHolders();

  const track = await getTrackbyID(selectedID);
  const form = document.querySelector('#form');
  form.classList.add('add-form');

  form.append(createFormInput('Cd', 'text', 'select', '#', track.cd));
  form.append(createFormInput('Title', 'text', 'input', 'Title of track...', track.title));
  form.append(createFormInput('Artist', 'text', 'input', 'Name of artist...', track.artist));
  form.append(createFormInput('Remix', 'text', 'input', 'Mixed by...', track.remix));
  form.append(createFormInput('Collaborators', 'text', 'input', 'Artist 2, Artist 3, ...', track.collaborators));
  form.append(createFormInput('Label', 'text', 'input', 'Enter label here...', track.label));
  form.append(createFormInput('Style', 'text', 'input', 'Ambient, Blues rock, Trance, ...', track.style));
  form.append(createFormInput('Length', 'text', 'input', '3:45...', track.length));
  form.append(createFormInput('Info', 'text', 'textarea', 'Extra info here...', track.info));
  form.append(createFormInput('Rating', 'text', 'select', '#', track.rating));

  // Voeg een verzendknop toe
  const submitButton = document.createElement('button');
  submitButton.setAttribute('type', 'submit');
  submitButton.setAttribute('id', 'edit-button');
  submitButton.textContent = 'Edit';

  submitButton.addEventListener('click', async (e) => {
    e.preventDefault();

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

    fields.forEach((field) => {
      editedTrackData[field] = getInputValue(field);
    });

    await updateTrack(track.id, editedTrackData);

    // clearContentHolders();

    buildTracksAllPage();
  });

  form.appendChild(submitButton);
}

module.exports = buildEditTrackForm;
