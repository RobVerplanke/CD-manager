const Album = require('../src/modules/Album.js');
const CD = require('../src/modules/CD.js');

describe('CD', () => {

    it('should exist', () => {
        const newCD = new CD();

        expect(newCD).toBeTruthy();
    });
});