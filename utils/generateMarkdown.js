// Select License or return a blank string
function renderLicenseBadge(license) {
  if(license.license = 'Apache 2.0') {
    var licensebadge = '![Apache 2.0 License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)'
  } else if (license.license = 'MIT') {
    var licensebadge = '![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)'
  } else if (license.license = 'GNU GPL v3'){
    var licensebadge = '![GNU GPL v3 License](https://img.shields.io/badge/License-GPLv3-blue.svg)'
  };
  return licensebadge
}

// Select License Link
function renderLicenseLink(license) {
  if(license.license = 'Apache 2.0') {
    var licenseLink = 'https://opensource.org/licenses/Apache-2.0'
  } else if (license.license = 'MIT') {
    var licenseLink = 'https://opensource.org/licenses/MIT'
  } else if (license.license = 'GNU GPL v3'){
    var licenseLink = 'https://www.gnu.org/licenses/gpl-3.0'
  };
  return licenseLink;
}

// Create the License section of the document
function renderLicenseSection(license) {

  if(license !== 'none'){
    var link = renderLicenseLink(license);
    var badge = renderLicenseBadge(license);
    licenseSection = `## License 
   ${badge}
    Link: ${link}` 
  } else {
    licenseSection = ''
  }
 return licenseSection;
}

// Create the full body of the document
function generateMarkdown(data) {
  var licenseSection= renderLicenseSection(data.license);
  return `# ${data.title}
  ## Description
  ${data.description}

 ## Table of Contents
 - [Description](#Description)
 - [Installation](#Installation)
 - [Usage](#Usage)
 - [Contributing](#Contributing)
 - [Tests](#Tests)
 - [License](#License)
 - [Questions](#Questions)

 ## Installation
  ${data.instinstructions}
 ## Usage
  ${data.useinstructions}
 ## Contributing
  ${data.continstructions}
 ## Tests
  ${data.testinstructions}

 ${licenseSection}
 ## Questions
 For any questions, reach out to:
 Email: ${data.email}
 Github:${data.username}
`;
}
// Export functions on this page to Index.js
module.exports = generateMarkdown;
