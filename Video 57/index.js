console.log("I am a tutorial on loops");

let a =1;
// console.log(a);
// console.log(a+1);
// console.log(a+2);

for(let i =0; i<100;i++){
    console.log(a+i);
}

let obj={
    name :"Mukesh",
    age : 23,
    company:"Google"
}

for (const key in obj) {
    console.log(key);
    console.log(key,obj[key]);
}

for (const c of "Mukul Pandey") {
    console.log(c);
    // console.log(c.charCodeAt(0)); this will give the ascii value of the character
    // console.log(c.charCodeAt(0)-96); this will give the position of the character in the alphabet

}


let i = 5;
while(i<10)[
    console.log(i),
    i++
]

let j =5;
do {
    console.log(j);
    j++;
} while (j<6);
// this will run the loop at least once even if the condition is false
// this is because the condition is checked after the loop is executed
// this is useful when you want to run the loop at least once and then check the condition

