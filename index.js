const questions = [

];

function writeToFile(fileName, data) {
}

function init() {

}

init();
///////////////////////////////
const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");

inquirer
  .prompt({
    message: "Enter your GitHub username:",
    name: "username"
  })
  .then(function({ username }) {
    const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;

    axios.get(queryUrl).then(function(res) {
      const repoNames = res.data.map(function(repo) {
        return repo.name;
      });

      const repoNamesStr = repoNames.join("\n");

      fs.writeFile("repos.txt", repoNamesStr, function(err) {
        if (err) {
          throw err;
        }

        console.log(`Saved ${repoNames.length} repos`);
      });
    });
  });
///////////////////////////////////////
// import packages
var inquirer = require("inquirer");
var fs = require('fs');

// using the inquirer prompt method to ask a series of questions
inquirer.prompt([
  // standard text input
  // type -> input
  {
    type: "input",
    // the name key creates a key value in the response object
    name: "name",
    message: "What is your name?"
  },
  // type -> checkbox
  {
    type: "checkbox",
    message: "What languages do you know?",
    name: "stack",
    // choices -> displays a checbox of choices
    choices: [
      "HTML", 
      "CSS", 
      "JavaScript", 
      "MySQL"
    ]
  },
  // type -> list
  // unordered list
  {
    type: "rawlist",
    message: "What is your preferred method of communication?",
    name: "contact",
    choices: [
      "email",
      "phone",
      "telekinesis"
    ]
  }
]).then(function(data) {

  // arron linton
  // arron-linton.json
  var filename = data.name.toLowerCase().split(' ').join('-') + ".json";
  // template literals
  // same as above
  var filename = `${data.name.toLowerCase().split(' ').join('-')}.json`;

  // JSON.stringify
  // 1st arg -> data
  // 2nd arg -> replacer/filter
  // 3rd arg -> space
  fs.writeFile(filename, JSON.stringify(data, null,'\t'), function(err) {

    if (err) {
      return console.log(err);
    }

    console.log("Success!");

  });
});
