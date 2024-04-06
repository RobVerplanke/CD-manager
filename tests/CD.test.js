const CD = require('../src/modules/CD.js');

describe('CD', () => {

    it('should exist', () => {
        const newCD = new CD();

        expect(newCD).toBeTruthy();
    });
});