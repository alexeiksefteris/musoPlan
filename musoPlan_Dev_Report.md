# MusoPlan Software Development Report

## Class Descriptions

### 1. Musician Class
- **Data**:
    - Name (3-30 Characters)
    - Years playing
    - Hourly rate (over $50)
    - Instrument type (guitarist, bassist, percussionist, flautist)
- **Behaviours**:
    - Introduce themselves with name, instrument, years playing, hourly rate, and an interesting fact.

### 2. Troupe Class
- **Data**:
    - Name (3-30 Characters)
    - Minimum duration for booking (0.5-3 hours)
    - Genre (rock, jazz, pop)
    - List of musicians (up to 5)
- **Behaviours**:
    - Provide a summary including name, instrument count, genre, minimum duration, and hourly rate.
    - Provide a detailed description, including introductions of each musician.
- **Inheritance**:
    - Aggregates `Musician` objects.

### 3. Instrument Classes (Guitarist, Bassist, Percussionist, Flautist)
- **Data**: Inherits basic musician data.
- **Behaviours**: Each class has an interesting fact related to their instrument.
- **Inheritance**: Inherits from the `Musician` class.

## Class Relationships
- **Instrumentalists and Musicians**: Instrumentalists (Guitarist, Bassist, Percussionist, Flautist) are subclasses of the Musician class.
- **Troupe and Musician**: The Troupe class contains several instances of Musicians, showing a composition relationship.

## Program Functionality
- **Instrumentalist Classes**: Specialized types of the Musician class with specific attributes and behaviors.
- **Troupe Class**: Manages a group of musicians, organizing who plays what and for how long.

## Program Inputs
- **User Interface**: Command-line interface for entering musician and troupe details.
- **File Reading**: Ability to read troupe names and other details from text files.

## Program Outputs
- **Console Outputs**: Display troupe summaries and detailed descriptions in the console.
- **File Writing**: Write detailed descriptions of all troupes to a specified file.
- **Additional Features**:
    - Import troupe names from text files.
    - Export troupe names to text files.
    - View current troupes.
    - Provide detailed descriptions of troupes, including members' names, years playing, hourly rates, and interesting facts.

## New Functionalities
- **Menu-Driven Interface**: Enhanced user interaction with clear menu options for creating musicians and troupes, viewing troupes, importing and exporting troupe names, and displaying summaries and detailed descriptions.
- **Message Management**: Improved display of messages and outputs, ensuring they appear below the menu for a streamlined user experience.
