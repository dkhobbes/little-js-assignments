var args = process.argv;
var arg = args[2];
console.log('the arg', arg);

var a = 'hello';
var b = a + " " + arg;
console.log(b);

var c = 7;

var e = c + arg;
console.log('e', e);
