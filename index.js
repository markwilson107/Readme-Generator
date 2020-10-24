const inquirer = require("inquirer");
const fs = require('fs');
let path = './README.md';

try {
  // Checks if README.md exists
  if (fs.existsSync(path)) {
    inquirer
      .prompt([
        {
          type: "list",
          message: "Overwrite existing README.md?",
          name: "overwrite",
          choices: ["yes", "no","cancel"]
        }])
        .then(function (response) {
          if (response.overwrite === "no") {
            path = './README-1.md';
            getInfo();
          } else if (response.overwrite === "yes") {
            getInfo();
          };          
        })
  } else { getInfo(); }
} catch (err) {
  console.error(err)
}

function getInfo() {
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
      choices: ["MIT", "Apache", "GPL"]
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
    let template = `# ${response.name}\n\n`
    template += `# Table of Contents\n\n- [Description](#description)\n- [Installation](#installation)\n- [Usage](#usage)\n\n`;
    template += `## Description\n\n${response.description}\n\n`;
    template += `## Installation\n\n${response.install}\n\n`;
    template += `## Usage\n\n${response.usage}\n\n`;
    template += `## Contributing\n\n${response.contribute}\n\n`;
    template += `## Testing\n\n${response.test}\n\n`;
    template += `## Questions\n\n${response.test}\n\n`;
    template += `## License\n\n${response.licence}\n\n`;

    fs.writeFile(path, template, function (err) {
      if (err) {
        console.log(err);
      }
    });
  });

}
