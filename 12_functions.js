// function addTwoNum (number1, number2){
//     const result = number1 + number2
//     return result

// }

// const result = addTwoNum(2,4)

// // console.log("Result: ", result);

// function loginUserMessage(username){
//     if(username== undefined)
//     {
//         console.log("Please Enter a username");
//         return
        
//     }
//     return `${username} just logged in`
// }

// console.log(loginUserMessage("Aanchal"))


function calculateCartPrice(...num1){  //rest operator
    return num1
}
console.log(calculateCartPrice(200,400,440));


//using objects in functions

const user ={
    username: "hitesh",
    price: 199
}

function handleObject(anyObject){
    console.log(`username is ${ anyObject.username} and price is ${anyObject.price}`);
}

//handleObject(user)
//changing the values
handleObject({
    username: "Aanchal",
    price: 599
})


const newArr =[200, 300, 400 , 500]
function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(newArr));

console.log(returnSecondValue([200, 300, 400 , 500]));


