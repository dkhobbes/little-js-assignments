var fs = require('fs');
var fileContents = fs.readFileSync('Most+Recent+Cohorts+(Scorecard+Elements).csv','utf-8');

var lines = fileContents.split('\n');
// var indivArray = lines[0].split(",")
// console.log('yay lines', lines);

// var actSpot=indivArray.indexOf('ACTCM75');
// console.log(actSpot);
//actSpot is 32

// var schoolSpot=indivArray.indexOf('INSTNM');
// console.log(schoolSpot);
//schoolSpot is 3

for (var i = 1; i < lines.length -1; i++){
  indivArray = lines[i].split(",");
  console.log(indivArray[3] + " ," + indivArray[32]);
};
