// var stuff = [
//   { name: 'Nora Theriot', age: 67},
//   { name: 'Bob Smith', age: 89 },
//   { name: 'Fred Jones', age: 45 },
//   { name: 'Steven Strange', age: 38 }
// ];
//
// for (var i = 0; i < stuff.length; i++){
//     var obj = stuff[i];
//     console.log(obj.name, obj.age);
// }

var fs = require('fs');
var callback = function(err, data) {
  var lines = data.split('\n');
  console.log(lines);


  for (var i = 2; i < lines.length; i++){
    var line = lines[i];
    var lineValues = line.split(',')
    var yearString = line[0];
    var matchSet = yearString.match(/\d\d\d\d/)

    // if(){
    console.log(lines[i]);
  // }
}
}
 fs.readFile('players_r_ruthba01_batting_standard.csv', 'utf-8', callback;
