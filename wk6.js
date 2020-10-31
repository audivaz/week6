//! Made some minor formatting changes.
// 2 - 3
let string = 'hello';
string = 'everyone';
console.log(string);

// 4
const score = 50;
console.log(score);

//9
//score = 100; //? Notice we get an error b/c we cannot reassign a constant variable

// 5 - 6

if (true) {
	var food = 'pizza';
}
console.log(food);

// 7

if (true) {
	let shark = 'bigfish';
	// console.log(shark);
}
//console.log(shark); //? Notice that it gives us an error, this is b/c let cannot escape the scope it is defined in, unlike var.

//10
const bank = [];

// 11
bank.push('fives', 'tens', 'twenties'); //? Nice, good job passing in all 3 at once!
console.log(bank);

// 12

const player1 = {};
const player2 = {};

//13 - 14
player1.name = 'Audi';
player1.age = 35;
console.log(`Hello, I am ${player1.name}`);

player2.name = 'Bruce-Lee';
player2.age = 32;

// 15 - 16

//? We want to be able to pass our greet function an object, however we'll need some properties inside of our functions, we can accomplish this w/ object destructuring. If we pass in the names of the properties inside of curly brackets in the parameters can access them inside of our function under the same name as the property we specified in the parameters. Check out the example below.
// function greet() {
// 	console.log(`Hello I am ${player2.name} and I am ${player2.age}`);
// }

// greet();

function greet({ name, age }) {
	console.log(`Hello I am ${name} and I am ${age}`);
}

//? Now we can pass any object w/ a name & age property and write the string!
greet(player1);
greet(player2);

//? Object destructuring assignment
const { name, age } = player2;
console.log(name, age);

// 17

// const hello = () => { //? store it in a const variable named arrow1
const arrow1 = () => {
	// var arrow1 = console.log('hello world'); //? Console.log doesn't return anything here
	console.log('Hello world');
};

// hello();
arrow1();

// 18

movie = (str) => {
	//? You could omit the () around str as you don't need them on arrow function if you only have one parameter
	// var arrow2 = console.log(`${str}`); //? We shouldn't need to store it in a variable or pass a template literal in
	console.log(str);
};

movie('family guy');

// 19

//! 19 Sample solution

const arrow3 = (num1, num2) => num1 + num2; //? Still returns the value b/c I omitted the {}
console.log(arrow3(5, 5));

//! 19 BONUS

const bonus3 = (num1, num2) => {
	if (typeof num1 !== 'number' || typeof num2 !== 'number') {
		return 'ERROR!';
	} else {
		return num1 + num2;
	}
};

bonus3(5, 5); //? returns 10
bonus3(5, 'spidermonkey'); //? return "ERROR!"

//! 20 Sample solution

setTimeout(() => {
	console.log(`beep boop`);
}, 3000);

//! 21 Sample solution

for (const bill of bank) {
	console.log(bill); //? Writes fives, tens, twenties to console
}

//! 22 Sample solution

for (const key in player1) {
	console.log(player1[key]); //? Writes audi, 35 to the console
}

//! BONUS sample solution
const div = document.querySelector('div');

const harcourt = {
	name: 'Harcourt',
	age: 26,
	birthday: new Date('2/11/2001'),
	hobbies: ['cars', 'computers', 'travel', 'diy projects']
};

const months = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December'
];

// TODO: only prints valid dates between 1910 - 2899, must fix
function bio({ name, age, birthday, hobbies }) {
	let bio = `Hello my name is ${name}, I am ${age} years old. `;
	bio += `I was born in ${months[birthday.getMonth()]} of ${
		birthday.getYear() >= 100
			? '2' + birthday.getYear() - 100
			: '19' + birthday.getYear()
	}. `;
	bio += `My hobbies include: `;
	for (const hobby of hobbies) {
		if (hobbies.indexOf(hobby) === hobbies.length - 1) {
			bio += `and ${hobby}.`;
		} else {
			bio += `${hobby}, `;
		}
	}
	div.innerHTML = bio;
}

bio(harcourt);
