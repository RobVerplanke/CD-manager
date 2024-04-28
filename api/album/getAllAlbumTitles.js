// Get the titles of all albums in the collection
async function getAllAlbumTitles() {
  const list = [];

  // Get current data
  const url = 'http://localhost:3000/albums';
  const result = await fetch(url);
  const data = await result.json();

  // Add each title to the list
  data.forEach((album) => {
    list.push([album.title]);
  });

  return list;
}

module.exports = getAllAlbumTitles;
