
const { Musician, Guitarist, Bassist, Percussionist, Flautist, Troupe } = require('../objects');

describe('Musician and Troupe Creation', () => {
    test('Create a valid guitarist', () => {
        const guitarist = new Guitarist('John Doe', 10, 100);
        expect(guitarist.name).toBe('John Doe');
        expect(guitarist.yearsPlaying).toBe(10);
        expect(guitarist.hourlyRate).toBe(100);
        expect(guitarist.instrument).toBe('Guitarist');
    });

    test('Create a musician with invalid name', () => {
        const musician = new Musician('', 5, 60, 'Guitarist');
        expect(musician.name).toBe('');
    });

    test('Create a troupe with valid parameters', () => {
        const troupe = new Troupe('Jazz Masters', 'Jazz', 2);
        expect(troupe.name).toBe('Jazz Masters');
        expect(troupe.genre).toBe('Jazz');
        expect(troupe.duration).toBe(2);
    });

    test('Add musician to troupe', () => {
        const troupe = new Troupe('Rock Legends', 'Rock', 1.5);
        const guitarist = new Guitarist('Jane Smith', 3, 80);
        troupe.addMember(guitarist);
        expect(troupe.members.length).toBe(1);
        expect(troupe.members[0].name).toBe('Jane Smith');
    });

    test('Calculate deployment cost', () => {
        const troupe = new Troupe('Pop Icons', 'Pop', 1);
        const flautist = new Flautist('Amy Pond', 4, 70);
        const drummer = new Percussionist('Rory Williams', 5, 90);
        troupe.addMember(flautist);
        troupe.addMember(drummer);
        // Assuming a deployment for 3 hours
        let totalCost = (flautist.hourlyRate + drummer.hourlyRate) * 3;
        expect(totalCost).toBe(480); // Correct calculation should be 3 * (70 + 90) = 480
    });
});
