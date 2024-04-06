class Album {
  constructor() {
    this.title = ''; // Title of the album
    this.artist = ''; // Artist who released the album
    this.label = ''; // Album-label when applicable
    this.year = null; // Release year
    this.items = []; // CD's in the album
  }

  addItem(title, artist, label, year, items) {
    this.title = title;
    this.artist = artist;
    this.label = label;
    this.year = year;
    this.items = items;
  }
}

module.exports = Album;
