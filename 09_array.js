// const myArray = [0,1,2,3,4,5] 

// // const myArr = new Array(1,2,3,4)
// // console.log(myArray[0]);

// // // myArray.push(4)//simply adds the value to array
// // // myArray.pop//removes last value
// // // myArray.unshift(9)//adds 9 aat 0 index
// // // myArray.shift() //shifts array  (1 -> 0)


// // // console.log(myArray.indexOf(4));
// // // console.log(myArray.includes(9));


// // // const newArray =myArray.join()//adds all the elements to string (type will be string)
// // // console.log(myArray);


// //slice and splice


// console.log('A', myArray);
// const myArray2 = myArray.slice(1,3)//slice gives the range

// console.log(myArray2)
// console.log("B", myArray)

// const myArray3 = myArray.splice(1,3)// splice gives the start and then no. of counts
// console.log("C", myArray2)
// console.log(myArray3);


const marvel_heros = ['Thor' , "Ironman", "Spiderman"]
const dc_heros = ['Superman' , "Batman", "flash"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);

// PUSH can do changes in original array while concat creates the new array

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

// const allNewHeros= [...marvel_heros, ...dc_heros] //here we are using spread operator which will spreadout all the eleme nts of the array
// console.log(allNewHeros);

// const newArray= [2, 3, [4, 5, 6], 7 ,[6,7,8,[4,5]]]
 
// const  realArray = newArray.flat(Infinity)
// console.log(realArray);

console.log(Array.isArray("Aanchal"));// returs if it is array or not

console.log(Array.from("Aanchal")); //convert into array 

console.log(Array.from({name:"Aanchal"})); //gives empty array

let score1 =100
let score2 = 200
let score3 =300

console.log(Array.of(score1,score2,score3)); //create an array