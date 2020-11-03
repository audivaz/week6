// 1 - 2
var var1 = 'string';

// 3
// var var2 = ['g']; //! We can access string characters by index number, i.e. var1[0] === "s" var1[1] === "t"
var var2 = var1[5]; //? Probably the best way to do this
var2 = var1[var1.indexOf('g')]; //? indexOf() returns the index number of the specified parameter
var2 = var1[var1.length - 1]; //? Since its the last character of the string we can just specify the length of the string minus one
console.log(var2);

// 4
// var res = 'o!'.concat(var2); //! We just want to append "o!" onto our var2 variable which is "g" the result should then be "go!"
var2 += 'o!';
// console.log(res);
console.log(var2);

// 5
var var3 = 49;
console.log(var3);

// 6
var var4 = '65';
console.log(var4);

// 7
console.log(var3 + var4);

// 8
// console.log(parseInt(var3 + var4)); //! b/c of the parenthesis, what is inside will get evaluated first, therefore you get the two numbers stuck together since one is a string which results in 4965, then turns that into a number. To perform the actual mathematical operation we want to parse var4 into an integer and then add them.
console.log(var3 + parseInt(var4));

// 9
var arr = [];
console.log(arr);

// 10

// for (var arr = 1; arr < 11; arr++) {
//     console.log(arr);
// }

// arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //! You're loop was close you don't want to use the same arr variable check out my example below
for (let i = 1; i < 11; i++) {
	arr.push(i);
}
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
arr.splice(0, 0, -1, 0, 1); //! Awesome work!!
console.log(arr);

// 18
var copy = arr.slice(0, (0, 3)); //? Not quite sure how this works, but it is working haha. Typically you'd want to pass in the parameters as shown below.
// var copy = arr.slice(0, 3); //? slice(starting index, index up to but not including)
console.log(copy);
