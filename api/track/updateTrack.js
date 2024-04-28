// Edit a existing track
async function updateTrack(trackID, updatedTrackData) {

  // Get current data
  const url = `http://localhost:3000/tracks/${trackID}`; // Update URL with trackID
  const result = await fetch(url);
  const track = await result.json();

  if (track) {
    // Replace item
    const updatedTrack = { ...track, ...updatedTrackData };

    // Write the edited data back
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
