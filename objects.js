class Musician {
    constructor() {
    }
    set fullName(name) {
        if (name.length >= 3 && name.length <= 30) {
            this.name = name;
        } else {
            throw new Error("Name must be between 3 and 30 characters long");
        }
    }
    getfullName() {
        return this.name;
    }

    set hourlyRate(rate) {
        if (rate >= 50) {
            this.rate = rate;
        } else {
            throw new Error("Hourly rate must be equal to or greater than 50");
        }
    }
    gethourlyRate() {
        return this.rate;
    }
    set yearsPlaying(experience)
    {
        if (experience >= 0)
        {
            this.experience = experience;
        } else {
            throw new Error("Experience cannot be 0 or negative");
        }
    }
    getYearsPlaying()
    {
        return this.experience;
    }
    set musicianFact(funFact)
    {
        this.funFact = funFact
    }
    getfunFact()
    {
        return this.funFact
    }

    musicianIntroduction() {
        // Returns the musician's introduction
        return `Hello there, my name is ${this.name} and I'm a ${this.musicianTypeName}.\
  I currently play the ${this.instrumentName} and I have ${this.experience} years of experience. \
  It costs $${this.rate} per hour to hire me. \
  A fun fact about my instrument is: ${this.funFact}`}
}

