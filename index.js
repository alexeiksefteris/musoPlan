const prompt = require('prompt-sync')();
const fs = require('fs');
const functions = require("./functions.js")

let musicians = [];

function mainMenu() {
    let running = true;

    while (running) {
        console.log('=======================');
        console.log("\nMusoPlan Menu:");
        console.log("1. Create Musician");
        console.log("2. Create Troupe");
        console.log("3. Add Musician to Troupe");
        console.log("4. Calculate Cost of Deployment");
        console.log("5. Export Troupe Names to Text File");
        console.log("6. Import Troupe Names from Text File");
        console.log("7. Provide Summary Information");
        console.log("8. Provide Detailed Description");
        console.log("9. Exit");

        let choice = prompt("Enter your choice: ");

        switch (choice) {
            case '1':
                functions.createMusician();
                break;
            case '2':
                functions.createTroupe();
                break;
            case '3':
                functions.addMusicianToTroupe();
                break;
            case '4':
                functions.calculateDeploymentCost();
                break;
            case '5':
                functions.exportTroupeNames();
                break;
            case '6':
                importTroupeNames();
                break;
            case '7':
                provideSummaryInfo();
                break;
            case '8':
                provideDetailedDescription();
                break;
            case '9':
                running = false;
                console.log("Exiting program.");
                break;
            default:
                console.log("Invalid choice, please try again.");
        }
    }
}

mainMenu();

//Test