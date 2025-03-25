//console.log("2">1);  // "2" is converted to the number

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
console.log(null <= 0);


/*the reason is that an equality check == comarison >< >= <= work differently.
Comparison convert null into number , treating it as 0.
thats why (3) null >= 0 is true and (1) null > 0 is false. */


// strict check (===)

console.log("2"===2);// datatype also checked with the values