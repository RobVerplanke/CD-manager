class CD {
  constructor(title, artist) {
    this.title = title; // Title of the CD
    this.artist = artist; // Name of artist who produced the CD
    this.albums = []; // Album(s) that contain this CD
    this.label = ''; // CD-label when applicable
    this.year = 2024; // Release year
    this.tracks = []; // Tracks on the CD
  }

  // Let the user be able to edit the properties of this CD
  setProperties(title, artist, label, year) {
    this.title = title;
    this.artist = artist;
    this.label = label;
    this.year = year;
  }

  // Add a track to the tracklist
  addTrack(track) {
    this.tracks.push(track);
  }

  // Add a album that contains this CD to the albums list
  addAlbum(album) {
    this.albums.push(album);
  }

  // A list of all the tracks on this CD
  getTracks() {
    return this.tracks;
  }

  // A list of all albums where this CD occurs in
  getAlbums() {
    return this.albums;
  }

  // Remove a track from the tracklist
  removeTrack(track) {
    const index = this.tracks.indexOf(track);
    if (index !== -1) {
      this.tracks.splice(index, 1);
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
