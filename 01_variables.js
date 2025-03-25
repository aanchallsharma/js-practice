const accountid = 123
let accountemail = "aanchalsharma@gmail.com"
var accountpassword = "012345"
accountcity = "Jaipur"


let accountstate;
// accountid = 3456 // not allowed


accountemail = "as@gmail.com"
accountpassword = "23453"
accountcity = "Shimla"


/*
Prefer not to use scope
becauze of issue in block scope and functional scope
*/


console.log(accountid);

console.table([accountid,accountemail,accountpassword,accountcity,accountstate])