const inquirer = require("inquirer");
const fs = require('fs');

inquirer
  .prompt([
    {
      type: "input",
      message: "What is the name of your project?",
      name: "name"
    },
    {
      type: "input",
      message: "Enter a description for your project.",
      name: "description"
    },
    {
      type: "input",
      message: "Enter installation instruction.",
      name: "install"
    },
    {
      type: "input",
      message: "Enter usage information.",
      name: "usage"
    },
    {
      type: "input",
      message: "How can others contribute?",
      name: "contribute"
    },
    {
      type: "input",
      message: "How can the project be tested?",
      name: "test"
    },
    {
      type: "list",
      message: "What licence is relevant to this project?",
      name: "licence",
      choices: ["MIT","Apache","GPL"]
    },
    {
      type: "input",
      message: "what is your Github username?",
      name: "username"
    },
    {
      type: "input",
      message: "what is your email address?",
      name: "email"
    },
    {
      type: "input",
      message: "what is your email address?",
      name: "email"
    }
  ])
  .then(function (response) {
    let template = `# ${response.name}\n\n${response.description}\n\n`;
    template += `## Installation\n\n${response.install}\n\n`;
    template += `## Usage\n\n${response.usage}\n\n`;
    template += `## Contributing\n\n${response.contribute}\n\n`;
    template += `## Testing\n\n${response.test}\n\n`;
    template += `## Questions\n\n${response.test}\n\n`;
    template += `## License\n\n${response.licence}\n\n`;

    fs.writeFile("README.md", template, function (err) {
      if (err) {
        console.log(err);
      }
    });
  });
