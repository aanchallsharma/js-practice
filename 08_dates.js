// +++++++++ Dates in Js ++++++++++

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleString());
console.log(typeof myDate);

// let myCreatedDate = new Date(2025,3,25)
// console.log(myCreatedDate.toDateString());

// let myCreatedDate = new Date(2025,3,25,5,33)
// console.log(myCreatedDate.toLocaleString());

let myCreatedDate = new Date("2025-03-25")
console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Date.now()/1000);
console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+ 1);
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday: "long"
})

