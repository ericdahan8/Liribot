//Inquirer

// Instructions:
// Build a Node application that takes in a location input via the command line, then geocodes it using the geocoder NPM package.
// Then console.log the geocoding information for display.

// Easier: User will provide the city and state in the following format: "Atlanta, GA", "Houston, TX"
// Slightly More Challenging: User will provide the address in any format: "151 Sip Ave Jersey City, NJ", "Austin, TX", etc.

// All: Be sure to console log the output using JSON.stringify in "pretty-print" format.

// ========================================================================================================================

// Include the node-geocoder NPM package (Remember to run "npm install node-geocoder"!)

// Build your address as an array or string

// Then use the geocoder object to search the address

// Load the NPM Package inquirer
// var NodeGeocoder = require("node-geocoder");

// Replace with your mapquest consumer API key

var options = {
  provider: "mapquest",
  apiKey: "MnRz7lJrfyAmGYAUTryPCJijmT2Uh0c7"
};

// Create a geocoder object that can query the mapquest API
// var geocoder = NodeGeocoder(options);
var inquirer = require("inquirer");

// Create a "Prompt" with a series of questions.
inquirer
  .prompt([
    // Here we create a basic text prompt.
    {
      type: "input",
      message: "Welcome, I am LiriBot, whats your name?",
      name: "name"
    },

    {
      type: "input",
      message: "Hello ", "Whats your password?"
      name: "address"
    },
    // Here we create a basic password-protected text prompt.
    {
      type: "password",
      message: "",
      name: "password"
    },
    // Here we give the user a list to choose from.
    {
      type: "list",
      message: "ok im sorry, let watch tv together - What do you prefer?",
      choices: ["Ozark", "True Detective", "Friends"],
      name: "tvshow"
    },
    // Here we ask the user to confirm.
    {
      type: "confirm",
      message: "really!!!?",
      name: "confirm",
      default: true
    },

    {
      //checkbox
      type: "checkbox",
      message: "Is it really better than Game of Thrones tho?",
      choices: ["yes", "no"],
      name: "checkbox"
    }
  ])
  .then(function(inquirerResponse) {
    // If the inquirerResponse confirms, we displays the inquirerResponse's username and pokemon from the answers.
    if (inquirerResponse.confirm) {
      console.log("\nHi " + inquirerResponse.username);
      console.log(
        "Your show,  " +
          inquirerResponse.tvshow +
          ", is really good, but lets be honest nothing is better than Game of Thrones. your an idiot. I now have your address i am going to find you and fuck you up\n"
      );

      //   geocoder.geocode(inquirerResponse.address, function(err, data) {
      // do something with data
      // if (err) return console.log(err);

      console.log(JSON.stringify(data, null, 2));
      //   });
    } else {
      console.log(
        "\nThat's okay " +
          inquirerResponse.username +
          ", come again when you are not an idiot.\n"
      );
    }
  });
