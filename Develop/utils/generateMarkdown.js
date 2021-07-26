// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
	var badge = '';
	console.log(license);
	if (license === 'MIT') { 
		badge = '![badmath](https://img.shields.io/badge/License-MIT-blue)';
	} else if (license === 'Apache') { 
		badge = '![badmath](https://img.shields.io/badge/License-Apache-green)';
	} else if (license === 'GPL') { 
		badge = '![badmath](https://img.shields.io/badge/License-GPL-red)';
	} else if (license === 'Mozilla') { 
		badge = '![badmath](https://img.shields.io/badge/License-Mozilla-yellow)';
	}
	
	return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
	var link = '';
	if (license === 'MIT') { 
		link = 'https://choosealicense.com/licenses/mit/';
	} else if (license === 'Apache') { 
		link = 'https://choosealicense.com/licenses/apache-2.0/';
	} else if (license === 'GPL') { 
		link = 'https://choosealicense.com/licenses/gpl-3.0/';
	} else if (license === 'Mozilla') { 
		link = 'https://choosealicense.com/licenses/mpl-2.0/';
	}
	
	return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
	var text = '';
	// if (license) { 
	// 	text = 'https://choosealicense.com/licenses/mit/';
	// } else if (license[1]) { 
	// 	text = 'https://choosealicense.com/licenses/apache-2.0/';
	// } else if (license[2]) { 
	// 	text = 'https://choosealicense.com/licenses/gpl-3.0/';
	// } else if (license[3]) { 
	// 	text = 'https://choosealicense.com/licenses/mpl-2.0/';
	// }
	
	return text;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
	console.log(data);
	var badgeText = renderLicenseBadge(data.license)
	var linkText = renderLicenseLink(data.license)
	var sectionText = renderLicenseSection(data.license)
return `
# ${data.name}

## Description

${data.about}

## Installation

${data.installation}

## Usage

${data.usage}

## License

${badgeText}
${linkText}
${sectionText}

## Questions

Questions? Please feel free to contact me at:
### ${data.githubUsername}
${data.githubLink}
${data.emailAddress}

## Contributors
`;
}

module.exports = generateMarkdown;
