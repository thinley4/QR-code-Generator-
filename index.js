/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from 'inquirer';
// var qr = require('qr-image');
import qr from 'qr-image';
import fs from 'fs';

// inquirer
inquirer.prompt([{
    name: 'given_url',
    message: 'Enter Url:'
}])
    .then(answers => {
        var url = answers.given_url;
        var qr_svg = qr.image(url);
        qr_svg.pipe(fs.createWriteStream('url.png'));

        fs.writeFile('messageUrl.txt', url, (err) => {
            if (err) throw err;
            console.log('The url has been saved!');
        });

    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });


