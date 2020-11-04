// 1 - 2

var var1 = 'string';

// 3
var var2 = ['g'];
console.log(var2);

// 4
var res = 'o!'.concat(var2);
console.log(res);

// 5
var var3 = 49;
console.log(var3);

// 6
var var4 = '65';
console.log(var4);

// 7

console.log(var3 + var4);

// 8

console.log(parseInt(var3 + var4));

// 9
var arr = [];
console.log(arr);

// 10

// for (var arr = 1; arr < 11; arr++) {
//     console.log(arr);
// }

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr);

// 11

arr.push(11);
console.log(arr);

// 12

arr.pop();
console.log(arr);

// 13

arr.unshift(0);
console.log(arr);

// 14

arr.shift();
console.log(arr);

// 15

arr.splice(0, 1);
console.log(arr);

// 16

arr.splice(7, 2);
console.log(arr);

// 17

arr.splice(0, 0, -1, 0, 1);
console.log(arr);

// 18

var copy = arr.slice(0, (0, 3));
console.log(copy);
