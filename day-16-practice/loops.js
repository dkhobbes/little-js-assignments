// for (var i = 0; i < 100; i++) {
//   console.log('I will not talk in class anymore.');
// }

// var values = [1, 2, 7, 5, 10, 8, 5, 3, 4, 6, 10];
// var i = 0;
// var sum = 0;
//
// while (sum < 20) {
//   sum += values[i];
//   console.log('happening', sum);
//
// i += 1;
//
// }

var totalMoney = 100.00;
var prices = [5.70, 15.98, 2.89, 17.14, 30.87, 19.50, 3.16, 24.21, 14.50];
var i = 0;

while (totalMoney - prices[i] > 0) {
  totalMoney -= prices[i];
  i++;
console.log('bought', i, 'things, cash left', totalMoney);
}
