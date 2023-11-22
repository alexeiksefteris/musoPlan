
const { Musician, Guitarist, Bassist, Percussionist, Flautist, Troupe } = require ('./objects');
const ps = require("prompt-sync");
const prompt = ps();


function createMusician() {
    // Prompt user to enter musician's name and validate the length
    let name = prompt("Enter musician's name (3-30 characters): ");
    while (name.length < 3 || name.length > 30) {
        console.log("Name must be between 3 and 30 characters.");
        name = prompt("Enter musician's name (3-30 characters): ");
    }

    // Prompt user to enter hourly rate and validate the rate (must be a number and at least 50)
    let hourlyRate = prompt("Enter hourly rate (50 or more): ");
    while (isNaN(hourlyRate) || hourlyRate < 50) {
        console.log("Hourly rate must be a number and at least 50.");
        hourlyRate = prompt("Enter hourly rate (50 or more): ");
    }

    // Prompt user to enter years playing and validate (must be a non-negative number)
    let yearsPlaying = prompt("Enter years playing (non-negative number): ");
    while (isNaN(yearsPlaying) || yearsPlaying < 0) {
        console.log("Years playing must be a non-negative number.");
        yearsPlaying = prompt("Enter years playing (non-negative number): ");
    }

    // Display options for musician's instrument
    console.log("Select the musician's instrument:");
    console.log("1. Guitarist");
    console.log("2. Bassist");
    console.log("3. Percussionist");
    console.log("4. Flautist");

    // Prompt user to choose the instrument type
    let instrumentChoice = prompt("Enter your choice (1-4): ");
    let musician;

    // Create the musician object based on the chosen instrument type
    switch (instrumentChoice) {
        case '1':
            musician = new Guitarist(name, yearsPlaying, hourlyRate);
            break;
        case '2':
            musician = new Bassist(name, yearsPlaying, hourlyRate);
            break;
        case '3':
            musician = new Percussionist(name, yearsPlaying, hourlyRate);
            break;
        case '4':
            musician = new Flautist(name, yearsPlaying, hourlyRate);
            break;
        default:
            console.log("Invalid choice. Please enter a number from 1 to 4.");
            return null; // Return null to indicate no musician was created due to invalid choice
    }

    // Output confirmation of musician creation
    console.log(`${musician.instrument} named ${musician.name} created successfully.`);
    return musician; // Return the created musician object
}

//End of createMusician function

//Beginning of createTroupe function
function createTroupe() {
    console.log("Create a New Troupe");
    console.log("Select the genre for the troupe");
    console.log("1. Rock");
    console.log("2. Jazz");
    console.log("3. Pop");

    // Prompt the user to choose the genre
    let genreChoice = prompt("Enter your choice (1 - 3): ");


}






















module.exports = {createMusician}