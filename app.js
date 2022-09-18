const inquirer = require('inquirer');
const generatePage = require('./src/page-template');

const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const { writeFile, copyFile } = require('./utils/generate-site');

const promptUser = () => {
    return inquirer.prompt([
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
        name: 'id',
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
      type: 'list',
      name: 'roleSelection',
      message: 'Please select a role for your teammember',
      choices: ['Manager', 'Engineer', 'Intern', 'I am done']
    },
    ])
    .then(({ roleSelection }) => {
        console.log(roleSelection);
        roleChoice(roleSelection);
    });
};
       
const roleChoice = (roleSelection) => {
    if (roleSelection === 'Manager') {
        console.log("Manager!"); 
            inquirer
            .prompt({
                type: 'input',
                message: 'What is the office number?',
                validate: officeNumberInput => {
                    if (officeNumberInput) {
                        return true;
                    } else {
                        console.log("Please enter the manager's office number!");
                        return false;
                    }
                    }
            })
}
};



//   .then (({ choice }) => {
//     if (choice === 'Manager') {
//         console.log("Manager!")}
    //     inquirer
    //         .prompt({
    //             type: 'input',
    //             message: 'What is the office number?',
    //             validate: officeNumberInput => {
    //                 if (officeNumberInput) {
    //                   return true;
    //                 } else {
    //                   console.log("Please enter the manager's office number!");
    //                   return false;
    //                 }
    //               }
    //         })
    // }
    // if (choice === 'Engineer') {
    //     inquirer
    //         .prompt({
    //             type: 'input',
    //             message: "What is the engineer's GitHub name?",
    //             validate: gitHubInput => {
    //                 if (gitHubInput) {
    //                   return true;
    //                 } else {
    //                   console.log("Please enter the engineer's GitHub name!");
    //                   return false;
    //                 }
    //               }
    //         })
    // }
//   })
// };


promptUser()
    .then(answers => {
        console.log(answers)
    });
//   .then(promptTeamMemberInfo)
//   .then(portfolioData => {
//     return generatePage(portfolioData);
//   })
//   .then(pageHTML => {
//     return writeFile(pageHTML);
//   })
//   .then(writeFileResponse => {
//     console.log(writeFileResponse);
//     return copyFile();
//   })
//   .then(copyFileResponse => {
//     console.log(copyFileResponse);
//   })
//   .catch(err => {
//     console.log(err);
//   });