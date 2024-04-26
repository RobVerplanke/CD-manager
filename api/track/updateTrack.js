async function updateTrack(trackID, updatedTrackData) {
  // Stap 1: Haal de huidige data op
  const url = `http://localhost:3000/tracks/${trackID}`; // Update URL met trackID
  const result = await fetch(url);
  const track = await result.json();

  if (track) {
    // Stap 2: Vervang het item
    const updatedTrack = { ...track, ...updatedTrackData };

    // Stap 3: Schrijf de bijgewerkte data terug
    await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedTrack),
    });

    console.log(`Track met ID ${trackID} is succesvol bijgewerkt.`);
  } else {
    console.log(`Track met ID ${trackID} is niet gevonden.`);
  }
}

module.exports = updateTrack;
