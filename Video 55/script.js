console.log("Kuchh Nhi h bs aise hi likh diya")

var a=10;
var b = 30;
var c= "Hello ji Kya hal hai";
var _a=55;
var $as=8;
//var is global variable which can be accessed anywhere in the code

//var 78a =10; // Not allowed to be named start with number 
//Naming is only allowed with alphabets, underscore and dollar sign

console.log(a+b);
console.log(a+b+20);
console.log(typeof a,typeof b,typeof c);

// const a =6;
// a= a+1; Not Allowed //const is used to declare a constant variable which cannot be changed later

// let a =10 ;
// let b =20 ;
// let is used to declare a variable because it is block scoped and can be changed later 
//best pracice is to use let instead of var 

// ====> Primitive Data Types in JS ===
let f= "Mukul";
let m= 10;
let n =5.69;
let p = true;
let q = null; //in js null is an object and it is used to represent no value or empty value
//null is a primitive data type in js
let y = undefined;

console.log(f,m,n,p,q,y);
console.log(typeof f,typeof m,typeof n,typeof p,typeof q,typeof y);

console.log(f+m+n+p+q+y); //concatenation of string and number

let obj = {
    name:"Mukul",
    age: 20,
    isStudent:true,
    marks: [10,20,35,30],
    "Address": "Greater Noida,Alpha 1"

}
console.log(obj);
console.log(obj.name); //accessing object properties using dot notation
console.log(obj["Address"]); //accessing object properties using bracket notation
console.log(obj.marks[2]); //accessing array element from object