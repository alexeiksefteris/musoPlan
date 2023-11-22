
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

// Function to create a new troupe
function createTroupe() {
    // Displaying options to the user for selecting a troupe genre
    console.log("Create a New Troupe");
    console.log("Select the genre for the troupe");
    console.log("1. Rock");
    console.log("2. Jazz");
    console.log("3. Pop");

    // Prompt the user to choose a genre from the options
    let genreChoice = prompt("Enter your choice (1 - 3): ");

    // Validate the user's genre choice to ensure it's either 1, 2, or 3
    while (genreChoice !== '1' && genreChoice !== '2' && genreChoice !== '3') {
        console.log("Invalid choice. Please enter a number from 1 to 3.");
        genreChoice = prompt("Enter your choice (1 - 3): ");
    }

    // Convert the numeric choice to a genre string
    let genre = '';
    switch (genreChoice) {
        case '1':
            genre = 'Rock';
            break;
        case '2':
            genre = 'Jazz';
            break;
        case '3':
            genre = 'Pop';
            break;
    }

    // Prompt the user to enter the name of the troupe
    let troupeName = prompt("Enter the troupe's name: ");
    // Ensure that the troupe name is not empty
    while (troupeName.length === 0) {
        console.log("Troupe name cannot be empty.");
        troupeName = prompt("Enter the troupe's name: ");
    }

    // Prompt the user to enter the troupe's performance duration
    let duration = parseFloat(prompt("Enter troupe's performance duration (0.5 - 3 hours): "));
    // Validate that the duration is a number and is within the allowed range
    while (isNaN(duration) || duration < 0.5 || duration > 3){
        console.log("Invalid duration. Please enter a value between 0.5 and 3 hours.");
        duration = parseFloat(prompt("Enter troupe's performance duration (0.5 to 3 hours): "));
    }

    // Notify the user that the troupe has been created successfully
    console.log(`Troupe '${troupeName}' in the genre of ${genre} with a duration of ${duration} hours created successfully.`);
    // Create a new troupe object with the provided details and return it
    return new Troupe(troupeName, genre, duration);
}
//End of addMusicianToTroupe function
























module.exports = {createMusician, createTroupe}