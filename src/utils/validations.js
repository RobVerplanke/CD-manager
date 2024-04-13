const Album = require('../modules/Album.js');
const CD = require('../modules/CD.js');
const Track = require('../modules/Track.js');

// Check if the given album is a instance of the Album-class
function instanceOfAlbum(album) {
  if (!(album instanceof Album)) throw new Error('Album is not a Album-instance');
}

// Check if the given CD is a instance of the CD-class
function instanceOfCD(cd) {
  if (!(cd instanceof CD)) throw new Error('CD is not a CD-instance');
}

// Check if the given track is a instance of the Track-class
function instanceOfTrack(track) {
  if (!(track instanceof Track)) throw new Error('Track is not a Track-instance');
}

// validate title, artist, label, year, length

// Check if the given artist name is a valid value
function valueOfTitle(title) {

  // Title is not a string
  if (typeof title !== 'string') throw new Error('Title is not a string');

  // Title is longer than prefered length
  if (title.length > 100) throw new Error('Title is too long');
}

function valueOfArtist(artist) {

}

function valueOfCollaborators(collabs) {

}

function valueOfLabel(label) {

}

function valueOfYear(year) {

}

function valueOfLength(length) {

}

module.exports = {
  instanceOfAlbum,
  instanceOfCD,
  instanceOfTrack,
  valueOfTitle,
  valueOfArtist,
  valueOfCollaborators,
  valueOfLabel,
  valueOfYear,
  valueOfLength,
};
