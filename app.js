const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes');

var command = process.argv[2];
console.log('PROCESS : ' , process.argv);

 var argv = yargs.argv;
 console.log('YARGS : ' ,argv);
 console.log('COMMAND : ',argv._[0]);

if(command === 'add'){
    console.log('Adding');
    var note = notes.add(argv.title,argv.body);
    if(note){
        console.log('Note created..');
        notes.logNote(note);
    }
    else console.log('This title already exists in the file');
}
else if (command === 'list') {
    console.log('listing');
    var allNotes = notes.list();
    console.log(`total number of notes are ${allNotes.length} .`);
    allNotes.forEach((note) => notes.logNote(note));
}
else if(command === 'read'){
    console.log('reading');
    var note = notes.read(argv.title);
    if(note){
        console.log('Note read..');
       notes.logNote(note);
    }
    else console.log('This title does not exists in the file');
}
else if(command === 'remove'){
    console.log('removing');
    var noteDel = notes.remove(argv.title);
    noteDel ? console.log('removed the note') : console.log('no match found');
}
else console.log("not found");