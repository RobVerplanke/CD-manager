async function getAlbumByID(albumID) {
  const url = 'http://localhost:3000/albums';
  const result = await fetch(url, { timeout: 5000 });
  const data = await result.json();

  const foundAlbum = data.find((album) => album.id === albumID);

  return foundAlbum;
}

module.exports = getAlbumByID;
