/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from "inquirer";
import fs from "fs";

import qr from "qr-image";

const questions = [
  {
    type: "input",
    name: "url",
    message: "What's the URL you want to convert to QR code?",
  },
];

inquirer.prompt(questions).then((answers) => {
  console.log(JSON.stringify(answers, null, "  "));
  // Save the user input to a text file
  fs.appendFileSync("user_input.txt", `URL: ${answers.url}\n`);
  var qr_png = qr.image(answers.url, { type: "png" });
  qr_png.pipe(fs.createWriteStream("qr.png"));
});
