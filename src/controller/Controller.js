/* eslint-disable class-methods-use-this */

const validations = require('../utils/validations.js');

class Controller {
  constructor() {
    this.albums = []; // Store album when applicable, contains multiple CD's
    this.cds = []; // Store each individual CD so they can be linked to albums as well as to tracks
    this.tracks = []; // Store tracks individually because they can occur on multiple CD's or albums
  }

  // Add a album to the list of owned albums
  addAlbumToCollection(album) {
    validations.instanceOfAlbum(album);

    this.albums.push(album);
  }

  // Add a CD to the list of owned cds
  addCDToCollection(cd) {
    validations.instanceOfCD(cd);

    this.cds.push(cd);
  }

  // Add a track to the list of owned tracks
  addTrackToCollection(track) {
    validations.instanceOfTrack(track);

    this.tracks.push(track);
  }

  // Add a CD to a specific album
  addCDToAlbum(album, cd) {
    validations.instanceOfAlbum(album);
    validations.instanceOfCD(cd);

    album.addCD(cd);
  }

  // Add a album, on which the cd occurs on, to the cds album list
  addAlbumToCD(cd, album) {
    validations.instanceOfCD(cd);
    validations.instanceOfAlbum(album);

    cd.addAlbum(album);
  }

  // Add a track to a specific CD's track list
  addTrackToCD(cd, track) {
    validations.instanceOfCD(cd);
    validations.instanceOfTrack(track);

    cd.addTrack(track);
  }

  // Add a cd to a specific track's cd list
  addCDToTrack(track, cd) {
    validations.instanceOfTrack(track);
    validations.instanceOfCD(cd);

    track.addCD(cd);
  }

  // Add collaborator to a ablum
  addCollabToAlbum(album, collab) {
    validations.instanceOfAlbum(album);
    validations.valueOfArtist(collab);

    album.addCollaborator(collab);
  }

  // Add collaborator to a CD
  addCollabToCD(cd, collab) {
    validations.instanceOfCD(cd);
    validations.valueOfArtist(collab);

    cd.addCollaborator(collab);
  }

  // Add collaborator to a track
  addCollabToTrack(track, collab) {
    validations.instanceOfTrack(track);
    validations.valueOfArtist(collab);

    track.addCollaborator(collab);
  }

  // Get a overview of all ablums in the collection
  getAlbums() {
    return this.albums;
  }

  // Get a overview of all CD's in the collection
  getCDs() {
    return this.cds;
  }

  // Get a overview of all tracks in the collection
  getTracks() {
    return this.tracks;
  }

  // Get a complete album object
  getFullAlbum(album) {
    album.getFullObject();
  }

  // Get a complete CD object
  getFullCD(cd) {
    cd.getFullObject();
  }

  // Get a complete track object
  getFullTrack(track) {
    track.getFullObject();
  }

  // Get a list of all the CD's of a specific album
  getCDsFromAlbum(album) {
    validations.instanceOfAlbum(album);

    return album.getCDs();
  }

  // Get a list of all the trackss of a specific CD
  getTracksFromCD(cd) {
    validations.instanceOfCD(cd);

    return cd.getTracks();
  }

  // Get a list of all the albums where a specific CD occurs in
  getAlbumsOfCD(cd) {
    validations.instanceOfCD(cd);

    return cd.getAlbums();
  }

  // Get a list of all CD's where a specific track occurs in
  getCDsOfTrack(track) {
    validations.instanceOfTrack(track);

    return track.getCDs();
  }

  // Set properties of the selected album
  setAlbumProperties(album, title, artist, collaborators, label, year) {

    // Validate arguments
    validations.instanceOfAlbum(album);
    validations.valueOfTitle(title);
    validations.valueOfArtist(artist);
    validations.valueOfCollaborators(collaborators);
    validations.valueOfLabel(label);
    validations.valueOfYear(year);

    // Send changes to the corresponding album
    album.setProperties(title, artist, collaborators, label, year);
  }

  // Set properties of the selected CD
  setCDProperties(cd, title, artist, collaborators, label, year) {

    // Validate arguments
    validations.instanceOfCD(cd);
    validations.valueOfTitle(title);
    validations.valueOfArtist(artist);
    validations.valueOfCollaborators(collaborators);
    validations.valueOfLabel(label);
    validations.valueOfYear(year);

    // Send changes to the corresponding CD
    cd.setProperties(title, artist, collaborators, label, year);
  }

  // Set properties of the selected track
  setTrackProperties(track, title, artist, collaborators, label, year, length) {

    // Validate arguments
    validations.instanceOfTrack(track);
    validations.valueOfTitle(title);
    validations.valueOfArtist(artist);
    validations.valueOfCollaborators(collaborators);
    validations.valueOfLabel(label);
    validations.valueOfYear(year);
    validations.valueOfLength(length);

    // Set properties of the selected track
    track.setProperties(title, artist, collaborators, label, year, length);
  }

  // Removes a specific album from the collection
  removeAlbumFromCollection(album) {
    validations.instanceOfAlbum(album);

    const index = this.albums.indexOf(album);
    if (index !== -1) {
      this.albums.splice(index, 1);
    }
  }

  // Removes a specific CD from the collection
  removeCDFromCollection(cd) {
    validations.instanceOfCD(cd);

    const index = this.cds.indexOf(cd);
    if (index !== -1) {
      this.cds.splice(index, 1);
    }
  }

  // Removes a specific track from the collection
  removeTrackFromCollection(track) {
    validations.instanceOfTrack(track);

    const index = this.tracks.indexOf(track);
    if (index !== -1) {
      this.tracks.splice(index, 1);
    }
  }

  // Removes a specific CD from a album
  removeCDFromAlbum(album, cd) {
    validations.instanceOfAlbum(album);
    validations.instanceOfCD(cd);

    album.removeCD(cd);
  }

  // Removes a specific album from a CD
  removeAlbumFromCD(cd, album) {
    validations.instanceOfCD(cd);
    validations.instanceOfAlbum(album);

    cd.removeAlbum(album);
  }

  // Removes a specific track from a CD
  removeTrackFromCD(cd, track) {
    validations.instanceOfCD(cd);
    validations.instanceOfTrack(track);

    cd.removeTrack(track);
  }

  // Removes a specific CD from a track
  removeCDFromTrack(track, cd) {
    validations.instanceOfTrack(track);
    validations.instanceOfCD(cd);

    track.removeCD(cd);
  }

  // Removes a collaborator from a album
  removeCollabFromAlbum(album, collab) {
    validations.instanceOfAlbum(album);
    validations.valueOfArtist(collab);

    album.removeCollaborator(collab);
  }

  // Removes a collaborator from a CD
  removeCollabFromCD(cd, collab) {
    validations.instanceOfCD(cd);
    validations.valueOfArtist(collab);

    cd.removeCollaborator(collab);
  }

  // Removes a collaborator from a track
  removeCollabFromTrack(track, collab) {
    validations.instanceOfTrack(track);
    validations.valueOfArtist(collab);

    track.removeCollaborator(collab);
  }
}

module.exports = Controller;
