var args = process.argv;
var arg = args[2];
console.log('the arg', arg);

var a = 'hello';
var b = a + " " + arg;
// console.log(b);

var c = 7;

var e = c + arg;
// console.log('e', e);


e = arg < 6;
// console.log('e', e);

// if (arg == 'Fred' || arg == 'Bob' ) {
//   console.log('security clearance granted');
// }
//
// else {
//   console.log('security clearance denied');
// }

// if (arg.length >= 8){
//   console.log('long enough')
// }
// else {
//   console.log('please try again')
// }
// var isDaytime = false;
//
// if (arg == 'Bob' && isDaytime ) {
//   console.log('security clearance granted');
// }
// else {
//    console.log('please try again');
//  }

var isDaytime = true;
var clearedPeople = ['Bob', 'Fred', 'Wilma', 'BamBam'];

// if (clearedPeople.indexOf(arg) > -1 && isDaytime ) {
//   console.log('security clearance granted');
// }
// else {
//    console.log('security clearance denied');
//  }
var validPerson = clearedPeople.indexOf(arg) > -1

if (validPerson && isDaytime ) {
  console.log('security clearance granted');
}
else {
   console.log('security clearance denied');
 }
