const Employee = require('../lib/Employee')

test('makes an Employee object', () => {
    const employee = new Employee ('Kirstyn', '1', 'kcg@yahoo.com', 'Employee');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(String));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.role).toEqual('Employee');

});

test('checks employee methods functionality', () => {
    const employee = new Employee ('Ian', '2', 'idd@yahoo.com', 'Employee')

    expect(employee.getName()).toMatch('Ian');
    expect(employee.getId()).toMatch('2');
    expect(employee.getEmail()).toMatch('idd@yahoo.com');
    expect(employee.getRole()).toMatch('Employee');
});