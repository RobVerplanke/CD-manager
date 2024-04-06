class CD {
  constructor(title, artist, year) {
    this.title = title; // Title of the CD
    this.artist = artist; // Name of artist who produced the CD
    this.album = []; // Album(s) the CD belongs to
    this.label = ''; // CD-label when applicable
    this.year = year; // Release year
    this.items = []; // Tracks on the CD
  }
}

module.exports = CD;
