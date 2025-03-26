//++++++++++++ OBJECTS ++++++++++++
// Js Object hac=ve a special property called prototype (__proto__)



// const student ={ 
//     name: "Aanchal",
//     marks: 94.5,
//     printMarks: function(){
//         console.log('marks = ', this.marks)//this used on object reprensts the object name
//     }
// }

// const mySym = Symbol("key")
// const JsUser = {
// name: "Aanchal",
// age : 21,
// [mySym]: "myKey1",//sytax for symbol [] represnts symbol
// location :"Shimla",
// email :"aanchal@gmail.com",
// isLoggedIn : false,
// lastLoginDays: ["Monday", "Saturday"]
// }
//ways to access objects
// console.log(JsUser.email);
// console.log(JsUser["email"]);//recommended for special cases
// console.log(JsUser.mySym);
// console.log(JsUser[mySym]);


// JsUser.email =" aanchalsharma@gmail.com" // change in object
// // Object.freeze(JsUser)
// JsUser.email = "aanchal123@gmail.com"
// console.log(JsUser);


// JsUser.greeting = function(){
//     console.log("Hello users");
// }

// JsUser.greetingTwo = function(){
//     console.log(`Hello JS Users, ${this.name}`);
// }



// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());



// const tinderUser = new Object() //singleton object
const tinderUser = {}// non -singleton object
tinderUser.id ="123abc",
 tinderUser.name = "Sam",

// console.log(tinderUser)


// const regularUser = {
//     email : "some@gmail.com",
//     fullname:{
//         username :{
//             firstName:" Aanchal",
//             lastName: "Sharma"
//         }
//     }
// }

// console.log(regularUser.fullname.username);


// const obj1 = {1:"a", 2:"b"}
// const obj2 ={ 3:"c",4:"d"}
// // const obj3 = {obj1,obj2}
// const obj3 = Object.assign({}, obj1,obj2) //combining objects . Here {} represents the target, if we don't use this then obj1 will appear as the target

//const obj3 = {...obj1,...obj2} //mostly we use spread method
//  console.log(obj3);
// const users =[
//     {
//         id:1,
//         email:"hain@gmail.com"
//     },
//     {
//         id:1,
//         email:"hain@gmail.com"
//     },
//     {
//         id:1,
//         email :"hain@gmail.com"
//     }
// ]

//  user[1].email
//  console.log(tinderUser);

 console.log(Object.keys(tinderUser));
 console.log(Object.values(tinderUser));
 console.log(Object.entries(tinderUser));
 console.log(tinderUser.hasOwnProperty);

