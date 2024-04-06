class Album {
  constructor(title, artist, year) {
    this.title = title; // Title of the album
    this.artist = artist; // Artist who released the album
    this.label = ''; // Album-label when applicable
    this.year = year; // Release year
    this.items = []; // CD's in the album
  }
}

module.exports = Album;
