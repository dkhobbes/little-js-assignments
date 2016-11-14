
var line = 'Bob,Smith,42,m';
//var line = 'Antiochus,Epiphanes,2150,m'
var index = line.indexOf('smith');
// start of index to pull smith is 4. the end of index to get smith is 9. The difference is 5.

var sub = line.substr(4,5);
console.log('substr', sub);

sub = line.substring(4,9);
console.log('substring', sub);

// use substr to extract the last name of smith into a substring
// use substring to extract the last name of smith into a substring

// how can we avoid hard coding these value?

//var line = 'Antiochus,Epiphanes,2150,m';
var line ='Bob|Seger|71|m';
// var line = 'bob,dylan,1999,m';

startIndex=line.indexOf(',');
endIndex = line.indexOf(',', startIndex + 1);
console.log('startIndex', startIndex);
console.log('endIndex', endIndex);

output = line.substring(startIndex +1, endIndex);
console.log('calculated output', output);

//split

var lineAsArray = line.split('|');
console.log(lineAsArray);
console.log(lineAsArray [2]);

// var line ='Bob|Seger|80|m';
// var lineAsArray = line.split('|');
// console.log(lineAsArray [2]);
