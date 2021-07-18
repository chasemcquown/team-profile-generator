const test = require('jest');
const Manager = require('../lib/Manager');

test("gets manager info", () => {
    const manager = new Manager('chase', '20', "cpmcquown@gmail.com", "25");
    
    expect(manager.getName()).toBe('chase');
    
  });

  test("gets manager info", () => {
    const manager = new Manager('chase', '20', "cpmcquown@gmail.com", "25");
    
    expect(manager.getId()).toBe('20');
    
  });

  test("gets manager info", () => {
    const manager = new Manager('chase', '20', "cpmcquown@gmail.com", "25");
    
    expect(manager.getEmail()).toBe('cpmcquown@gmail.com');
    
  });

  test("gets manager info", () => {
    const manager = new Manager('chase', '20', "cpmcquown@gmail.com", "25");
    
    expect(manager.officeNumber()).toBe('25');
    
  });

  test("gets manager info", () => {
    const manager = new Manager('chase', '20', "cpmcquown@gmail.com", "25");
    
    expect(manager.getRole()).toBe('Manager');
    
  });