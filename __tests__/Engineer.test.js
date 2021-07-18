const test = require('jest');
const Engineer = require('../lib/Engineer');

test("gets engineer info", () => {
    const engineer = new Engineer('chase', '20', "cpmcquown@gmail.com", "chasemcquown");
    
    expect(engineer.getName()).toBe('chase');
    
  });

  test("gets engineer info", () => {
    const engineer = new Engineer('chase', '20', "cpmcquown@gmail.com", "chasemcquown");
    
    expect(engineer.getId()).toBe('20');
    
  });

  test("gets engineer info", () => {
    const engineer = new Engineer('chase', '20', "cpmcquown@gmail.com", "chasemcquown");
    
    expect(engineer.getEmail()).toBe('cpmcquown@gmail.com');
    
  });

  test("gets engineer info", () => {
    const engineer = new Engineer('chase', '20', "cpmcquown@gmail.com", "chasemcquown");
    
    expect(engineer.getGithub()).toBe('chasemcquown');
    
  });

  test("gets engineer info", () => {
    const engineer = new Engineer('chase', '20', "cpmcquown@gmail.com", "chasemcquown");
    
    expect(engineer.getRole()).toBe('Engineer');
    
  });