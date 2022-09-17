const Employee = require ('../lib/Employee')
const Engineer = require ('../lib/Engineer');

test('makes an Engineer object', () => {
    const engineer = new Engineer ('Kirstyn', '1', 'kcg@yahoo.com', 'Engineer', 'kirstgonz');
    
    expect(engineer.github).toEqual(expect.any(String))
    expect(engineer.role).toEqual('Engineer');
});


test('checks employee methods functionality', () => {
    const engineer = new Engineer ('Ian', '2', 'idd@yahoo.com', 'Engineer', 'iansnods')

    expect(engineer.getGithub()).toMatch('iansnods');
    expect(engineer.getRole()).toMatch('Engineer');
});