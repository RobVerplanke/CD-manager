async function updateAlbum(AlbumID, updatedAlbumData) {
  // Stap 1: Haal de huidige data op
  const url = `http://localhost:3000/albums/${AlbumID}`; // Update URL met trackID
  const result = await fetch(url);
  const album = await result.json();

  if (album) {
    // Stap 2: Vervang het item
    const updatedAlbum = { ...album, ...updatedAlbumData };

    // Stap 3: Schrijf de bijgewerkte data terug
    await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedAlbum),
    });

    console.log(`CD met ID ${AlbumID} is succesvol bijgewerkt.`);
  } else {
    console.log(`CD met ID ${AlbumID} is niet gevonden.`);
  }
}

module.exports = updateAlbum;
