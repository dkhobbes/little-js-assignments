var names = ['Fred', 'Wilma', 'Barney', 'Betty'];
var eNames = [];
var i = 0;

while(i < names.length){
if(names[i].indexOf("e") != -1)

{eNames.push(names[i]);
  };
  i++;
}

console.log(eNames);

/*
Write a while loop to loop over the array and use the loop to check each name to see if it contains the letter 'e'. If it does, add it to the eNames array.
Note: you might want to remind yourself of how the `indexOf` function works on string.
Expected Output:
[ 'Fred', 'Barney', 'Betty' ]
*/
