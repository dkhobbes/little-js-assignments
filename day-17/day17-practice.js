var strings = ['cat', 'dog', 'mouse', 'hermit crab', 'weasel', 'shark', 'pen', 'tulips'];

function moreThanNumber(arr, number) {
  var outputArray =[];


  for (var i = 0; i < arr.length; i++) {

    if (arr[i].length > number) {
      outputArray.push(arr[i]);
    }
  }

  return outputArray;
}

var result = moreThanNumber(strings, 5);
// console.log('with more than number 5', result);


function lookingForLetter(arr, letter) {
  var outputArray =[];

  for (var i = 0; i < arr.length ; i++) {
    if (arr[i].indexOf(letter) > -1) {
      outputArray.push(arr[i]);
    }
  }
  return outputArray;
}

var result1 = moreThanNumber(strings, 5);
var result2 = lookingForLetter(result1, 'e');
// console.log('with more than 5 and letter e', result);

var result1 = moreThanNumber(strings, 5);
console.log('longer than 5', result1);
var result2 = lookingForLetter(result1, 'e');
console.log('longer than 5 and has e', result2);
var result3 = lookingForLetter(result2, 't');
console.log('with more than 5 and letter e and t', result3);
