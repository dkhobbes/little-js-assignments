var names = ['Fred', 'Wilma', 'Barney', 'Betty'];
var mNames = [];

for (var i = 0; i < names.length; i++) {
if(names[i].indexOf("m") != -1)

{mNames.push(names[i])
  };
}

console.log(mNames);

/*
Write a for loop to loop over the array and use the loop to check each name to see if it contains the letter 'm'. If it does, add it to the mNames array.
Note: you might want to remind yourself of how the `indexOf` function works on string.
Expected Output:
[ 'Wilma' ]
*/
