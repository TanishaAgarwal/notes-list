//var obj = {
 //   name : "TANISHA",
//    bool : true
//};
//console.log(typeof obj);
//console.log(JSON.stringify(obj));


//var presonString = '{"Name":"Tanisha", "Age":19}';
//var person = JSON.parse(presonString);
//console.log(typeof person);
//console.log(person);
const fs = require('fs');

var obj = {
    title : "book",
    body : "this is book"
};

objString = JSON.stringify(obj);
fs.writeFileSync('notes.json',objString);


var readString = fs.readFileSync('notes.json');
var noteObj = JSON.parse(readString);
console.log(noteObj.title,noteObj.body);