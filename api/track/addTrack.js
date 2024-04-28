const { getCurrentDate } = require('../../src/components/utils/index.js');

// Add a new track to the collection
const addTrackToCollection = async (e) => {
  e.preventDefault();

  // Select the form and get all input values
  const form = document.querySelector('#form');

  // Create new track-object
  const track = {
    cds: form.cd.value,
    title: form.title.value,
    artist: form.artist.value,
    remix: form.remix.value,
    collabs: form.collaborators.value,
    label: form.label.value,
    style: form.style.value,
    length: form.length.value,
    added: getCurrentDate(),
    rating: form.rating.value,
    info: form.info.value,
    views: 0,
  };

  // Add the track-object as string to the database
  await fetch('http://localhost:3000/tracks', {
    headers: { 'Content-type': 'application/json' },
    method: 'POST',
    body: JSON.stringify(track),
  });
};

module.exports = addTrackToCollection;
