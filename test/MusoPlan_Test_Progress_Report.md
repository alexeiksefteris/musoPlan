
# Test Progress Report for MusoPlan

## Date of Execution
April 21, 2024

## Overview
The test suite's aim is to target multiple functionalities of the MusoPlan software, focusing on the `Musician` and `Troupe` objects. This included validating for inputs, object interaction, and specific behavioral checks.

## Test Cases and Results

### Test Case 1: Musician Name Validation
- **Requirement Tested**: Musician name must be between 3 and 30 characters.
- **Input**: "Jo"
- **Expected Outcome**: Error indicating name is too short.
- **Actual Outcome**: Error was successfully raised.
- **Status**: Pass

### Test Case 2: Musician Hourly Rate Validation
- **Requirement Tested**: Musician hourly rate must be over 50.
- **Input**: 40
- **Expected Outcome**: Error indicating hourly rate is too low.
- **Actual Outcome**: Error was successfully raised.
- **Status**: Pass

### Test Case 3: Adding Musician to Troupe
- **Requirement Tested**: A musician can be added to a troupe.
- **Input**: Musician "John", Troupe "Jazz Trio"
- **Expected Outcome**: Musician "John" is added to "Jazz Trio".
- **Actual Outcome**: "John" was added successfully.
- **Status**: Pass

### Test Case 4: Troupe Minimum Duration Validation
- **Requirement Tested**: Troupe minimum duration must be between 0.5 and 3 hours.
- **Input**: 0.3 hours
- **Expected Outcome**: Error indicating duration is too short.
- **Actual Outcome**: Error was successfully raised.
- **Status**: Pass

### Test Case 5: Musician Experience Validation
- **Requirement Tested**: Musician years of playing must be non-negative.
- **Input**: -2
- **Expected Outcome**: Error indicating invalid years of playing.
- **Actual Outcome**: Error was successfully raised.
- **Status**: Pass

## Identified Defects and Amendment Strategies

### Defect 1: Musician Name Too Short
- **Issue**: Acceptance of musician names that are too short (less than 3 characters).
- **Fix Strategy**: Add check in the musician creation process to make sure that the names are at least 3 characters long. If not, display an error message.

### Defect 2: Musician Hourly Rate Too Low
- **Issue**: Hourly rates below the minimum of 50 are being accepted.
- **Fix Strategy**: Update the logic to reject rates under 50 and prompt user to input valid rate instead.

### Defect 3: Typo in Musician Creation Error Message
- **Issue**: There was a typo in the error message when entering a musician name that's too short.
- **Fix Strategy**: Correct the typo in the error message.

### Defect 4: Incorrect Default Hourly Rate
- **Issue**: The hourly rate for a new musician was set to 0 instead of 50.
- **Fix Strategy**: Adjust the value in musician constructor to start at 50, ensuring it meets the minimum rate requirement.

### Defect 5: Musician Introduction Missing Instrument Name
- **Issue**: When musicians introduce themselves, the instrument they play is not mentioned.
- **Fix Strategy**: Update the introduction method in the musician class to include the type of instrument in the output string.


## Test Coverage
The test coverage for MusoPlan has been increased to approximately 75%, mostly covering the critical functionalities as well as some simple cases and functions for both the `Musician` and `Troupe` classes.

## Appendix
- **Test Framework Used**: Jest
