class CD {
  constructor(title, artist) {
    this.title = title; // Title of the CD
    this.artist = artist; // Name of artist who produced the CD
    this.albums = []; // Album(s) that contain this CD
    this.label = ''; // CD-label when applicable
    this.year = 2024; // Release year
    this.items = []; // Tracks on the CD
  }

  // Let the user be able to edit the title of this CD
  setTitle(title) {
    this.title = title;
  }

  // Let the user be able to edit the artist name
  setArtist(artist) {
    this.artist = artist;
  }

  // Let the user be able to edit the release year
  setYear(year) {
    this.year = year;
  }

  // Add a track to the tracklist
  addItem(track) {
    this.items.push(track);
  }

  // Add a album that contains this CD to the albums list
  addAlbum(album) {
    this.albums.push(album);
  }

  // Remove a track from the tracklist
  removeItem(track) {
    const index = this.items.indexOf(track);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }

  // Remove a album from the albums that contain this CD
  removeAlbum(album) {
    const index = this.albums.indexOf(album);
    if (index !== -1) {
      this.albums.splice(index, 1);
    }
  }
}

module.exports = CD;
