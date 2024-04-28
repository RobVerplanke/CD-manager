// Returns the corresponding album of the given ID
async function getAlbumByID(albumID) {

  // Get current data
  const url = 'http://localhost:3000/albums';
  const result = await fetch(url, { timeout: 5000 });
  const data = await result.json();

  // Select album based on the same ID
  return data.find((album) => album.id === albumID);
}

module.exports = getAlbumByID;
