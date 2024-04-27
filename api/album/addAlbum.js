const { getCurrentDate } = require('../../src/components/utils/index.js');

const addAlbumToCollection = async (e) => {

  const form = document.querySelector('#form');

  e.preventDefault();

  console.log('form', form);

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

  await fetch('http://localhost:3000/albums', {
    headers: { 'Content-type': 'application/json' },
    method: 'POST',
    body: JSON.stringify(album),
  });
};

module.exports = addAlbumToCollection;
