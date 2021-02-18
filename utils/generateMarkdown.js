function generateMarkdown(data) {
  let badge = "";

  switch (data.license) {
    case "MIT":
      badge = "[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)";
      break;

    case "Apache":
      badge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      break;

    case "Eclipse":
      badge = "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
      break;

    case "Mozilla":
      badge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
      break;

    case "Unlicense":
      badge = "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
      break;
  }




  return `
  # ${data.title} ${badge}
  
  ## Description
  ${data.description} \n
  [Deployed Link](http://${data.link})
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## License
  This project is licensed under the ${data.license} license.
  ## Contributions
  ${data.contribution}
  ## Tests
  ${data.tests}
  ## Questions
  If you have any questions please reach out to me at ${data.email} \n
  Or visit my Github profile [Github link](http://${data.github})
`;
}

module.exports = generateMarkdown;