// Test only functions that cause side-effects,
// not private methods and outgoing query-messages

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

        it('should throw error if given album is not a Album-instance', () => {
            const controller = new Controller();
            
            // Mock a CD to provide a invalid object-instance
            jest.mock('../src/modules/CD.js');
            const mockCD = new CD();
            
            // Try to add the mocked CD to controllers album-storage
            expect(() => {controller.addAlbumToCollection(mockCD)}).toThrow('Album is not a Album-instance');
        });

        it('should throw error if given CD is not a CD-instance', () => {
            const controller = new Controller();
            
            // Mock a album to provide a invalid object-instance
            jest.mock('../src/modules/Album.js');
            const mockAlbum = new Album();
            
            // Try to add the mocked album to controllers CD-storage
            expect(() => {controller.addCDToCollection(mockAlbum)}).toThrow('CD is not a CD-instance');
        });

        it('should throw error if given track is not a Track-instance', () => {
            const controller = new Controller();
            
            // Mock a album to provide a invalid object-instance
            jest.mock('../src/modules/Album.js');
            const mockAlbum = new Album();
            
            // Try to add the mocked album to controllers track-storage
            expect(() => {controller.addTrackToCollection(mockAlbum)}).toThrow('Track is not a Track-instance');
        });

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

        it('should be able to add a collaborator to a specific album', () => {
            
            // Mock the Album class
            jest.mock('../src/modules/Album.js');
            
            const controller = new Controller();
            const mockAlbum = new Album();

            // Add mocked album to the albums list
            controller.addAlbumToCollection(mockAlbum);

            // Add a dummy collaborator
            controller.addCollabToAlbum(mockAlbum, 'Dummy artist');

            // The dummy collaborator is stored in the collaborators list
            expect(mockAlbum.collaborators[0]).toBe('Dummy artist');
        });

        it('should be able to add a collaborator to a specific CD', () => {
            
            // Mock the CD class
            jest.mock('../src/modules/CD.js');
            
            const controller = new Controller();
            const mockCD = new CD();

            // Add mocked CD to the CDs list
            controller.addCDToCollection(mockCD);

            // Add a dummy collaborator
            controller.addCollabToCD(mockCD, 'Dummy artist');

            // The dummy collaborator is stored in the collaborators list
            expect(mockCD.collaborators[0]).toBe('Dummy artist');
        });

        it('should be able to add a collaborator to a specific track', () => {
            
            // Mock the track class
            jest.mock('../src/modules/Track.js');
            
            const controller = new Controller();
            const mockTrack = new Track();

            // Add mocked track to the tracks list
            controller.addTrackToCollection(mockTrack);

            // Add a dummy collaborator
            controller.addCollabToTrack(mockTrack, 'Dummy artist');

            // The dummy collaborator is stored in the collaborators list
            expect(mockTrack.collaborators[0]).toBe('Dummy artist');
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

            // Mock the track
            jest.mock('../src/modules/Track.js');
            const mockTrack = new Track();

            // First add the track to the collection
            controller.addTrackToCollection(mockTrack);

            // Call the remove method with the CD
            controller.removeTrackFromCollection(mockTrack);

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
            
            // Mock the CD and Album class
            jest.mock('../src/modules/CD.js');
            jest.mock('../src/modules/Album.js');
        
            const controller = new Controller();
            const mockCD = new CD();
            const mockAlbum = new Album();

            // Add the album to the cd
            controller.addAlbumToCD(mockCD, mockAlbum);

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

            // Add the CD to the track
            controller.addCDToTrack(mockTrack, mockCD);

            // Remove the CD from the track
            controller.removeCDFromTrack(mockTrack, mockCD);

            // List with tracks is empty again
            expect(mockTrack.cds.length).toBe(0);
        });

        it('should be able to remove a collaborator from a album', () => {
            
            // Mock the Album class
            jest.mock('../src/modules/Album.js');
        
            const controller = new Controller();
            const mockAlbum = new Album();

            // Add two collaborators to the album
            mockAlbum.addCollaborator('artist 2');
            mockAlbum.addCollaborator('artist 3');

            // Add a album to the collection
            controller.addAlbumToCollection(mockAlbum);

            // Remove second collaborator from the album
            controller.removeCollabFromAlbum(mockAlbum, 'artist 3');

            // Collaborators list only contains the first collaborator
            expect(mockAlbum.collaborators.length).toBe(1);
            expect(mockAlbum.collaborators[0]).toBe('artist 2');
        });

        it('should be able to remove a collaborator from a CD', () => {
            
            // Mock the CD class
            jest.mock('../src/modules/CD.js');
        
            const controller = new Controller();
            const mockCD = new CD();

            // Add two collaborators to the CD
            mockCD.addCollaborator('artist 2');
            mockCD.addCollaborator('artist 3');

            // Add the CD to the collection
            controller.addCDToCollection(mockCD);

            // Remove second collaborator from the CD
            controller.removeCollabFromCD(mockCD, 'artist 3');

            // Collaborators list only contains the first collaborator
            expect(mockCD.collaborators.length).toBe(1);
            expect(mockCD.collaborators[0]).toBe('artist 2');
        });

        it('should be able to remove a collaborator from a track', () => {
            
            // Mock the Track class
            jest.mock('../src/modules/Track.js');
        
            const controller = new Controller();
            const mockTrack = new Track();

            // Add two collaborators to the Track
            mockTrack.addCollaborator('artist 2');
            mockTrack.addCollaborator('artist 3');

            // Add the Track to the collection
            controller.addTrackToCollection(mockTrack);

            // Remove second collaborator from the Track
            controller.removeCollabFromTrack(mockTrack, 'artist 3');

            // Collaborators list only contains the first collaborator
            expect(mockTrack.collaborators.length).toBe(1);
            expect(mockTrack.collaborators[0]).toBe('artist 2');
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
            controller.setAlbumProperties(
                mockAlbum,
                'edited title',
                'edited artist',
                ['artist2', 'artist 3'],
                'edited label',
                1999
            );

            // First (and only) album's properties are edited
            expect(controller.albums[0].title).toBe('edited title');
            expect(controller.albums[0].artist).toBe('edited artist');
            expect(controller.albums[0].collaborators).toEqual(['artist2', 'artist 3']);
            expect(controller.albums[0].label).toBe('edited label');
            expect(controller.albums[0].year).toBe(1999);
        });

        it('should be able to edit CD properties', () => {
            
            // Mock the CD
            jest.mock('../src/modules/CD.js');
        
            const controller = new Controller();
            const mockCD = new CD();

            // Add a CD to the collection
            controller.addCDToCollection(mockCD);

            // Edit properties
            controller.setCDProperties(
                mockCD,
                'edited title',
                'edited artist',
                ['artist2', 'artist 3'],
                'edited label',
                1998
            );

            // First (and only) CD's properties are edited
            expect(controller.cds[0].title).toBe('edited title');
            expect(controller.cds[0].artist).toBe('edited artist');
            expect(controller.cds[0].collaborators).toEqual(['artist2', 'artist 3']);
            expect(controller.cds[0].label).toBe('edited label');
            expect(controller.cds[0].year).toBe(1998);
        });

        it('should be able to edit track properties', () => {
            
            // Mock the track
            jest.mock('../src/modules/Track.js');
        
            const controller = new Controller();
            const mockTrack = new Track();

            // Add a track to the collection
            controller.addTrackToCollection(mockTrack);

            // Edit properties
            controller.setTrackProperties(
                mockTrack,
                'edited title',
                'edited artist',
                ['artist2', 'artist 3'],
                'edited label',
                1997,
                3.50
            );

            // First (and only) CD's properties are edited
            expect(controller.tracks[0].title).toBe('edited title');
            expect(controller.tracks[0].artist).toBe('edited artist');
            expect(controller.tracks[0].collaborators).toEqual(['artist2', 'artist 3']);
            expect(controller.tracks[0].label).toBe('edited label');
            expect(controller.tracks[0].year).toBe(1997);
            expect(controller.tracks[0].length).toBe(3.50);
        });
    });
});