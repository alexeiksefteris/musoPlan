# MusoPlan Test Report

## Function  Test 1: Create a musician

### Testing Instructions:
1. From the main menu, select the option to create a musician.
2. When prompted, enter the name of the musician.
3. When prompted, enter the hourly rate for the musician.
4. When prompted, enter the years of experience the musician has.
5. When prompted, select the instrument that the musician plays.

### Test Scenario: Valid Musician Creation

#### Inputs and Actions

1. Select 'Create Musician' from the main menu.
2. Enter the name 'Emma'.
3. Enter the hourly rate '50'.
4. Enter the years of experience '3'.
5. Select 'Guitarist' from the instrument options.

#### Expected and Actual Output

| Action                    | Input                                               | Expected Output                                     | Actual Output                                       |
|---------------------------|-----------------------------------------------------|-----------------------------------------------------|-----------------------------------------------------|
| Choose to create musician | '1'                                                 | Prompt for musician's name                          | Prompt for musician's name                          |
| Enter name                | 'Emma'                                              | Prompt for hourly rate                              | Prompt for hourly rate                              |
| Enter hourly rate         | '50'                                                | Prompt for years of experience                      | Prompt for years of experience                      |
| Enter years playing       | '3'                                                 | Prompt for instrument choice                        | Prompt for instrument choice                        |
| Choose instrument         | '1'                                                 | 'Musician Emma, a Guitarist, created successfully.' | 'Musician Emma, a Guitarist, created successfully.' |     
| '3'                       |                                                     |                                                     |                                                     |
| '1'                       | 'Musician Emma, a Guitarist, created successfully.' | 'Musician Emma, a Guitarist, created successfully.' |                                                     |

### Test Scenario 2: Invalid Name Length

| Action                    | Input | Expected Output                                            | Actual Output                                              |
|---------------------------|-------|------------------------------------------------------------|------------------------------------------------------------|
| Choose to create musician | '1'   | Prompt for musician's name                                 | Prompt for musician's name                                 |
| Enter invalid name        | 'Em'  | 'Invalid input. Name must be between 3 and 30 characters.' | 'Invalid input. Name must be between 3 and 30 characters.' |


## Function  Test 2: Create Troupe

### Testing Instructions:
1. Select 'Create Troupe' from the main menu.
2. Choose a genre for the troupe.
3. Enter the troupe's name.
4. Enter the troupe's performance duration.

### Scenario 1: Valid Troupe Creation

Action                      | Input          | Expected Output                                                                            | Actual Output
----------------------------|----------------|--------------------------------------------------------------------------------------------|----------------
Choose to create troupe     | '2'            | Prompt to select a genre                                                                   | Prompt to select a genre
Select genre                | '1' for Rock   | Prompt to enter troupe's name                                                              | Prompt to enter troupe's name
Enter troupe name           | 'Rock Stars'   | Prompt to enter troupe's performance duration                                              | Prompt to enter troupe's performance duration
Enter performance duration  | '2'            | Troupe 'Rock Stars' in the genre of Rock with a duration of 2 hours created successfully.  | Troupe 'Rock Stars' in the genre of Rock with a duration of 2 hours created successfully.

### Scenario 2: Invalid Duration

Action                      | Input          | Expected Output                                               | Actual Output
----------------------------|----------------|---------------------------------------------------------------|----------------
Choose to create troupe     | '2'            | Prompt to select a genre                                      | Prompt to select a genre
Select genre                | '2' for Jazz   | Prompt to enter troupe's name                                 | Prompt to enter troupe's name
Enter troupe name           | 'Jazz Ensemble'| Prompt to enter troupe's performance duration                 | Prompt to enter troupe's performance duration
Enter invalid duration      | '4'            | 'Invalid duration. Duration must be between 0.5 and 3 hours.' | 'Invalid duration. Duration must be between 0.5 and 3 hours.'

## Function  Test 3: Add Musician to Troupe

### Testing Instructions:
1. Select 'Add Musician to Troupe' from the main menu.
2. Choose a musician from the available list.
3. Choose a troupe from the available list to add the musician to.

### Scenario 1: Successful Musician Addition

Action                         | Input        | Expected Output                                    | Actual Output
-------------------------------|--------------|----------------------------------------------------|----------------
Choose to add musician to troupe | '3'          | Prompt to select a musician                        | Prompt to select a musician
Select musician               | '1' for John  | Prompt to select a troupe to add the musician to   | Prompt to select a troupe
Select troupe                 | '1' for Rock Stars | 'Musician John, a Guitarist, added to troupe Rock Stars.' | 'Musician John, a Guitarist, added to troupe Rock Stars.'

### Scenario 2: No Troupes Available

Action                         | Input        | Expected Output                                    | Actual Output
-------------------------------|--------------|----------------------------------------------------|----------------
Choose to add musician to troupe | '3'          | 'There must be at least one musician and one troupe to proceed.' | 'There must be at least one musician and one troupe to proceed.'

For Scenario 2, this test is conducted under the condition that no troupes are available in the system. The system should display an error message indicating that adding a musician to a troupe cannot proceed due to the lack of available troupes.

## Function Test 4: Calculate Cost of Deployment

### Testing Instructions:
1. Select 'Calculate Deployment Cost' from the main menu.
2. Choose a troupe to calculate the cost for.
3. Enter the number of hours for deployment.

### Scenario 1: Successful Cost Calculation

Action                         | Input            | Expected Output                                      | Actual Output
-------------------------------|------------------|------------------------------------------------------|----------------
Choose to calculate cost       | '4'              | Prompt to select a troupe                            | Prompt to select a troupe
Select troupe                  | '1' for Rock Stars | Prompt for hours of deployment                      | Prompt for hours of deployment
Enter hours of deployment      | '2'              | 'Total cost for deploying Rock Stars for 2 hours is: $100.00' | 'Total cost for deploying Rock Stars for 2 hours is: $100.00'

### Scenario 2: No Troupes Available

Action                         | Input            | Expected Output                                      | Actual Output
-------------------------------|------------------|------------------------------------------------------|----------------
Choose to calculate cost       | '4'              | 'No troupes available to deploy.'                    | 'No troupes available to deploy.'

