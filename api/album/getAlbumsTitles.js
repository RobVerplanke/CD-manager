async function getAlbumTitles() {
  const list = [];
  const url = 'http://localhost:3000/albums';

  const result = await fetch(url);
  const data = await result.json();


  data.forEach((album) => {
    list.push([album.title]);
  });

  return list;
}

module.exports = getAlbumTitles;
