class Album {
  constructor() {
    this.title = ''; // Title of the album
    this.artist = ''; // Artist who released the album
    this.label = ''; // Album-label when applicable
    this.year = null; // Release year
    this.cds = []; // CD's in the album
  }

  // Let the user be able to edit the properties of this album
  setProperties(title, artist, label, year) {
    this.title = title;
    this.artist = artist;
    this.label = label;
    this.year = year;
  }

  // Add a CD to current album
  addCD(cd) {
    this.cds.push(cd);
  }

  // A list of all the CD's in this album
  getCDs() {
    return this.cds;
  }

  // Remove a CD from the current album
  removeCD(cd) {
    const index = this.cds.indexOf(cd);
    if (index !== -1) {
      this.cds.splice(index, 1);
    }
  }

}

module.exports = Album;
