// create the 
const generateTeamMember = (employeeArr, index) => {
    return `
      <div id="employeeBasic">
        <h3>${employeeArr[index].getName()}</h3>
        <h4><b>ID:</b> ${employeeArr[index].getId()}</h4>
        <h4><b>Email:</b> <a href="mailto: ${employeeArr[index].getEmail()}?subject= Questions">${employeeArr[index].getEmail()}</a></h4>
        <h4><b>Role:</b> ${employeeArr[index].getRole()}</h4>
    `;
  };
  
  const generateTeamMemberRole = (employeeArr, index) => {
    if (employeeArr[index].getRole() == 'Manager') {
      return `
      <h4><b>Office Number:</b> ${employeeArr[index].getOfficeNumber()}</h4>
      `;
    } 
    else if (employeeArr[index].getRole() == 'Engineer'){
      return `
      <h4><b>GitHub:</b> <a href="https://github.com/${employeeArr[index].getGitHub()}"></a>${employeeArr[index].getGitHub()}</h4>
      `;
    }
    else if (employeeArr[index].getRole() == 'Intern') {
      return `
      <h4><b>School:</b> ${employeeArr[index].getSchool()}</h4>
      `;
    }
    console.log('Oops! Something went wrong.')
  }
 
  // export function to generate entire page
  module.exports = employeeArr => {
    let teamMember = '';

    for (let i = 0; i < employeeArr.length; i++) {
      teamMember += generateTeamMember(employeeArr, i);
      teamMember += generateTeamMemberRole(employeeArr, i);
      teamMember += `
        <p>=========================</p>
      `
    }

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
      </main>
      
      <footer class="container text-center py-3">
        <h3 class="text-dark">&copy;2020</h3>
      </footer>
    </body>
    </html>
    `;
  };
  