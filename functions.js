// Import necessary modules and classes
const prompt = require('prompt-sync')(); // Import prompt-sync for user input
const { Guitarist, Bassist, Percussionist, Flautist, Troupe } = require('./objects'); // Import musician and troupe classes

// Global arrays for storing musicians and troupes
let musicians = []; // Array to store musician objects
let troupes = []; // Array to store troupe objects

// Function to create and add a musician
function createMusician() {
    // Prompt for musician's name and validate length
    let name = prompt("Enter musician's name (3-30 characters): ");
    while (name.length < 3 || name.length > 30) {
        console.log("Name must be between 3 and 30 characters.");
        name = prompt("Enter musician's name (3-30 characters): ");
    }

    // Prompt musician's hourly rate and validate the value
    let hourlyRate = prompt("Enter hourly rate (50 or more): ");
    while (isNaN(hourlyRate) || hourlyRate < 50) {
        console.log("Hourly rate must be a number and at least 50.");
        hourlyRate = prompt("Enter hourly rate (50 or more): ");
    }

    // Prompt musician's years of playing and validate the value
    let yearsPlaying = prompt("Enter years playing (non-negative number): ");
    while (isNaN(yearsPlaying) || yearsPlaying < 0) {
        console.log("Years playing must be a non-negative number.");
        yearsPlaying = prompt("Enter years playing (non-negative number): ");
    }

    // Display instrument selection options
    console.log("Select the musician's instrument:");
    console.log("1. Guitarist");
    console.log("2. Bassist");
    console.log("3. Percussionist");
    console.log("4. Flautist");

    // Prompt for instrument selection and create corresponding musician
    let instrumentChoice = prompt("Enter your choice (1-4): ");
    let musician; // Variable to store the created musician object

    // Switch case to handle different instrument choices
    switch (instrumentChoice) {
        case '1':
            musician = new Guitarist(name, yearsPlaying, hourlyRate); // Create a guitarist
            break;
        case '2':
            musician = new Bassist(name, yearsPlaying, hourlyRate); // Create a bassist
            break;
        case '3':
            musician = new Percussionist(name, yearsPlaying, hourlyRate); // Create a percussionist
            break;
        case '4':
            musician = new Flautist(name, yearsPlaying, hourlyRate); // Create a flautist
            break;
        default:
            console.log("Invalid choice. Please enter a number from 1 to 4.");
            return null; // Return null if the choice is invalid
    }

    // Add the created musician to the musicians array
    if (musician) {
        musicians.push(musician);
        console.log(`Musician ${musician.name}, a ${musician.instrument}, created successfully.`);
    }

    return musician; // Return the created musician object
}

// Function to add a musician to the musicians array
function addMusician(musician) {
    musicians.push(musician); // Add the musician object to the array
}

// Function to get the list of all musicians
function getMusicianList() {
    return musicians; // Return the musicians array
}

// Function to create a new troupe
function createTroupe() {
    // Display troupe genre selection options
    console.log("Create a New Troupe");
    console.log("Select the genre for the troupe");
    console.log("1. Rock");
    console.log("2. Jazz");
    console.log("3. Pop");

    // Prompt for genre selection and validate the choice
    let genreChoice = prompt("Enter your choice (1 - 3): ");
    while (genreChoice !== '1' && genreChoice !== '2' && genreChoice !== '3') {
        console.log("Invalid choice. Please enter a number from 1 to 3.");
        genreChoice = prompt("Enter your choice (1 - 3): ");
    }

    // Determine the genre based on the choice
    let genre = '';
    switch (genreChoice) {
        case '1':
            genre = 'Rock'; // Set genre to Rock
            break;
        case '2':
            genre = 'Jazz'; // Set genre to Jazz
            break;
        case '3':
            genre = 'Pop'; // Set genre to Pop
            break;
    }

    // Prompt for troupe's name and validate it
    let troupeName = prompt("Enter the troupe's name: ");
    while (troupeName.length === 0) {
        console.log("Troupe name cannot be empty.");
        troupeName = prompt("Enter the troupe's name: ");
    }

    // Prompt for troupe's performance duration and validate it
    let duration = parseFloat(prompt("Enter troupe's performance duration (0.5 - 3 hours): "));
    while (isNaN(duration) || duration < 0.5 || duration > 3){
        console.log("Invalid duration. Please enter a value between 0.5 and 3 hours.");
        duration = parseFloat(prompt("Enter troupe's performance duration (0.5 to 3 hours): "));
    }

    // Create a new troupe and add it to the troupes array
    let troupe = new Troupe(troupeName, genre, duration);
    troupes.push(troupe);
    console.log(`Troupe '${troupeName}' in the genre of ${genre} with a duration of ${duration} hours created successfully.`);
    return troupe; // Return the created troupe object
}

// Function to add a musician to a troupe
function addMusicianToTroupe() {
    // Check if there are musicians and troupes to add to
    if (musicians.length === 0 || troupes.length === 0) {
        console.log("There must be at least one musician and one troupe to proceed.");
        return;
    }

    // Display available musicians for selection
    console.log("Select a musician to add to a troupe:");
    musicians.forEach((musician, index) => {
        console.log(`${index + 1}. ${musician.name}, ${musician.instrument}`);
    });

    // Prompt for musician selection and validate it
    let musicianChoice = parseInt(prompt("Enter your choice: "));
    while (isNaN(musicianChoice) || musicianChoice < 1 || musicianChoice > musicians.length) {
        console.log("Invalid choice. Please select a valid musician.");
        musicianChoice = parseInt(prompt("Enter your choice: "));
    }

    // Display available troupes for selection
    console.log("Select a troupe to add the musician to:");
    troupes.forEach((troupe, index) => {
        console.log(`${index + 1}. ${troupe.name}`);
    });

    // Prompt for troupe selection and validate it
    let troupeChoice = parseInt(prompt("Enter your choice: "));
    while (isNaN(troupeChoice) || troupeChoice < 1 || troupeChoice > troupes.length) {
        console.log("Invalid choice. Please select a valid troupe.");
        troupeChoice = parseInt(prompt("Enter your choice: "));
    }

    // Add the selected musician to the chosen troupe
    troupes[troupeChoice - 1].addMember(musicians[musicianChoice - 1]);
    console.log(`Musician ${musicians[musicianChoice - 1].name} added to troupe ${troupes[troupeChoice - 1].name}.`);
}

// Export functions for use in other parts of the application
module.exports = { createMusician, createTroupe, addMusicianToTroupe, getMusicianList };


