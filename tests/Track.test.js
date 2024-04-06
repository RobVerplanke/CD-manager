const Track = require('../src/modules/Track.js');

describe('Track', () => {

    it('should exist', () => {
        const newTrack = new Track();

        expect(newTrack).toBeTruthy();
    });
});