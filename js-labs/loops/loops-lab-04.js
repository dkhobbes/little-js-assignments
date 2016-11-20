

/*
Write a while loop and compute the sum of the values, then console log it.
Expected output:
61
*/
var nums = [1, 6, 42, 3, 9];
var i = 0;
var sum = 0;


while (i < nums.length) {
    sum = sum + nums[i]; ;
    i++;
}
console.log(sum);
