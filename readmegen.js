class MarkDown {

    static renderLicenseBadge(License){
        const badges = {
            mit: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
            isc: '[![License: ISC](https://img.shields/io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
            gnuplv3:'[![License: LGPL v3](https://img.shields/io/badge/License-LGPL_v3-blue.svg)](https://gnu.org/licenses/lgpl-3.0)'
        }
        return badges[License]
    }

    static renderLicenseLink(license){
        const licenseLinks = {
            mit: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
            isc: '[![License: ISC](https://img.shields/io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
            gnuplv3:'[![License: LGPL v3](https://img.shields/io/badge/License-LGPL_v3-blue.svg)](https://gnu.org/licenses/lgpl-3.0)'
        }
        return licenseLinks[license]
    }

    static renderLicenseSection(license){
        if (license){
            return `Licensed under the ${this.renderLicenseLink(license)}`
        }
        else {
            return ``
        }
    }

    static generateReadme(answers) {
        return `
        # ${answers.title}
        
        ${this.renderLicenseBadge(answers.license)}

        ## Table of Content
        - [Project description](#Description)
        - [Usage](#Usage)
        - [Contributing](#Contributing)
        - [Questions](#Questions)
        - [License](#License)

        ## Description
        ${answers.description}

        ## Usage 
        ${answers.usage}

        ## Installation
        ${answers.installation}

        ## Questions 
        ${answers.email}
        ${answers.github}

        ## License
        ${this.renderLicenseSection(answers.license)}
        `
    }
}

module.exports = MarkDown
