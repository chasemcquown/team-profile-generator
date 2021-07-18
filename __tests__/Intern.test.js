const test = require('jest');
const Intern = require('../lib/Intern');

test("gets intern info", () => {
    const intern = new Intern('chase', '20', "cpmcquown@gmail.com", "OCC");
    
    expect(intern.getName()).toBe('chase');
    
  });

  test("gets intern info", () => {
    const intern = new Intern('chase', '20', "cpmcquown@gmail.com", "OCC");
    
    expect(intern.getId()).toBe('20');
    
  });

  test("gets intern info", () => {
    const intern = new Intern('chase', '20', "cpmcquown@gmail.com", "OCC");
    
    expect(intern.getEmail()).toBe('cpmcquown@gmail.com');
    
  });

  test("gets intern info", () => {
    const intern = new Intern('chase', '20', "cpmcquown@gmail.com", "OCC");
    
    expect(intern.getSchool()).toBe('cpmcquown@gmail.com');
    
  });

  test("gets intern info", () => {
    const intern = new Intern('chase', '20', "cpmcquown@gmail.com", "OCC");
    
    expect(intern.getRole()).toBe('Intern');
    
  });