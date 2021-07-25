// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
function promptQuestions() { 
    
    
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
            vaildate: aboutInput => { 
                if (aboutInput ) { 
                    return true;
                } else { 
                    console.log('Please provide some info about your project!');
                    return false;
                }
            }
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
            validate: collabOrNot => { 
                if (collabOrNot) { 
                    collaborators();
                } else { 
                    return false;
                }
            },
        },
        {
            type: 'checkbox',
            name: 'badges',
            message: 'Please select witch of the badges you would like to have displayed in your README: ',
            choices: ['Total Downloads', ''],
            default: false,
            validate: nonChecked => { 
                if (!nonChecked) { 
                    return true;
                } else { 
                    console.log('Please select at least one!');
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
                    console.log("Please let others know what they are allowed to do with your project!");
                    return false;
                }
            }
        },
    ])
    .then(answerData => { 
        questions.push(answerData);
        console.log(questions);
        writeToFile('README', JSON.stringify(questions));
    })
};

const collaborators = () => { 

    return inquirer.prompt([ 
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
    ])
}

// console.log(promptQuestions);

// TODO: Create a function to write README file
function writeToFile(fileName, data) { 
    return new Promise((resolve, reject) => { 
        fs.writeFile('./dist/' + fileName + '.md', data, err => { 
            if (err) { 
                reject(err);
                return;
            }

            resolve({ 
                ok: true,
                message: 'File created!'
            });
        });
    });
};

// TODO: Create a function to initialize app
function init() {
    // array to collect promptQuestions() data
    questions = [];
    // ask the user questions
    promptQuestions();
}

// Function call to initialize app
init();
