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

  // Add a CD to a specific album
  addCDToAlbum(album, cd) {
    album.addItem(cd);
  }

  // Add a track to a specific CD's tracklist
  addTrackToCD(cd, track) {
    cd.addItem(track);
  }

  // Removes a specific track from a CD
  removeTrackFromCD(cd, track) {
    cd.removeItem(track);
  }

  // Removes a specific CD from a album
  removeCDFromAlbum(album, cd) {
    album.removeItem(cd);
  }

  // Removes a specific album from the albums collection
  removeAlbumFromCollection(album) {
    const index = this.albums.indexOf(album);
    if (index !== -1) {
      this.albums.splice(index, 1);
    }
  }

  // Removes a specific CD from the CD's collection
  removeCDFromCollection(cd) {
    const index = this.cds.indexOf(cd);
    if (index !== -1) {
      this.cds.splice(index, 1);
    }
  }
}

module.exports = Controller;
