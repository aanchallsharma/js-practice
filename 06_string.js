const name = "Aanchal"
const repoCount = 70

// string interpolation
console.log(`Hello my name is ${name} and my repository count is ${repoCount}`);

const gameName = new String('aanchalas')

console.log(gameName[0]);
console.log(gameName._proto_);


// console.log(gameName.__proto__);//{} it means its prototype is object
// console.log(gameName.length);// to get the length of the string
// console.log(gameName.toLowerCase());
// console.log(gameName.charAt(2));// get the character at given index
// console.log(gameName.indexOf('i'));// get the index of given character

// const newString = gameName.substring(0,2)//string is converted into substrings
// console.log(newString);

// const anotherString = gameName.slice(-4,3)//slice not get properly we can use negative values in slics
// console.log(anotherString);

const newStrignone = "   Aanchal  "
console.log(newStrignone);
console.log(newStrignone.trim());// space is removed using trim function

const url="https://aanchal.com/aanchal%21sharma"

console.log(url.replace('%21', '_'))

console.log(url.includes('aanchal'))

console.log(gameName.split('-'));