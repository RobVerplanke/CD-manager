/* eslint-disable class-methods-use-this */

class Controller {
  constructor() {
    this.albums = []; // Store album when applicable, contains multiple CD's
    this.cds = []; // Store each individual CD so they can be linked to albums as well as to tracks
    this.tracks = []; // Store tracks individually because they can occur on multiple CD's or albums
  }

  // Add a album to the list of owned albums
  addAlbumToCollection(album) {
    this.albums.push(album);
  }

  // Add a CD to the list of owned cds
  addCDToCollection(cd) {
    this.cds.push(cd);
  }

  // Add a track to the list of owned tracks
  addTrackToCollection(track) {
    this.tracks.push(track);
  }

  // Add a CD to a specific album
  addCDToAlbum(album, cd) {
    album.addCD(cd);
  }

  // Add a album, on which the cd occurs on, to the cds albums list
  addAlbumToCD(cd, album) {
    cd.addAlbum(album);
  }

  // Add a track to a specific CD's tracklist
  addTrackToCD(cd, track) {
    cd.addTrack(track);
  }

  // Add a cd to a specific track's cd-list
  addCDToTrack(track, cd) {
    track.addCD(cd);
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

  // Get a list of all the CD's of a specific album
  getCDsFromAlbum(album) {
    return album.getCDs();
  }

  // Get a list of all the trackss of a specific CD
  getTracksFromCD(cd) {
    return cd.getTracks();
  }

  // Get a list of all the albums where a specific CD occurs in
  getAlbumsOfCD(cd) {
    return cd.getAlbums();
  }

  // Get a list of all CD's where a specific track occurs in
  getCDsOfTrack(track) {
    return track.getCDs();
  }

  // Set properties of the selected album
  setAlbumProperties(album, title, artist, label, year) {
    album.setProperties(title, artist, label, year);
  }

  // Set properties of the selected CD
  setCDProperties(cd, title, artist, label, year) {
    cd.setProperties(title, artist, label, year);
  }

  // Set properties of the selected track
  setTrackProperties(track, title, artist, label, year, length) {
    track.setProperties(title, artist, label, year, length);
  }

  // Removes a specific CD from a album
  removeCDFromAlbum(album, cd) {
    album.removeCD(cd);
  }

  // Removes a specific album from the albums collection,
  removeAlbumFromCollection(album) {
    const index = this.albums.indexOf(album);
    if (index !== -1) {
      this.albums.splice(index, 1);
    }
  }

  // Removes a specific CD from the CD's collection,
  removeCDFromCollection(cd) {
    const index = this.cds.indexOf(cd);
    if (index !== -1) {
      this.cds.splice(index, 1);
    }
  }

  // Removes a specific CD from the CD's collection,
  removeAlbumFromCD(cd, album) {
    cd.removeAlbum(album);
  }

  // Removes a specific track from a CD,
  removeTrackFromCD(cd, track) {
    cd.removeTrack(track);
  }

  // Removes a specific track from a CD,
  removeCDFromTrack(track, cd) {
    track.removeCD(cd);
  }
}

module.exports = Controller;
