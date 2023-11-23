// Import necessary modules and classes
const prompt = require('prompt-sync')(); // Import prompt-sync for user input
const { Guitarist, Bassist, Percussionist, Flautist, Troupe } = require('./objects'); // Import musician and troupe classes
const fs = require('fs');

// Global arrays for storing musicians and troupes
let musicians = []; // Array to store musician objects
let troupes = []; // Array to store troupe objects

// BEGINNING of createMusician function
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

// END of createMusician function

// Function to add a musician to the musicians array
function addMusician(musician) {
    musicians.push(musician); // Add the musician object to the array
}

// Function to get the list of all musicians
function getMusicianList() {
    return musicians; // Return the musicians array
}

// BEGINNING of createTroupe function
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
// END of createTroup function

// BEGINNING of addMusicianToTroupe function
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
// END of addMusicianToTroupe function

//BEGINNING of calculateDeploymentCost function

function calculateDeploymentCost(){
    // Check if there are any troupes available
    if (troupes.length === 0) {
        console.log("No troupes available to deploy.");
        return;
    }

    // Display a list of available troupes
    console.log("Select a troupe to deploy: ");
    troupes.forEach((troupe, index) => {
        console.log(`${index + 1}. ${troupe.name}`);
    });

    // Prompt the user to choose a troupe and validate the input
    let troupeChoice = parseInt(prompt("Enter your choice: "));
    while (isNaN(troupeChoice) || troupeChoice < 1 || troupeChoice > troupes.length ) {
        console.log("Invalid choice. Please select a valid troupe.");
        troupeChoice = parseInt(prompt("Enter your choice: "));
    }

    // Prompt for the duiration of deployment and validate the input
    let duration = parseFloat(prompt("Enter the number of hours for deployment: "));
    while (isNaN(duration) || duration <=0) {
        console.log("Please enter a valid number of hours.");
        duration = parseFloat(prompt("Enter the number of hours for deployment: "));
    }

    // Get the selected troupe based on user choice
    const selectedTroupe = troupes[troupeChoice - 1];

    // Calculate the total cost for deployment
    // This is done by summing the hourly rates of all musicians in the troupe and multiplying them by the duration
    let totalCost = selectedTroupe.members.reduce((acc, musician) => acc + musician.hourlyRate, 0) * duration;

    // Output the total cost
    console.log(`Total cost for deploying ${selectedTroupe.name} for ${duration} hours is: $${totalCost.toFixed(2)}`);

}

//End of the calculateDeploymentCost function

//BEGINNING of exportTroupeNames

function exportTroupeNames() {
    // Check if there are any troupes to export
    if (troupes.length === 0) {
        console.log("No troupes available to export.");
        return;
    }

    // Array to hold lines of text for each troupe
    let lines = [];

    // Iterate over each troupe
    troupes.forEach(troupe => {
        // Add troupe name and genre to the lines array
        lines.push(`Troupe Name: ${troupe.name}`);
        lines.push(`Genre: ${troupe.genre}`);

        // Add a header for musicians
        lines.push(`Musicians:`);

        // Iterate over each musician in the troupe and add their details
        troupe.members.forEach(musician => {
            lines.push(`  - ${musician.name}, ${musician.instrument}`);
        });

        // Add an empty line for better readability in the output file
        lines.push('');
    });

    // Try to write the concatenated lines to a text file
    try {
        fs.writeFileSync('troupes.txt', lines.join('\n')); // Joining array elements with newline character
        console.log("Troupe names exported successfully to 'troupes.txt'.");
    } catch (err) {
        // Catch and log any errors that occur during file writing
        console.error("Error writing to file: " + err.message);
    }
}

//END of exportTroupeNames

//BEGINNING of importTroupeNames

function importTroupeNames() {
    let fileName = prompt("Please enter the name of the .txt file to import troupes from: ");

    // Validate the file name
    if (!fileName.endsWith('.txt')) {
        console.log("Invalid file type. Please enter a .txt file.");
        return;
    }

    try {
        const data = fs.readFileSync(fileName, 'utf8');
        const lines = data.split('\n');

        lines.forEach(line => {
            if (line.trim().length > 0) {
                const newTroupe = new Troupe(line.trim(), 'Default Genre', 1);
                troupes.push(newTroupe); // Troupes should be accessible here
            }
        });

        console.log(`Troupes imported successfully from '${fileName}'.`);
    } catch (err) {
        console.error(`Error reading file '${fileName}': ${err.message}`);
    }
}

//END of importTroupeNames

//Beginning of provideSummaryInfo
function provideSummaryInfo() {
    // Check if there are any troupes
    if (troupes.length === 0) {
        console.log("No troupes are currently available.");
        return;
    }

    // Iterate over each troupe and display its summary
    troupes.forEach((troupe, index) => {
        console.log(`Troupe ${index + 1}:`);
        console.log(`  Name: ${troupe.name}`);
        console.log(`  Genre: ${troupe.genre}`);
        console.log(`  Members:`);

        // Check if there are members in the troupe
        if (troupe.members.length === 0) {
            console.log("    No members in this troupe.");
        } else {
            // List each member and their instrument
            troupe.members.forEach(member => {
                console.log(`    - ${member.name}`);
            });
        }

        console.log(''); // Add a blank line for better readability
    });
}



//BEGINNING of viewTroupes

function viewTroupes() {
    // Check if the troupes array is empty
    if (troupes.length === 0) {
        // If there are no troupes, inform the user
        console.log("No troupes are currently available.");
        return; // Exit the function as there's nothing more to do
    }

    // If there are troupes available, display them
    console.log("Current Troupes:");

    // Iterate over each troupe in the troupes array
    troupes.forEach((troupe, index) => {
        // Print each troupe's details including its name
        console.log(`${index + 1}. ${troupe.name}`);
    });
}











































// Export functions for use in other parts of the application
module.exports = { createMusician, createTroupe, addMusicianToTroupe, getMusicianList,
    calculateDeploymentCost, exportTroupeNames, importTroupeNames, viewTroupes, provideSummaryInfo };


