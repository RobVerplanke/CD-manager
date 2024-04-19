class Album {
  constructor() {
    this.title = ''; // Title of the album
    this.artist = ''; // Artist who released the album
    this.collaborators = []; // Other artists
    this.label = ''; // Album-label when applicable
    this.genre = ''; // Type of music
    this.year = null; // Release year
    this.cds = []; // CD's in the album
  }

  // Sends the complete object
  getFullObject() {
    return {
      title: this.title,
      artist: this.artist,
      collaborators: this.collaborators,
      label: this.label,
      genre: this.genre,
      year: this.year,
      cds: this.cds,
    };
  }

  // Let the user be able to edit the properties of this album
  setProperties(title, artist, collaborators, label, genre, year) {
    this.title = title;
    this.artist = artist;
    this.collaborators = collaborators;
    this.label = label;
    this.genre = genre;
    this.year = year;
  }

  // Add a CD to current album
  addCD(cd) {
    this.cds.push(cd);
  }

  // Add collaborators when applicable
  addCollaborator(collab) {
    this.collaborators.push(collab);
  }

  // A list of all the CD's in this album
  getCDs() {
    return this.cds;
  }

  // A list of all other artists who also worked on this album
  getCollaborators() {
    return this.collaborators;
  }

  // Remove a CD from the current album
  removeCD(cd) {
    const index = this.cds.indexOf(cd);
    if (index !== -1) {
      this.cds.splice(index, 1);
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

module.exports = Album;
