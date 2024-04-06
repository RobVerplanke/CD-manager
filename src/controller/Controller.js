class Controller {
  constructor() {

    this.albums = new Set(); // Store album when applicable which can contain multiple cd's
    this.cds = new Set(); // Store each individual cd so they can be linked to albums as well as to tracks
    this.tracks = new Set(); // Store tracks individually because they can occur in multiple cd's or albums
  }

  // Add a album to the list of owned albums
  addAlbum(album) {
    this.albums.add(album);
  }

  // removeItem(album){

  // }

  // Add a cd to the list of owned cds
  addCD(cd) {
    this.cds.add(cd);
  }

  // Add a track to the list of owned tracks
  addTrack(track) {
    this.tracks.add(track);
  }

}

module.exports = Controller;
