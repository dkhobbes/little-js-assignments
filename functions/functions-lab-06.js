//function goes here

function shortstring(a, b, c){

  if (a.length < b.length && a.length < c.length) {
    return a;
  }

  else if (b.length < a.length && b.length < c.length) {
    return b;
  }

  else {
    return c;
  }

}

var result = shortstring("one", "second","four");
console.log(result);
/*
Write a function that takes three strings and returns the shortest. If two of the same length are passed in, it can return either.
*/
