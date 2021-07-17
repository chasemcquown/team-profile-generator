const { TestWatcher } = require("jest");
const Employee = require("../lib/Employee");

TestWatcher('creates an engineer'), () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe('object');
}