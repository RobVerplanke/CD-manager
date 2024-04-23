const currentDate = require('../../src/utils/common.js');

const addTrackToCollection = async (e) => {

  const form = document.querySelector('#form');

  e.preventDefault();

  const track = {
    cds: form.cd.value,
    title: form.title.value,
    artist: form.artist.value,
    remix: form.remix.value,
    collabs: form.collaborators.value,
    label: form.label.value,
    style: form.style.value,
    length: form.length.value,
    added: currentDate(),
    rating: form.rating.value,
    info: form.info.value,
    views: 0,
  };

  await fetch('http://localhost:3000/tracks', {
    headers: { 'Content-type': 'application/json' },
    method: 'POST',
    body: JSON.stringify(track),
  });
};

module.exports = addTrackToCollection;
