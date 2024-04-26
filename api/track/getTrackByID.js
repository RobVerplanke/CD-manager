async function getTrackbyID(trackID) {
  const url = 'http://localhost:3000/tracks';
  const result = await fetch(url, { timeout: 5000 });
  const data = await result.json();

  const foundTrack = data.find((track) => track.id === trackID);

  return foundTrack;
}

module.exports = getTrackbyID;
