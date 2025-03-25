//+++++++++++++++ Numbers +++++++++++


// const score= 400;

// const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString)// convert the number to string and the we can use properties of string like length,etc.
// console.log (balance.toString().length);
// console.log(balance.toFixed(2))// gives the decimal here we have added 2 as the decimal value

// const  otherNumber = 23.98497

// console.log(otherNumber.toPrecision(2)); //used for approximation or gives precise value 

// const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));// Organising it ( adding ",")


//+++++++++++++ Maths +++++++++++++++++++++++++


console.log(Math);
console.log(Math.abs(-4)); //abs(absolute) convert the value to positive
console.log(Math.round(4.3));// round of value
console.log(Math.ceil(4.3));// round of gives upper value
console.log(Math.floor(4.3));// round of gives lower value

console.log(Math.min(4,5,7,3));// returning  minimum value
console.log(Math.max(4,5,7,3));// returning  maximum value
console.log(Math.random());// gives the value 0-1 and always gives random value or diff value
console.log(Math.random()*10 +1 ); //value more than 0 (means min value 1)
console.log(Math.floor(Math.random()*10) +1 );//so that it will only give lower value

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)));
console.log(Math.floor(Math.random() * (max - min + 1)) + min);


