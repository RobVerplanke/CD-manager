const Controller = require('../src/controller/Controller.js');
const Album = require('../src/modules/Album.js');
const CD = require('../src/modules/CD.js');
const Track = require('../src/modules/Track.js');

afterEach(() => {
    jest.clearAllMocks();
});

describe('Controller', () => {
    
    it('should exist', () => {
        expect(new Controller()).toBeTruthy();
    });
    
    describe('Add items', () => {

        it('should be able to add a album to the collection', () => {
            const controller = new Controller();
            
            // Mock the album
            jest.mock('../src/modules/Album.js');
            const mockAlbum = new Album();
            
            // Add mocked album to controllers albums storage
            controller.addAlbumToCollection(mockAlbum);

            expect(controller.albums[0]).toBe(mockAlbum);
        });

        it('should be able to add a CD to the collection', () => {
            const controller = new Controller();
            
            // Mock the cd
            jest.mock('../src/modules/CD.js');
            const mockCD = new CD();
            
            // Add mocked cd to controllers cd's storage
            controller.addCDToCollection(mockCD);

            expect(controller.cds[0]).toBe(mockCD);
        });

        it('should be able to add a track to the collection', () => {
            const controller = new Controller();
            
            // Mock the cd
            jest.mock('../src/modules/Track.js');
            const mockTrack = new Track();
            
            // Add mocked cd to controllers cd's storage
            controller.addTrackToCollection(mockTrack);

            expect(controller.tracks[0]).toBe(mockTrack);
        });

        it('should be able to add a album to a specific cd', () => {
            
            // Mock the Album and CD class
            jest.mock('../src/modules/CD.js');
            jest.mock('../src/modules/Track.js');
            
            const controller = new Controller();
            const mockAlbum = new Album();
            const mockCD = new CD();

            // Add mocked cd to the mocked album
            controller.addAlbumToCD(mockCD, mockAlbum);

            // CD has the track stored as first item
            expect(mockCD.albums[0]).toBe(mockAlbum);
        });

        it('should be able to add a track to a specific cd', () => {
            
            // Mock the Track and CD class
            jest.mock('../src/modules/CD.js');
            jest.mock('../src/modules/Track.js');
            
            const controller = new Controller();
            const mockCD = new CD();
            const mockTrack = new Track();

            // Add mocked track to the mocked cd
            controller.addTrackToCD(mockCD, mockTrack);

            // CD has the track stored as first item
            expect(mockCD.tracks[0]).toBe(mockTrack);
        });

        it('should be able to add a cd to a specific album', () => {
            
            // Mock the Album and CD class
            jest.mock('../src/modules/CD.js');
            jest.mock('../src/modules/Track.js');
            
            const controller = new Controller();
            const mockAlbum = new Album();
            const mockCD = new CD();

            // Add mocked cd to the mocked album
            controller.addCDToAlbum(mockAlbum, mockCD);

            // The CD is stored in the cds-list of the album
            expect(mockAlbum.cds[0]).toBe(mockCD);
        });

        it('should be able to add a cd to a specific track', () => {
            
            // Mock the Album and CD class
            jest.mock('../src/modules/CD.js');
            jest.mock('../src/modules/Track.js');
            
            const controller = new Controller();
            const mockTrack = new Track();
            const mockCD = new CD();

            // Add mocked CD to the mocked cds-list of the track
            controller.addCDToTrack(mockTrack, mockCD);

            // The CD is stored in the cds-list of the track
            expect(mockTrack.cds[0]).toBe(mockCD);
        });
    });

    describe('Remove items', () => {
       
        it('should be able to remove a album in the collection', () => {
            const controller = new Controller();

            // Mock the album
            jest.mock('../src/modules/Album.js');
            const mockAlbum = new Album();

            // First add the album to the collection
            controller.addAlbumToCollection(mockAlbum);

            // Call the remove method with the album
            controller.removeAlbumFromCollection(mockAlbum);

            // List with albums is empty again
            expect(controller.albums.length).toBe(0);
        });

        it('should be able to remove a cd in the collection', () => {
            const controller = new Controller();

            // Mock the cd
            jest.mock('../src/modules/CD.js');
            const mockCD = new CD();

            // First add the cd to the collection
            controller.addCDToCollection(mockCD);

            // Call the remove method with the CD
            controller.removeCDFromCollection(mockCD);

            // List with cds is empty again
            expect(controller.cds.length).toBe(0);
        });

        it('should be able to remove a track in the collection', () => {
            const controller = new Controller();

            // Mock the cd
            jest.mock('../src/modules/CD.js');
            const mockTrack = new Track();

            // First add the track to the collection
            controller.addCDToCollection(mockTrack);

            // Call the remove method with the CD
            controller.removeCDFromCollection(mockTrack);

            // List with cds is empty again
            expect(controller.tracks.length).toBe(0);
        });

        it('should be able to remove a cd from a album', () => {
            
            // Mock the Track and CD class
            jest.mock('../src/modules/Album.js');
            jest.mock('../src/modules/CD.js');
        
            const controller = new Controller();
            const mockCD = new CD();
            const mockAlbum = new Album();

            // Add a cd to the album
            controller.addCDToAlbum(mockAlbum, mockCD);

            // Remove the cd from the album
            controller.removeCDFromAlbum(mockAlbum, mockCD);

            // List with cds is empty again
            expect(mockAlbum.cds.length).toBe(0);
        });

        it('should be able to remove a album from a cd', () => {
            
            // Mock the Track and CD class
            jest.mock('../src/modules/CD.js');
            jest.mock('../src/modules/Album.js');
        
            const controller = new Controller();
            const mockCD = new CD();
            const mockAlbum = new Track();

            // Add a track to the cd
            controller.addTrackToCD(mockCD, mockAlbum);

            // Remove the album from the cd
            controller.removeAlbumFromCD(mockCD, mockAlbum);

            // List with tracks is empty again
            expect(mockCD.albums.length).toBe(0);
        });

        it('should be able to remove a track from a cd', () => {
            
            // Mock the Track and CD class
            jest.mock('../src/modules/CD.js');
            jest.mock('../src/modules/Track.js');
        
            const controller = new Controller();
            const mockCD = new CD();
            const mockTrack = new Track();

            // Add a track to the CD
            controller.addTrackToCD(mockCD, mockTrack);

            // Remove the track from the CD
            controller.removeTrackFromCD(mockCD, mockTrack);

            // List with tracks is empty again
            expect(mockCD.tracks.length).toBe(0);
        });

        it('should be able to remove a CD from a track', () => {
            
            // Mock the Track and CD class
            jest.mock('../src/modules/CD.js');
            jest.mock('../src/modules/Track.js');
        
            const controller = new Controller();
            const mockCD = new CD();
            const mockTrack = new Track();

            // Add a CD to the track
            controller.addCDToTrack(mockTrack, mockCD);

            // Remove the CD from the track
            controller.removeCDFromTrack(mockTrack, mockCD);

            // List with tracks is empty again
            expect(mockTrack.cds.length).toBe(0);
        });
    });

    describe('Get items', () => {

        it('should be able to return a list of all albums', () => {
            const controller = new Controller();

            // First add a few mock albums
            const albumsAmount = 5;
            for (let i = 0; i < albumsAmount; i++){
                controller.addAlbumToCollection(new Album());
            };

            // Get a array with all the albums
            const albums = controller.getAlbums();

            // Array contains all the albums
            expect(albums.length).toBe(albumsAmount);

        });

        it('should be able to return a list of all CD\'s', () => {
            const controller = new Controller();

            // First add a few mock CD's
            const cdsAmount = 5;
            for (let i = 0; i < cdsAmount; i++){
                controller.addCDToCollection(new CD());
            };

            // Get a array with all the CD's
            const cds = controller.getCDs();

            // Array contains all the CD's
            expect(cds.length).toBe(cdsAmount);

        });

        it('should be able to return a list of all tracks', () => {
            const controller = new Controller();

            // First add a few mock tracks
            const tracksAmount = 5;
            for (let i = 0; i < tracksAmount; i++){
                controller.addTrackToCollection(new CD());
            };

            // Get a array with all the tracks
            const tracks = controller.getTracks();

            // Array contains all the tracks
            expect(tracks.length).toBe(tracksAmount);
        });

        it('should return a list of CD\'s on a specific album', () => {
            
        });

        it('should return a list of tracks of a specific CD', () => {
            
        });

        it('should return a list of albums where a specific CD occurs in', () => {
            
        });

        it('should return a list of CD\'s where a specific track occurs in', () => {
            
        });
    });

    describe('Edit items', () => {

        it('should be able to edit album properties', () => {
            
            // Mock the album
            jest.mock('../src/modules/Album.js');
        
            const controller = new Controller();
            const mockAlbum = new Album();

            // Add a album to the collection
            controller.addAlbumToCollection(mockAlbum);

            // Edit properties


        });
    });
});