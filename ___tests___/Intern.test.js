const Employee = require ('../lib/Employee')
const Intern = require ('../lib/Intern');

test('makes an Intern object', () => {
    const intern = new Intern ('Kirstyn', '1', 'kcg@yahoo.com', 'Intern', 'UTD');
    
    expect(intern.role).toEqual('Intern');
    expect(intern.school).toEqual(expect.any(String))
});

test('checks intern methods functionality', () => {
    const intern = new Intern ('Ian', '2', 'idd@yahoo.com', 'Intern', 'OSU')

    expect(intern.getRole()).toMatch('Intern');
    expect(intern.getSchool()).toMatch('OSU');
});