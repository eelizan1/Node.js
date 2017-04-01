// notes will store all of the exports mainly the functions which will be called by app.js

console.log('Starting notes.js');

var addNote = (title, body) => {
    console.log('Adding note', title, body);
};

var getAll = () => {
    console.log('Getting all notes');
};

// create getNote - prints title 
var getNote = (title) => {
    console.log('Got note: ' + title);
};

// removeNote - prints note removed 
var removeNote = (title) => {
    console.log('Removed: ' + title);
};


//module.exports = {
//    addNote
//};
module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
};