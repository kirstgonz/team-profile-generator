const Employee = require('./Employee')

class Engineer extends Employee {
    constructor (name, id, email, role = 'Engineer', github = ''){
        super(name, id, email, role);

        this.github = github;
    }

    getGitHub(){
        return this.github;
    }
};

module.exports = Engineer;