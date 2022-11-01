const inquirer = require('inquirer');
const MarkDown = require('./readmegen.js');
const fs = require('fs')
//ignore
// "nodemon": "^2.0.20"
// generator questions that wil show up and ask user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
        },
    {
            type: 'input',
            name: 'description',
            message: 'Project description:',
            },
            {
                type: 'input',
                name: 'installation',
                message: 'Installation instructions?',
                },  
                {
                    type: 'input',
                    name: 'usage',
                    message: 'Project usage?',
                    },
                    {
                        type: 'input',
                        name: 'contribution',
                        message: 'Contribution info',
                        },
                        {
                            type: 'input',
                            name: 'email',
                            message: 'For questions (email)',
                            },
                            {
                                type: 'input',
                                name: 'github',
                                message: 'For questions(github)',
                                },
                                {
                                    type: 'list',
                                    name: 'license',
                                    message: 'License?',
                                    choices: ['MIT', 'ISC','GNUPLv3'],
                                    filter(val){
                                        return val.toLowerCase();
                                    }
                                    },
]

function runQuery(){
    return inquirer.prompt(questions)
    .then((answers) => {
        const mark = MarkDown.generateReadme(answers)
        fs.writeFile('README.md', mark, function (err) {
            if (err) {
                console.log('Could not save file', err)
            }
            else {
                console.log ('Success: new README.md file generated inside the current folder.')
            }
        })
        
    })
    .catch((error) => {
        console.log(error)
    })
}

runQuery()
// run
// async function runQuestions() {
//     return inquirer.prompt(questions)
//     .then((answers)=>{
//         console .log(answers)
//         return answers
//     })
//     .catch((error)=>{
//         console.log(error)
//     })
// }



