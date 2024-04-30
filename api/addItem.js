const { getCurrentDate } = require('../src/components/utils/index.js');

// Add a new item to the collection
const addTrackToCollection = async (itemType) => {

  // Select the form and get all input values
  const form = document.querySelector('#form');

  // Create new item-object
  const item = {
    title: form.title.value,
    artist: form.artist.value,
    collabs: form.collaborators.value,
    label: form.label.value,
    added: getCurrentDate(),
    rating: form.rating.value,
    info: form.info.value,
    views: 0,
  };

  // Add additional input fields, that belong to the item-type, to the item-object
  switch (itemType) {
    case 'track':
      item.cds = form.cd.value;
      item.remix = form.remix.value;
      item.style = form.style.value;
      item.length = form.length.value;
      break;

    case 'album':
      item.year = form.year.value;
      item.genre = form.genre.value;
      item.img = form.image.value;
      break;

    case 'cd':
      item.album = form.album.value;
      item.year = form.year.value;
      item.genre = form.genre.value;
      item.image = form.image.value;
      break;

    default:
  }

  // Add the item-object as string to the database
  await fetch(`http://localhost:3000/${itemType}s`, {
    headers: { 'Content-type': 'application/json' },
    method: 'POST',
    body: JSON.stringify(item),
  });
};

module.exports = addTrackToCollection;
