# Team Member Profile Generator

The Team Member Profile generator was created to aid a user in creating a ready-to-use website with team member information.

## Description

The Team Member Profile generator helps users in creating an HTML website with CSS. The application asks for user input, and then dynamically creates an 'index.html' file and adds a 'style.css' file in the dist folder based on the answers given by the user. 

## Technologies Used

- JavaScript
- Node.js
- Inquirer
- Jest
- HTML
- CSS

## Installation

To utilize this The Team Member Profile generator, Node.js must be installed. You can find the installation instructions for Node [here](https://nodejs.dev/en/learn/how-to-install-nodejs/) or you can run

Once Node has been installed, open the command line (either through VSCode or GitBash). Then to download the necessary node modules, do the following: 

- npm init -y
- npm install --save inquirer@^8.2.4

You can also run the following command if you wish to run the 'tests' folder in which jest was used for TDD. All the tests should pass.

- npm install jest --save-dev

You will want to go into the 'package.json' file and ensure that the 'tests' option under 'scripts' has 'jest'.

Then, you will want to delete the placeholder.html file found in the 'dist folder.' If the file is not deleted, then the newly created HTML with your team member information will not populate, and the old data will persist.

## Usage and Website

[The Team Memeber Profile Generator](https://github.com/kirstgonz/team-profile-generator) will help users in making a team profile website. 

The user can run 'npm test' OR 'npm test (FILE NAME IN 'TESTS' FOLDER)' in GitBash or the VSCode terminal. All of the tests and the suites should pass.

The user will run 'node app' in GitBash or the VSCode terminal after ensuring they are in the proper file location (app.js in the root directory), and a series of prompts will appear. The user will be asked to enter information about their team members, such as name, id, email, and role (either Manager, Engineer, or Intern). If 'Manager' is selected, the command line will ask for the office number. If 'Engineer' is selected, the command line will ask for the GitHub username. If 'Intern' is selected, the command line will ask for the school.
Then, the user will be asked if they would like to add more team members. If so, they are prompted for all the appropriate input once more. All input get's pushed into an array (employeeArr). Then, when a user decides to no longer add team members, the HTML is dynamically generated with a prewritten CSS sheet. The file appears in the 'dist' folder ONLY if the placeholder.html is deleted first.


## Credits

Made by [Kirstyn Gonzalez](https://github.com/kirstgonz)


## License

[https://choosealicense.com/](https://choosealicense.com/).