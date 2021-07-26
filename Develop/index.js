// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
function promptQuestions() { 
    
    return inquirer.prompt([
        {
            type: 'input',
            name: 'githubUsername',
            message: 'Please enter your Github Username: ',
            validate: usernameInput => { 
                if (usernameInput) { 
                    return true;
                } else { 
                    console.log('Please enter your Github Username!');
                    return false;
                }
            },
        },
        {
            type: 'input',
            name: 'githubLink',
            message: 'Please enter your Github Profile link: ',
            validate: linkInput => { 
                if (linkInput) { 
                    return true;
                } else { 
                    console.log('Please enter your Github Profile link!');
                    return false;
                }
            },
        },
        {
            type: 'input',
            name: 'emailAddress',
            message: 'Please enter your email address: ',
            validate: emailAddressInput => { 
                if (emailAddressInput) { 
                    return true;
                } else { 
                    console.log('Please enter your email address!');
                    return false;
                }
            },
        },
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
        },
        {
            type: 'list',
            name: 'license',
            message: 'What are others licensed to do with your project?',
            choices: ['MIT', 'Apache', 'GPL ', 'Mozilla'],
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
        writeToFile('README', answerData);
    })
};

function collaborators() { 

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
            validate: collabGithubLink => { 
                if (collabGithubLink) { 
                    return true;
                } else { 
                    console.log("Please enter the collaborator's Github Profile link!");
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'addMore',
            message: 'Would you like to add another collaborator?',
            default: false,
        }
    ])
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) { 
    return new Promise((resolve, reject) => {
        var README = generateMarkdown(data);
        if (data.credits) { 
            collaborators()
                .then(collabData => { 
                    collaboratorInfo.push(collabData);
                    if (collabData.addMore) { 
                        return collaborators();
                    }

                var collaboratorNameString = '';
                var collaboratorGithubString = '';

                for (var i = 0; i < collaboratorInfo.length; i++) { 
                    collaboratorNameString += 
`
### ${collaboratorInfo[i].collaboratorName}`
                    collaboratorGithubString += 
`
${collaboratorInfo[i].collaboratorName}'s Github Link: ${(collaboratorInfo[i].collaboratorGithub)}
`
                }

                README += collaboratorNameString
                README += collaboratorGithubString
                
                fs.writeFile('./dist/' + fileName + '.md', README, err => { 
                    if (err) { 
                        reject(err);
                        return;
                    }
                    
                    resolve({ 
                        ok: true,
                        message: 'File created!'
                    });
                });
                
            })
        } else { 
            if (!data.credits) { 
                var noCollaborators = 
`
There are no other contributors on this project.`

                README += noCollaborators
            }
            fs.writeFile('./dist/' + fileName + '.md', README, err => { 
                if (err) { 
                    reject(err);
                    return;
                }
    
                resolve({ 
                    ok: true,
                    message: 'File created!'
                });
            });
        }
    });
};

// array to collect collaborators() data
collaboratorInfo = [];
// TODO: Create a function to initialize app
function init() {
    // ask the user questions
    promptQuestions();
}

// Function call to initialize app
init();
