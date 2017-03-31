// initialization file for application
// calls all the functions here 

// to keep track of how our files are executing 
console.log('starting app.js');

// load in built in modules - fs.appendFile
// const is var to put in the require data 
// 'fs' -  get all of the contents of the fs module and store in fs variable  
const fs = require('fs');

// get system info - user info 
const os = require('os');

// load in own files by using a relative path 
// start from the root which is the project file then make path accordingly 
const notes = require('./notes.js');

// loading lodash moduel into project 
// pass in the name exactly as it appears in the json file 
const _ = require('lodash');

// var user = os.userInfo();

// Two arguments: file name, text to append to the file 
// user.username comes form the os.userInfo() 
// fs.appendFile('greetuser.txt', 'Hello ' + user.username + ' !');

// using template string - es6 feature 
// fs.appendFile('greetingtemplatestring.txt', `Hello ${user.username}!`);

// output: a new file wil be created in the project folder

// age is comming from the notes require 
// fs.appendFile('greetingswithage.txt', `Hello ${user.username}! You are ${notes.age}.`);

// calling the notes function in the notes.js
//var res = notes.addNote();
// prints new note 
//console.log(res);

// calling add function
//var sum = notes.add(3, 5);
//console.log('Results: ' + sum);
//
//console.log('Results: ', notes.add(4, 5));

// lodash - isString method
//console.log(_.isString(true)); // return false 
//console.log(_.isString('Enrico')); // return true

// lodash - uniq(array)
//var filterArray = _.uniq(['Enrico', 1, 'Enrico', 1, 2, 3, 4]); // output: array with no duplicates 
//console.log(filterArray);

var filterArray2 = _.uniq(['Mike']); // test nodemon 
console.log(filterArray2);