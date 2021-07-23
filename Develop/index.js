// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = () => { 
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Project title:',
            validate: nameInput => { 
                if (nameInput) { 
                    return true;
                } else { 
                    console.log('Please enter the name of your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'about',
            message: 'Provide some information about your project:',
            when: ({ confirmAbout }) => { 
                if (confirmAbout) { 
                    return true;
                } else { 
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'ToC',
            message: 'Select which sections you want to have included in your README: (Choose ALL that apply)',
            choices: ['Installation', 'Usage', 'Credits', 'License', 'Badges', 'Contributing', 'Tests']
        },
        {
            type: 'input',
            name: 'installation',
            message: 'How do people install your project?',
            validate: howInstall => { 
                if (howInstall) { 
                    return true;
                } else { 
                    console.log('Please enter how to install your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples for use.',
            validate: howTo => { 
                if (howTo) { 
                    return true;
                } else { 
                    console.log('Please enter some info on how to use your project!');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'credits',
            message: 'Are there other developers you would like to acknowledge on this project?',
            default: false,
        },
        {
            type: 'input',
            name: 'collaboratorName',
            message: 'Collaborator Name:',
            validate: collabNameInput => { 
                if (collabNameInput) { 
                    return true;
                } else { 
                    console.log("Please enter the collaborator's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'collaboratorGithub',
            message: 'Collaborator Github Profile Link:',
            validate: collabRepoLink => { 
                if (collabRepoLink) { 
                    return true;
                } else { 
                    console.log("Please enter the collaborator's Github Profile link!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'license',
            message: 'What are others licensed to do with your project?',
            validate: license => { 
                if (license) { 
                    return true;
                } else { 
                    console.log("Please let others know what other are allowed to do with your project!");
                    return false;
                }
            }
        },
    ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
