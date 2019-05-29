const fs = require('fs');

var fetchNotes = () => {
    try{
        var readString = fs.readFileSync('notes-data.json');
        return JSON.parse(readString);
    }catch(e){
        return [];
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json',JSON.stringify(notes));
};

var add = (title,body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    }; 
   var duplicateTitle = notes.filter((note) => note.title === title);

   if(duplicateTitle.length === 0){
        notes.push(note);
        saveNotes(notes);
        return note;
   }
   
};

var list = () =>{
   var notes =fetchNotes();
   return notes;
};

var read = (title) => {
    var notes = fetchNotes();
    var foundNote = notes.filter((note)=> note.title === title);
    return foundNote[0];
};

var remove = (title) => {
    //fetch note
    var notes = fetchNotes();

    //filter,remove 
    var filteredTitle = notes.filter((note) => note.title !== title);
    
    //save new note array
    saveNotes(filteredTitle);  

    return notes.length !== filteredTitle.length;
};

var logNote = (note) => {
    console.log('----');
    console.log(`Title : ${note.title} `);
    console.log(`Body : ${note.body}`);
};

 module.exports = {
     add,
     list,
     read,
     remove,
     logNote
 };