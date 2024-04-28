// Edit a existing album
async function updateAlbum(AlbumID, updatedAlbumData) {

  // Get current data
  const url = `http://localhost:3000/albums/${AlbumID}`; // Update URL with trackID
  const result = await fetch(url);
  const album = await result.json();

  if (album) {
    // Replace item
    const updatedAlbum = { ...album, ...updatedAlbumData };

    // Write the edited data back
    await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedAlbum),
    });

    console.log(`Album met ID ${AlbumID} is succesvol bijgewerkt.`);
  } else {
    console.log(`Album met ID ${AlbumID} is niet gevonden.`);
  }
}

module.exports = updateAlbum;
