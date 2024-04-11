class Album {
  constructor() {
    this.title = ''; // Title of the album
    this.artist = ''; // Artist who released the album
    this.label = ''; // Album-label when applicable
    this.year = null; // Release year
    this.items = []; // CD's in the album
  }

  // Let the user be able to edit the title of this album
  setTitle(title) {
    this.title = title;
  }

  // Let the user be able to edit the artist name
  setArtist(artist) {
    this.artist = artist;
  }

  // Let the user be able to edit the label name
  setLabel(label) {
    this.label = label;
  }

  // Let the user be able to edit the release year
  setYear(year) {
    this.year = year;
  }

  // Add a CD to current album
  addItem(cd) {
    this.items.push(cd);
  }

  // Remove a CD from the current album
  removeItem(cd) {
    const index = this.items.indexOf(cd);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }

}

module.exports = Album;
