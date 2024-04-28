const { getCurrentDate } = require('../../src/components/utils/index.js');

// Add a new album to the collection
const addAlbumToCollection = async () => {

  // Select the form and get all input values
  const form = document.querySelector('#form');

  // Create new album-object
  const album = {
    title: form.title.value,
    artist: form.artist.value,
    year: form.year.value,
    collabs: form.collaborators.value,
    label: form.label.value,
    genre: form.genre.value,
    added: getCurrentDate(),
    rating: form.rating.value,
    info: form.info.value,
    img: form.cover.value,
    views: 0,
  };

  // Add the album-object as string to the database
  await fetch('http://localhost:3000/albums', {
    headers: { 'Content-type': 'application/json' },
    method: 'POST',
    body: JSON.stringify(album),
  });
};

module.exports = addAlbumToCollection;
