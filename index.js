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
        type: "input",
        message: "What licence is relevant to this project?",
        name: "licence"
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
  .then(function(response) {

    if (response.confirm === response.password) {
      console.log("Success!");
    }
    else {
      console.log("You forgot your password already?!");
    }
  });
