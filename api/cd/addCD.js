const { getCurrentDate } = require('../../src/components/utils/index.js');

const addCDToCollection = async (e) => {

  const form = document.querySelector('#form');

  e.preventDefault();

  console.log('form', form);

  const cd = {
    album: form.album.value,
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

  await fetch('http://localhost:3000/cds', {
    headers: { 'Content-type': 'application/json' },
    method: 'POST',
    body: JSON.stringify(cd),
  });
};

module.exports = addCDToCollection;
