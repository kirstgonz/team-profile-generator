const Employee = require('../lib/Employee')

test('makes an Employee object', () => {
    const employee = new Employee ('Kirstyn', '1', 'kcg@yahoo.com');

    expect(employee.name).toBe('Kirstyn');
    expect(employee.id).toBe('1');
    expect(employee.email).toBe('kcg@yahoo.com')

});