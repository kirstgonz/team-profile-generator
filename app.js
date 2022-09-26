const inquirer = require('inquirer');
const generatePage = require('./src/page-template');

const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const { writeFile, copyFile } = require('./utils/generate-site');

const employeeArr = [];

const promptUser = () => {
    return inquirer.prompt([
    {
        type: 'list',
        name: 'roleSelection',
        message: 'Please select a role for your teammember',
        choices: ['Manager', 'Engineer', 'Intern']
    },
    {
        type: 'input',
        name: 'name',
        message: "What is your team member's name? (Required)",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter your team member's name!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "What is your team member's id? (Required)",
        validate: idInput => {
          if (idInput) {
            return true;
          } else {
            console.log("Please enter your team member's id!");
            return false;
          }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "What is your team member's email? (Required)",
        validate: emailInput => {
          if (emailInput) {
            return true;
          } else {
            console.log("Please enter your team member's email!");
            return false;
          }
        }
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'What is the office number? (Required)',
        when: ({ roleSelection }) => {
            if (roleSelection === 'Manager'){
                return true;
            } else {
                return false;
            }
        },
        validate: officeNumberInput => {
            if (officeNumberInput) {
                return true;
            } else {
                console.log("Please enter the manager's office number!");
                return false;
            }
            }
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is the GitHub username? (Required)',
        when: ({ roleSelection }) => {
            if (roleSelection === 'Engineer'){
                return true;
            } else {
                return false;
            }
        },
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log("Please enter the engineer's GitHub username!");
                return false;
            }
            }
    },
    {
        type: 'input',
        name: 'school',
        message: 'What is the school? (Required)',
        when: ({ roleSelection }) => {
            if (roleSelection === 'Intern'){
                return true;
            } else {
                return false;
            }
        },
        validate: schoolInput => {
            if (schoolInput) {
                return true;
            } else {
                console.log("Please enter the intern's school!");
                return false;
            }
        }
    },
    ])
    .then(answers => {
        if(answers.roleSelection == 'Manager'){
            employeeArr.push(new Manager(answers.name, answers.id, answers.email, 'Manager', answers.officeNumber));
            console.log(employeeArr)
        } else if (answers.roleSelection == 'Engineer'){
            employeeArr.push(new Engineer(answers.name, answers.id, answers.email, 'Engineer', answers.github));
            console.log(employeeArr);
        } else if (answers.roleSelection == 'Intern'){
            employeeArr.push(new Intern(answers.name, answers.id, answers.email, 'Intern', answers.school));
            console.log(employeeArr);
        }
    })
    .then(answers => {
        addUser();
    })
};

const addUser = () => {
    return inquirer.prompt([
        {
            type: 'confirm',
            name: 'confirmAddUser',
            message: 'Would you like to add another user?',
        }
    ])
    .then(answers => {
        if(answers.confirmAddUser){
            return promptUser();
        } else {
            console.log('Goodbye! Generating HTML now :)')

            return writeFile(generatePage(employeeArr));
        }
    })
};

promptUser();