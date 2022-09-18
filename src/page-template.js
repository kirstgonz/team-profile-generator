// create the about section
const generateTeamMember = answers => {
    return `
      <div id="employeeBasic">
        <h3>${answers.name}</h3>
        <h4> ID: ${answers.id}</h4>
        <h4><a href="mailto: ${answers.email}?subject= Questions">${answers.email}</a></h4>
        <h4>Role: ${answers.roleSelection}</h4>
    `;
  };
  
  const generateTeamMemberRole = roleSelection => {
    if (roleSelection == 'Manager') {
      return `
      <h4>Office Number: ${roleSelection.officeNumber}</h4>
      `;
    } 
    else if (roleSelection == 'Engineer'){
      return `
      <h4>GitHub: <a href="https://github.com/${roleSelection.github}"</a>${roleSelection.github}</h4>
      `;
    }
    else if (roleSelection == 'Intern') {
      return `
      <h4>School: ${roleSelection.school}</h4>
      `;
    }
    console.log('Oops! Something went wrong.')
  }
 
  // export function to generate entire page
  module.exports = templateData => {
    let teamMember = generateTeamMember(answers.answers);
    let teamMemberRole = generateTeamMemberRole(roleSelection.answers);

    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Team Member Generator</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="style.css">
    </head>
    
    <body>
      <header>
        <h1>Team Member Profile</h1>
      </header>
      <main class="container my-5">
        ${teamMember}
        ${teamMemberRole}
      </main>
      <footer class="container text-center py-3">
        <h3 class="text-dark">&copy;2020</h3>
      </footer>
    </body>
    </html>
    `;
  };
  