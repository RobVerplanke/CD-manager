const Album = require('../src/modules/Album.js');

describe('Album', () => {

    it('should exist', () => {
        const newAlbum = new Album();

        expect(newAlbum).toBeTruthy();
    });
});