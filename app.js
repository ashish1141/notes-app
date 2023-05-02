const validator= require('validator');
const chalk = require('chalk');
const getNotes = require('./notes.js');

const msg = getNotes();
// ashish

console.log(msg);
const k = validator.isEmail('corre');

console.log(chalk.inverse.green(k));