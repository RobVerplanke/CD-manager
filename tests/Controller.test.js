const Controller = require('../src/controller/Controller.js');
// const Album = require('../src/modules/Album.js');


describe('Controller', () => {

    it('should exist', () => {
        const newController = new Controller();

        expect(newController).toBeTruthy();
    });

    it('should be able to add a album', () => {
        const newController = new Controller();

        const album = { 
            title: 'New title',
            artist: 'New artist',
            label: 'New label',
            year: 1999,
            items: [{ cd: 'cd 1' }]  
        };

        // Add dummy album to controllers albums storage
        newController.addAlbum(album);

        expect(newController.albums.length).toBe(1); // Stored a album

        expect(newController.albums[0].title).toBe('New title');
        expect(newController.albums[0].artist).toBe('New artist');
        expect(newController.albums[0].label).toBe('New label');
        expect(newController.albums[0].year).toBe(1999);
        expect(newController.albums[0].items.length).toBe(1);
    });

    it('should be able to add a CD', () => {
        const newController = new Controller();

        const cd = { 
            title: 'New title',
            artist: 'New artist',
            album: [{ album: 'Album one' }],
            label: 'New label',
            year: 2002,
            items: [{ tracks: 'track 1' }]  
        };

        // Add dummy cd to controllers albums storage
        newController.addCD(cd);

        expect(newController.cds.length).toBe(1); // Stored a cd

        expect(newController.cds[0].title).toBe('New title');
        expect(newController.cds[0].artist).toBe('New artist');
        expect(newController.cds[0].album.length).toBe(1);
        expect(newController.cds[0].label).toBe('New label');
        expect(newController.cds[0].year).toBe(2002);
        expect(newController.cds[0].items.length).toBe(1);
    });

    it('should be able to add a track', () => {
        const newController = new Controller();

        const track = { 
            title: 'New title',
            artist: 'New artist',
            cd: [{ cd: 'CD one' }],
            label: 'New label',
            year: 2004,
            length: 5.3
        };

        // Add dummy cd to controllers albums storage
        newController.addTrack(track);

        expect(newController.tracks.length).toBe(1); // Stored a cd

        expect(newController.tracks[0].title).toBe('New title');
        expect(newController.tracks[0].artist).toBe('New artist');
        expect(newController.tracks[0].cd.length).toBe(1);
        expect(newController.tracks[0].label).toBe('New label');
        expect(newController.tracks[0].year).toBe(2004);
        expect(newController.tracks[0].length).toBe(5.3);
    });
});