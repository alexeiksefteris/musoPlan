const prompt = require('prompt-sync')(); // Includes the prompt-sync module for user input
const fs = require('fs'); // Includes the file system module for file operations

// Defines the parent class for musicians with basic property validation
class Musician {
    constructor(name, yearsPlaying, hourlyRate, instrument) {
        // Validates and sets the musician's name, ensuring it's within the character limit
        this.name = name.length >= 3 && name.length <= 30 ? name : 'Unknown';
        // Ensures years playing is a non-negative number
        this.yearsPlaying = yearsPlaying >= 0 ? yearsPlaying : 0;
        // Ensures hourly rate is not less than 50
        this.hourlyRate = hourlyRate > 50 ? hourlyRate : 50;
        // Sets the type of instrument the musician plays
        this.instrument = instrument;
    }
}

// Extension of Musician class for guitarists
class Guitarist extends Musician {
    constructor(name, yearsPlaying, hourlyRate) {
        // Calls the parent constructor with 'Guitarist' as the instrument type
        super(name, yearsPlaying, hourlyRate, 'Guitarist');
    }

    // Returns a unique interesting fact about guitarists
    getInterestingFact() {
        return "The more strings you have, the better you are";
    }
}

// Extension of Musician class for bassists
class Bassist extends Musician {
    constructor(name, yearsPlaying, hourlyRate) {
        // Calls the parent constructor with 'Bassist' as the instrument type
        super(name, yearsPlaying, hourlyRate, 'Bassist');
    }

    // Returns a unique interesting fact about bassists
    getInterestingFact() {
        return "Everyone loves a bassist";
    }
}

// Extension of Musician class for percussionists
class Percussionist extends Musician {
    constructor(name, yearsPlaying, hourlyRate) {
        // Calls the parent constructor with 'Percussionist' as the instrument type
        super(name, yearsPlaying, hourlyRate, 'Percussionist');
    }

    // Returns a unique interesting fact about percussionists
    getInterestingFact() {
        return "Me drum";
    }
}

