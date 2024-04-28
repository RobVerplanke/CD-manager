// Returns the corresponding track of the given ID
async function getTrackbyID(trackID) {

  // Get current data
  const url = 'http://localhost:3000/tracks';
  const result = await fetch(url, { timeout: 5000 });
  const data = await result.json();

  // Select track based on the same ID
  return data.find((track) => track.id === trackID);
}

module.exports = getTrackbyID;
