// 1
var str1 = 'hello';
console.log(str1);

// 2
str1 += ' world';
console.log(str1);

// 3
var str2 = str1 + '!';
console.log(str2);

// 4
console.log(str2.length);

// 5
console.log(str2.toUpperCase());

// 6
console.log(str2[1]);

// 7
console.log(str2.indexOf('!'));

// 8
var str3 = str2.slice(0, 4);

console.log(str3);

// 9
//? We don't need to check if it equals true, b/c includes() method returns a boolean (true, false) already so we can just simply call the method and will appropriately return true or false depending on if the str included the passed argument 'ell'
// if (str2.includes('ell') === true) {
// 	console.log(true);
// }
console.log(str2.includes('ell'));

// 10
const me = {
	name: 'harcourt',
	age: 26
};

// 11
console.log(me.name);

console.log(me.age);

// 12
console.log(me['name']);

// 13

// me.canDrink = true; //? We can improve this by dynamically determining the value of canDrink depending on if age is greater than or equal to 21, we can do this w/ the ternary operator
me.canDrink = me.age >= 21 ? true : false;
console.log(me);

// 14
//? Great work! Nice use of this!
me.greet = function () {
	console.log(`Hello my name is ${this.name}!`);
};

// 15
me.greet();

// 16
// if (me.name.includes('e') === true) {
//     console.log('Your name has an e');
// } else if (me.name.includes('e') === false) {
//     console.log('Your name does not have an E');
// }

//? Again we don't have to check it equals true and .includes() returns a boolean
// if (me.name.includes('e') === true) {
// 	console.log('Your name has an e');
// } else {
// 	console.log('Your name does not have an E');
// }
//? Adding in toLowerCase() method so "E" will still match, which I think would best to do.
if (me.name.toLowerCase().includes('e')) {
	console.log('Your name has an e');
} else {
	console.log('Your name does not have an e');
}

// 17
// console.log()

// if (me.hasOwnProperty(canDrink))

//! Some slight mistakes here, you where checking menubar.canDrink, we don't want to check the menubar object we want to check the me object so we want to check me.canDrink, canDrink is either true or false therefore we don't need to check it's its equal to true just simply pass it in as the conditional statement. Second what is right of the equal side is an anonymous function, which has no name so you want to omit the fun() and replace it with just (). Third you don't want to do the if else if else as you have I would do if (nested if/else) & else as shown below for the desired behavior based on what you are console logging. Also you forgot to call the method at the end. Overall great work though!! It seems like you're doing a lot better w/ the JS stuff I hope the review has been helpful
// me.thisFun = function fun() {
// 	if (this.hasOwnProperty('canDrink')) {
// 		if (menubar.canDrink === true) {
// 			console.log(`${this.name} can drink`);
// 		} else if (this.canDrink === false) {
// 			console.log(`${this.name} cannot drink`);
// 		} else {
// 			console.log(`${this.name} hasn't said if he can drink.`);
// 		}
// 	}
// };
me.thisFun = function () {
	if (this.hasOwnProperty('canDrink')) {
		if (this.canDrink) {
			console.log(`${this.name} can drink`);
		} else {
			console.log(`${this.name} cannot drink`);
		}
	} else {
		console.log(`${this.name} has not said if he can drink.`);
	}
};

me.thisFun();
