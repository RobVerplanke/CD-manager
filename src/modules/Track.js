class Track {
  constructor(title, artist) {
    this.title = title; // Title of the track
    this.artist = artist; // Name of artist who produced the track
    this.cds = []; // CD(s) on which the track occurs
    this.label = ''; // Single-label when applicable
    this.year = 2024; // Release year
    this.length = null; // Total length of track
  }

  // Let the user be able to edit the title of this track
  setTitle(title) {
    this.title = title;
  }

  // Let the user be able to edit the artist name
  setArtist(artist) {
    this.artist = artist;
  }

  // Let the user be able to edit the label when applicable
  setLabel(label) {
    this.label = label;
  }

  // Let the user be able to edit the release year
  setYear(year) {
    this.year = year;
  }

  // Let the user be able to edit the length of this track
  setLength(length) {
    this.length = length;
  }

  // Add a cd, on which this track occurs, to the cds list
  addCDToTrack(cd) {
    this.cds.push(cd);
  }

  // Remove a cd, on which this track occurs, from the cds list
  removeCDFromTrack(cd) {
    const index = this.cds.indexOf(cd);
    if (index !== -1) {
      this.cds.splice(index, 1);
    }
  }
}

module.exports = Track;
