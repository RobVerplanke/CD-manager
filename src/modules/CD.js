class CD {
  constructor(title, artist) {
    this.title = title; // Title of the CD
    this.artist = artist; // Name of artist who produced the CD
    this.collaborators = []; // Other artists
    this.albums = []; // Album(s) that contain this CD
    this.label = ''; // CD-label when applicable
    this.year = null; // Release year
    this.tracks = []; // Tracks on the CD
  }

  // Sends the complete object
  getFullObject() {
    return {
      title: this.title,
      artist: this.artist,
      collaborators: this.collaborators,
      albums: this.albums,
      label: this.label,
      year: this.year,
      tracks: this.tracks,
    };
  }

  // Let the user be able to edit the properties of this CD
  setProperties(title, artist, collaborators, label, year) {
    this.title = title;
    this.artist = artist;
    this.collaborators = collaborators;
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

  // Add collaborators when applicable
  addCollaborator(collab) {
    this.collaborators.push(collab);
  }

  // A list of all the tracks on this CD
  getTracks() {
    return this.tracks;
  }

  // A list of all albums where this CD occurs in
  getAlbums() {
    return this.albums;
  }

  // A list of all other artists who also worked on this CD
  getCollaborators() {
    return this.collaborators;
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

  // Remove a collaborators from the collabs-list
  removeCollaborator(collab) {
    const index = this.collaborators.indexOf(collab);
    if (index !== -1) {
      this.collaborators.splice(index, 1);
    }
  }
}

module.exports = CD;
