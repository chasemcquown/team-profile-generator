const test = require('jest');
const Employee = require('../lib/Employee');

test("gets employee info", () => {
    const employee = new Employee('chase', '20', "cpmcquown@gmail.com", "chasemcquown");
    
    expect(employee.getName()).toBe('chase');
    
  });

  test("gets employee info", () => {
    const employee = new Employee('chase', '20', "cpmcquown@gmail.com", "chasemcquown");
    
    expect(employee.getId()).toBe('20');
    
  });

  test("gets employee info", () => {
    const employee = new Employee('chase', '20', "cpmcquown@gmail.com", "chasemcquown");
    
    expect(employee.getEmail()).toBe('cpmcquown@gmail.com');
    
  });

  test("gets employee info", () => {
    const employee = new Employee('chase', '20', "cpmcquown@gmail.com", "chasemcquown");
    
    expect(employee.getRole()).toBe('Employee');
    
  });