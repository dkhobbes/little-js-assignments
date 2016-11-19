///////////////////////////////////////////////////////
// JS warmup #4 1,4,2,5,3,6
///////////////////////////////////////////////////////
//
// // // point #1
// console.log('#1')
// // function aFunction(a, b, c) {
// //   // point #2
// console.log('#2')
// //   c(b);
// //   // point #3
// console.log('#3')
// // }
// //
// // // point #4
// console.log('#4')
// //
// // aFunction(7, 14, function(d) {
// //   // point #5
// console.log('#5')
// //   console.log(d); //What value is logged here?
// // });
// // // point #6
// console.log('#6')

///////////////////////////////////////////////////////
// JS warmup #5 1,5,2,4,3,6
///////////////////////////////////////////////////////

//Which console log runs first?

// // point #1
// console.log('#1')
// function aFunction(a) {
//   // point #2
//   console.log('#2')
//   a();
//   // point #3
//   console.log('#3')
//   console.log('that one');
// }
// // point #5
// console.log('#5')
// aFunction(function() {
//   // point #4
//   console.log('#4')
//   console.log('this one');
// });
// // point #6
// console.log('#6')

///////////////////////////////////////////////////////
// JS warmup #6  (correct answer 1,6,3,2,4,5,7)
///////////////////////////////////////////////////////

// var csv = 'name,age\nJoan,22\nBob,42\nFred,78'
//
// //point #1
// console.log('#1')
// function bFunction(c) {
//   //point #2
//   console.log('#2')
//   var z = c.split('\n');
//   return z;
// }
//
// function aFunction(a, b) {
//   //point #3
//   console.log('#3')
//   var f = b(a);
//   //point #4
//   console.log('#4')
//   for (var i = 1; i < f.length; i++) {
//     var d = f[i].split(',');
//     console.log(d[0], ' is ', d[1], ' years old');
//   }
//   //point #5
//   console.log('#5')
// }
//
// //point #6
// console.log('#6')
// aFunction(csv, bFunction);
// //point #7
// console.log('#7')

///////////////////////////////////////////////////////
// JS warmup #7 1,4,2,5,3,6
///////////////////////////////////////////////////////

var csv = 'name,age\nJoan,22\nBob,42\nFred,78'

//point #1
function aFunction(a, b) {
  //point #2
  var f = b(a);
  //point #3
  for (var i = 1; i < f.length; i++) {
    var d = f[i].split(',');
    console.log(d[0], ' is ', d[1], ' years old');
  }
}

//point #4

aFunction(csv, function(c) {
  //point #5
  var z = c.split('\n');
  return z;
});

//point #6
