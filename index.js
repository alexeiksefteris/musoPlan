const prompt = require('prompt-sync')();
const fs = require('fs');
const { Musician, Guitarist, Bassist, Percussionist, Flautist, Troupe } = require('./objects');


function mainMenu() {
    let running = true;

    while (running) {
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

