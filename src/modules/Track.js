class Track {
  constructor(title, artist, year) {
    this.title = title; // Title of the track
    this.artist = artist; // Name of artist who produced the track
    this.cd = []; // CD(s) on which the track occurs
    this.label = ''; // Single-label when applicable
    this.year = year; // Release year
    this.length = null; // Total length of track
  }
}

module.exports = Track;
