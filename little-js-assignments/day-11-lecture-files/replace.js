var longString = 'MedAssets is a company in Plano. They do medical stuff. The North Dallas .NET Users Group meets at MedAssets. I knew some programmers there who had to deal with them changing their name to something else. I do not want to work at MedAssets because the train does not go anywhere near there. However, MedAssets has free soda, so that would be nice.';

var newString = longString.replace('MedAssets', 'nThrive');

while (newString.indexOf('MedAssets') > -1) {
  newString = newString.replace('MedAssets', 'nThrive');
}

// allChange=longString.indexOf('MedAssets'+1, 'nThrive');
// console.log(newString);


var fs = require('fs');
var fileContents = fs.readFileSync('replace.js','utf-8');
// console.log(fileContents);

var lines = fileContents.split('\n');
console.log('yay lines', lines);

var i = 1;

while(i < lines.length) {
  var indivArray = lines[i].split(",");
  var lastThing = indivArray[3];
  lastThing = lastThing.replace(/"/g,'');

  console.log(lastThing);
  i++;
}
