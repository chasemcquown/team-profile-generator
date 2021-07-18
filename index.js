// required modules
const fs = require('fs');
const inquirer = require('inquirer');

// require employee objects
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');


const generatePage = require('./src/page-template');

// the employee array will house the employees and their data
const employees = [];

// begin by prompting user for  info 
function employeeInfo() {

  inquirer.prompt([
    {
      name:"name",
      type: "input",
      message: "Please enter the team manager's name:"
    },
    {
      name: "id",
      type: "input",
      message: "Please enter the team manager's id #:"
    },
    {
      name: "email",
      type: "input",
      message: " Please enter the team manager's email:"
    },
    {
      name: "officeNumber",
      type: "input",
      message: "Please enter the team manager's office #:"
    },
    {
      name: 'internName',
      type: "input",
      message: "Please enter the intern's name:",
    },
    {
      name: "internId",
      type: "input",
      message: "Please enter the intern's id #:"
    },
    {
      name: "internEmail",
      type: "input",
      message: "Please enter the intern's email:"
    },
    {
      name: "internSchool",
      type: "input",
      message: "Please enter the intern's school"
    },
    {
      name: "engineerName",
      type: "input",
      message: "Please enter the engineer's name:"
    },
    {
      name: "engineerId",
      type: "input",
      message: "Please enter the engineer's id #:"
    },
    {
      name: "engineerEmail",
      type: "input",
      message: "Please enter the engineer's email:"
    },
    {
      name: "github",
      type: "input",
      message: "Please enter the enigneer's github:"
    }


  ]).then(response => {

    const manager = new Manager(response.name, response.id, response.email, response.officeNumber);
    employees.push(manager);

    const intern = new Intern(response.internName, response.internId, response.internEmail, response.internSchool);
    employees.push(intern);

    const engineer = new Engineer(response.engineerName, response.engineerId, response.engineerEmail, response.github)
    employees.push(engineer);

    const pageHTML = generatePage(manager, intern, engineer)
    
    fs.writeFile('./dist/teamProfile.html', pageHTML, err => {
      if (err) {
        throw err;
      }
      console.log("Your team profile has been generated! Check the dist folder!");
    }) 

  })
};

employeeInfo();
