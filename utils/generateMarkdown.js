// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection() {};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  
  ## Description
  
  ${data.description}

  ## Table of Contents

  [Installation](#Installation)
  [Usage](#Usage)
  [License](#License)
  [Contributing](#Contributing)
  [Questions](#Questions)
  
  ## Installation
  
  ${data.installation}
  
  ## Usage
  
  ${data.usage}

  ## License

  ${data.license}
  
  ## Contributing
  
  ${data.contributors}

  ## Questions

  Please visit the github portfolio below or email with any questions.
  [GitHub Porfolio for ${data.github}](https://github.com/${data.github})
  ${data.email}
  
`;
}

module.exports = generateMarkdown;