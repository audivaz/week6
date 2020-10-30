

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


var str3 = str2.slice(0, 4)


console.log(str3);







// 9

if (str2.includes('ell') === true) {
    console.log(true);
};





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


me.canDrink = true;
    console.log(me);





// 14

me.greet = function() {
    console.log(`Hello my name is ${this.name}!`);
}





// 15

me.greet();







// 16


// if (me.name.includes('e') === true) {
//     console.log('Your name has an e');
// } else if (me.name.includes('e') === false) {
//     console.log('Your name does not have an E');
// }







if (me.name.includes('e') === true) {
    console.log('Your name has an e');
} else {
    console.log('Your name does not have an E');
}








// 17 





// console.log()

// if (me.hasOwnProperty(canDrink))








me.thisFun =

function fun () {
    if (this.hasOwnProperty('canDrink')) {
        if(menubar.canDrink === true) {
            console.log(`${this.name} can drink`);
        } else if (this.canDrink === false) {
            console.log(`${this.name} cannot drink`);
        } else {
            console.log(`${this.name} hasn't said if he can drink.`)
        }
    }
}