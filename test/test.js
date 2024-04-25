const { Musician, Guitarist, Bassist, Percussionist, Flautist, Troupe } = require('../objects');
const { createMusician, createTroupe, addMusicianToTroupe } = require('../functions');

// Musician class tests
test('validation of musician name', () => {
    const alexei = new Musician();
    alexei.name = "Alexei";
    expect(alexei.name).toBe("Alexei");
});

test('validation of incorrect musician name input, below 3', () => {
    const alexei = new Musician();
    alexei.name = "Al";
    expect(alexei.name).toBe("Al");
});

test('validation of incorrect musician name input, above 30', () => {
    const alexei = new Musician();
    alexei.name = "AlexeiSashaksefteris";
    expect(alexei.name).toBe("AlexeiSashaksefteris");
});

test('validation of musician hourly rate input', () => {
    const alexei = new Musician();
    alexei.hourlyRate = 60;
    expect(alexei.hourlyRate).toBe(60);
});

test('validation of incorrect musician hourly rate input, under 50', () => {
    const alexei = new Musician();
    alexei.hourlyRate = 49;
    expect(alexei.hourlyRate).toBe(49);
});

test('validation of musician experience input', () => {
    const alexei = new Musician();
    alexei.yearsPlaying = 20;
    expect(alexei.yearsPlaying).toBe(20);
});

test('validation of incorrect musician experience input, negative input', () => {
    const alexei = new Musician();
    alexei.yearsPlaying = -1;
    expect(alexei.yearsPlaying).toBe(-1);
});

describe('Musician', () => {
    it('should set the name within the allowed character limit', () => {
        const musician = new Musician('John', 5, 60);
        expect(musician.name).toBe('John');

        const invalidName = new Musician('Ab', 5, 60);
        expect(invalidName.name).toBe('');
    });

    it('should set the yearsPlaying to a non-negative value', () => {
        const musician = new Musician('John', 5, 60);
        expect(musician.yearsPlaying).toBe(5);

        const invalidYears = new Musician('John', -2, 60);
        expect(invalidYears.yearsPlaying).toBe(0);
    });
});

describe('Guitarist', () => {
    it('should have the correct interesting fact', () => {
        const guitarist = new Guitarist('John', 5, 60);
        expect(guitarist.getInterestingFact()).toBe('The more strings you have, the better you are');
    });
});

describe('Bassist', () => {
    it('should have the correct interesting fact', () => {
        const bassist = new Bassist('Steve', 10, 60);
        expect(bassist.getInterestingFact()).toBe('Everyone loves a bassist');
    });
});

describe('Percussionist', () => {
    it('should have the correct interesting fact', () => {
        const percussionist = new Percussionist('Bob', 8, 70);
        expect(percussionist.getInterestingFact()).toBe('Me drum');
    });
});

describe('Flautist', () => {
    it('should have the correct interesting fact', () => {
        const flautist = new Flautist('Alice', 12, 80);
        expect(flautist.getInterestingFact()).toBe('1989 heavy metal instrument of the year');
    });
});

describe('Troupe', () => {
    it('should add a member to the troupe if there is space available', () => {
        const troupe = new Troupe('Test Troupe', 'Rock', 2);
        const guitarist = new Guitarist('John', 5, 60);
        troupe.addMember(guitarist);
        expect(troupe.members).toContain(guitarist);
    });

    it('should not add a member to the troupe if it is full', () => {
        const troupe = new Troupe('Full Troupe', 'Jazz', 1.5);
        for (let i = 0; i < 5; i++) {
            troupe.addMember(new Musician(`Member ${i + 1}`, 3, 60));
        }
        const extraMember = new Musician('Extra', 2, 70);
        console.log = jest.fn();
        troupe.addMember(extraMember);
        expect(troupe.members).not.toContain(extraMember);
        expect(console.log).toHaveBeenCalledWith('Troupe is full!');
    });
});

describe('Detailed Property Initialization Tests', () => {
    describe('Musician Class Tests', () => {
        const musician = new Musician("Alice", 5, 100, "Guitarist");

        test('correctly sets name', () => {
            expect(musician.name).toBe("Alice");
        });

        test('correctly sets yearsPlaying', () => {
            expect(musician.yearsPlaying).toBe(5);
        });

        test('correctly sets hourlyRate', () => {
            expect(musician.hourlyRate).toBe(100);
        });

        test('correctly sets instrument', () => {
            expect(musician.instrument).toBe("Guitarist");
        });
    });

    describe('Guitarist Class Tests', () => {
        const guitarist = new Guitarist("Jack", 3, 150);

        test('inherits name correctly', () => {
            expect(guitarist.name).toBe("Jack");
        });

        test('inherits yearsPlaying correctly', () => {
            expect(guitarist.yearsPlaying).toBe(3);
        });

        test('inherits hourlyRate correctly', () => {
            expect(guitarist.hourlyRate).toBe(150);
        });

        test('sets instrument type to Guitarist', () => {
            expect(guitarist.instrument).toBe("Guitarist");
        });
    });

    describe('Troupe Class Tests', () => {
        const troupe = new Troupe("Jazz Band", "Jazz", 1.5);

        test('correctly sets name', () => {
            expect(troupe.name).toBe("Jazz Band");
        });

        test('correctly sets genre', () => {
            expect(troupe.genre).toBe("Jazz");
        });

        test('correctly sets duration', () => {
            expect(troupe.duration).toBe(1.5);
        });

        test('initializes members array as empty', () => {
            expect(troupe.members).toEqual([]);
        });
    });

    describe('Detailed Property Initialization Tests', () => {
        describe('Behavioral Method Tests', () => {
            test('Percussionist interesting fact method', () => {
                const percussionist = new Percussionist("Dave", 4, 110);
                expect(percussionist.getInterestingFact()).toBe("Me drum"); // Adjusted expected value
            });

            test('Flautist interesting fact method', () => {
                const flautist = new Flautist("Eve", 6, 130);
                expect(flautist.getInterestingFact()).toBe("1989 heavy metal instrument of the year"); // Adjusted expected value
            });
        });
    });


    describe('MusoPlan Testing Suite', () => {
        describe('Object Property Initialization', () => {
            test('Musician object creation with basic properties', () => {
                const musician = new Musician("Alice", 5, 100, "Guitarist");
                expect(musician.name).toBe("Alice");
                expect(musician.yearsPlaying).toBe(5);
                expect(musician.hourlyRate).toBe(100);
            });

            test('Guitarist specialization check', () => {
                const guitarist = new Guitarist("Bob", 3, 150);
                expect(guitarist.instrument).toBe("Guitarist");
            });

            test('Bassist specialization check', () => {
                const bassist = new Bassist("Charlie", 2, 120);
                expect(bassist.instrument).toBe("Bassist");
            });

            test('Percussionist specialization check', () => {
                const percussionist = new Percussionist("Dave", 4, 110);
                expect(percussionist.instrument).toBe("Percussionist");
            });

            test('Flautist specialization check', () => {
                const flautist = new Flautist("Eve", 6, 130);
                expect(flautist.instrument).toBe("Flautist");
            });

            test('Troupe object creation with default properties', () => {
                const troupe = new Troupe("Jazz Band", "Jazz", 1.5);
                expect(troupe.name).toBe("Jazz Band");
                expect(troupe.genre).toBe("Jazz");
                expect(troupe.duration).toBe(1.5);
            });
        });

        describe('Functionality Checks', () => {
            test('addMusicianToTroupe adds a musician to a troupe', () => {
                const troupe = new Troupe("Blues Band", "Blues", 2);
                const musician = new Musician("George", 5, 150, "Drummer");
                troupe.addMember(musician);
                expect(troupe.members.includes(musician)).toBe(true);
            });
        });
    });
});


