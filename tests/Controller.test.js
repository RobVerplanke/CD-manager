const Controller = require('../src/controller/Controller.js');

describe('Controller', () => {

    it('should exist', () => {
        const newController = new Controller();

        expect(newController).toBeTruthy();
    });
});