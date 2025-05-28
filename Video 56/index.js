console.log("Hello I am Conditonal tutorial");

let age = 16;
let grace = 2;
// Arithmatic Operators
console.log(age+grace)
console.log(age-grace)
console.log(age*grace)
console.log(age/grace)
console.log(age**grace) //Exponential Operator 
console.log(age%grace)

// Assignement Operators
console.log(age+=grace);
console.log(age-=grace);
console.log(age*=grace);
console.log(age/=grace);
console.log(age**=grace);
console.log(age%=grace);

//Logical Operators
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false
console.log(!true); // false
console.log(!false); // true
console.log(true && true && true); // true
console.log(true && true && false); // false
console.log(true && false && true); // false
console.log(false && true && true); // false
console.log(true || true || true); // true
console.log(true || true || false); // true
console.log(true || false || true); // true
console.log(false || true || true); // true
console.log(true || false || false); // true
console.log(false || false || true); // true
console.log(false || false || false); // false
console.log(true && true || false); // true
console.log(true || true && false); // true
console.log(true && false || true); // true
console.log(false || true && true); // true
console.log(true && true && false || true); // true
console.log(true || true && false && true); // true
console.log(true && false || true && true); // true
console.log(false || true && true || false); // true
console.log(true && true || false && true); // true
console.log(true || false && true || false); // true
console.log(true && true || false && false); // true

// Comparison Operators
console.log(age==grace); // false
console.log(age!=grace); // true
console.log(age===grace); // false
console.log(age!==grace); // true
console.log(age>grace); // true
console.log(age<grace); // false
console.log(age>=grace); // true
console.log(age<=grace); // false
console.log(age>grace && age<grace); // false
console.log(age>grace || age<grace); // 
console.log(age>grace ? "True" : "False"); // True TERNARY OPERATOR



if(age>=18){
    console.log("You can drive");
}
else if(age==17){
    console.log("You can drive in 1 year");
}

else {
    console.log("You cannot drive");
}
