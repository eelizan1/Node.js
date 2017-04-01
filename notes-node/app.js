console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes.js');

// yargs.arv is where the library stores its version of the arguments 
const argv = yargs.argv;

// a log to keep track of how the app is getting executed 
// variation --> var command = process.argv[2];
// grabs the first command - first argument in the array 
var command = argv._[0];
console.log('Command: ', command);

// using yargs
// console.log('Process', process.argv);
console.log('Yargs', argv);

// getting specific infor for the commands 
// console.log(process.argv);

// all the command line arguments 
//console.log(process.argv);

// process of adding a new note
// conditionals are based on what you typed on the cmd 
// SUPPORT FOR VARIOUS COMMANDS 
if (command === 'add') {
    // when user sepcifies 'add' in the command line 
    // add title and body in the arguments 
    // argv comes from yargs.argv 
    notes.addNote(argv.title, argv.body);
} else if (command === 'list') {
    // return all of the notes regardless of the title 
    notes.getAll();
} else if (command === 'read') {
    notes.getNote(argv.title);
} else if (command === 'remove') {
    notes.removeNote(argv.title);
} else {
    console.log('Command not recongized');
}

/*
    ex. 
    node app.js add
    output: Command: add
            Adding new note 
    
*/