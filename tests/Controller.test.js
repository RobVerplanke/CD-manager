const Controller = require('../src/controller/Controller.js');
const Track = require('../src/modules/Track.js');
const CD = require('../src/modules/CD.js');
const Album = require('../src/modules/Album.js');

afterEach(() => {
    jest.clearAllMocks();
});

describe('Controller', () => {
    
    it('should exist', () => {
        expect(new Controller()).toBeTruthy();
    });
    
    describe('Add items', () => {

        it('should be able to add a album', () => {
            const controller = new Controller();
            
            // Mock the album
            jest.mock('../src/modules/Album.js');
            const mockAlbum = new Album();
            
            // Add mocked album to controllers albums storage
            controller.addAlbumToCollection(mockAlbum);

            expect(controller.albums[0]).toBe(mockAlbum);
        });

        it('should be able to add a CD', () => {
            const controller = new Controller();
            
            // Mock the cd
            jest.mock('../src/modules/CD.js');
            const mockCD = new CD();
            
            // Add mocked cd to controllers cd's storage
            controller.addCDToCollection(mockCD);

            expect(controller.cds[0]).toBe(mockCD);
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
            expect(mockCD.items[0]).toBe(mockTrack);
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

            // CD has the track stored as first item
            expect(mockAlbum.items[0]).toBe(mockCD);
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
            expect(mockAlbum.items.length).toBe(0);
        });

        it('should be able to remove a track from a cd', () => {
            
            // Mock the Track and CD class
            jest.mock('../src/modules/CD.js');
            jest.mock('../src/modules/Track.js');
        
            const controller = new Controller();
            const mockCD = new CD();
            const mockTrack = new Track();

            // Add a track to the cd
            controller.addTrackToCD(mockCD, mockTrack);

            // Remove the track from the cd
            controller.removeTrackFromCD(mockCD, mockTrack);

            // List with tracks is empty again
            expect(mockCD.items.length).toBe(0);
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