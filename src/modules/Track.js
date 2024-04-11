class Track {
  constructor(title, artist) {
    this.title = title; // Title of the track
    this.artist = artist; // Name of artist who produced the track
    this.cds = []; // CD(s) on which the track occurs
    this.label = ''; // Single-label when applicable
    this.year = 2024; // Release year
    this.length = null; // Total length of track
  }

  // Let the user be able to edit the properties of this track
  setProperties(title, artist, label, year, length) {
    this.title = title;
    this.artist = artist;
    this.label = label;
    this.year = year;
    this.length = length;
  }

  // Add a cd, on which this track occurs, to the cds list
  addCD(cd) {
    this.cds.push(cd);
  }

  // A list of all CD's this track occurs in
  getCDs() {
    return this.cds;
  }

  // Remove a cd, on which this track occurs, from the cds list
  removeCD(cd) {
    const index = this.cds.indexOf(cd);
    if (index !== -1) {
      this.cds.splice(index, 1);
    }
  }
}

module.exports = Track;
