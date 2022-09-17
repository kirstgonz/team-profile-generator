const Employee = require ('../lib/Employee')
const Manager = require ('../lib/Manager');

test('makes a Manager object', () => {
    const manager = new Manager ('Kirstyn', '1', 'kcg@yahoo.com', 'Manager', '99');
    
    expect(manager.role).toEqual('Manager');
    expect(manager.officeNumber).toEqual(expect.any(String))
});

test('checks intern methods functionality', () => {
    const manager = new Manager ('Ian', '2', 'idd@yahoo.com', 'Manager', '98')

    expect(manager.getRole()).toMatch('Manager');
    expect(manager.getOfficeNumber()).toMatch('98');
});