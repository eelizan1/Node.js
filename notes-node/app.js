console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes.js');

// yargs.arv is where the library stores its version of the arguments 
const argv = yargs.argv;

// a log to keep track of how the app is getting executed 
var command = process.argv[2];
console.log('Command: ', command);

// using yargs
console.log('Process', process.argv);
console.log('Yargs', argv);

// getting specific infor for the commands 
// console.log(process.argv);

// all the command line arguments 
//console.log(process.argv);

// process of adding a new note
// conditionals are based on what you typed on the cmd 
// SUPPORT FOR VARIOUS COMMANDS 
if (command === 'add') {
    console.log('Adding new note');
} else if (command === 'list') {
    console.log('Listing all notes');
} else if (command === 'read') {
    console.log('Reading note');
} else if (command === 'remove') {
    console.log('Removing note');
} else {
    console.log('Command not recongized');
}

/*
    ex. 
    node app.js add
    output: Command: add
            Adding new note 
    
*/