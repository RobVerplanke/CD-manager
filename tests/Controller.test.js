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
        
        const iterator = newController.albums.values();

        // Add dummy album to controllers albums storage
        newController.addAlbum(album);

        const firstAlbum = iterator.next().value;
        expect(firstAlbum).toEqual(album);
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

        const iterator = newController.cds.values();

        // Add dummy cd to controllers cds storage
        newController.addCD(cd);

        const firstCD = iterator.next().value;
        expect(firstCD).toEqual(cd);
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

        const iterator = newController.tracks.values();

        // Add dummy track to controllers tracks storage
        newController.addTrack(track);

        const firstTrack = iterator.next().value;
        expect(firstTrack).toEqual(track);
    });

    // it('should be able to remove a album', () => {
    //     const newController = new Controller();

    //     const album = { 
    //         title: 'New title',
    //         artist: 'New artist',
    //         label: 'New label',
    //         year: 1999,
    //         items: [{ cd: 'cd 1' }]  
    //     };

    //     // Add dummy album to controllers albums storage
    //     newController.addAlbum(album);

    //     // Send message to remove the album
    //     newController.removeItem(album);
    // });
});