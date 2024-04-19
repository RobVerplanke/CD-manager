class Track {
  constructor(title, artist) {
    this.title = title; // Title of the track
    this.artist = artist; // Name of artist who produced the track
    this.collaborators = []; // Other artists
    this.cds = []; // CD(s) on which the track occurs
    this.label = ''; // Single-label when applicable
    this.style = ''; // Style of music
    this.year = null; // Release year
    this.length = null; // Total length of track
  }

  // Sends the complete object
  getFullObject() {
    return {
      title: this.title,
      artist: this.artist,
      collaborators: this.collaborators,
      cds: this.cds,
      label: this.label,
      style: this.style,
      year: this.year,
      length: this.length,
    };
  }

  // Let the user be able to edit the properties of this track
  setProperties(title, artist, collaborators, label, style, year, length) {
    this.title = title;
    this.artist = artist;
    this.collaborators = collaborators;
    this.label = label;
    this.style = style;
    this.year = year;
    this.length = length;
  }

  // Add a cd, on which this track occurs, to the cds list
  addCD(cd) {
    this.cds.push(cd);
  }

  // Add collaborators when applicable
  addCollaborator(collab) {
    this.collaborators.push(collab);
  }

  // A list of all CD's this track occurs in
  getCDs() {
    return this.cds;
  }

  // A list of all other artists who also worked on this track
  getCollaborators() {
    return this.collaborators;
  }

  // Remove a cd, on which this track occurs, from the cds list
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

module.exports = Track;
