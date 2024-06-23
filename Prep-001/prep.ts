// 1
let name:string = "jahn"

// 2

let age:number = 23

// 3
let isStudent:boolean = false

// 4
let city:string = "Jehlam"


//5
let temprature:number = 30


//6
let hasPet:boolean = true


//7
let country:string = "pakistan"
country = "japan"
console.log(country);



//8
let score:number = 0

score = 95

console.log(score);


// 9
let isActive:boolean = false


//10
const language:string = "TypeScript"


//11
let state = "Texas";


//12
let distance = 150



//13
let isAvailable = true;



//14
let myCity = "Paris"

myCity = "London"



//15
let height = 5.9;

height =  6.1


//16
let isVarified = false
isVarified = true


//17
let color = "Red"



//18
const count = 100


//19
let isComplete = false




//20
let book = "Moby Dick"
book = "1984"

// Errors (Syntax Error, Type Error, Assignability Error)
//21 Assign a number to a string variable and observe the type error.
let year:string = 2025;


//22 Assign a string to a number variable and observe the type error.
let month:number = "August";



//23 Assign a boolean to a string variable and observe the type error.
let copy:string = true;



// 24  Assign a number to a boolean variable and observe the type error.
let isLucky:boolean = 123



//25 Use a variable before it is declared and observe the syntax error.
console.log(prep);
let prep:string = "yes"


//26 Declare a variable with the same name twice and observe the syntax error.
let dummy:string = "male"
let dummy:string = "female"


//27 Assign an incompatible type to a variable and observe the assignability error.
let numValue:number = 22;

// numValue = "Eleven"



//28 Try to change the value of a constant and observe the type error.
const veg:string = "cucumber"

// veg = "potato"



//29 Assign a value to a variable of a different inferred type and observe the error.
let numberOrString = 11;

// numberOrString = "Nine";




//30 Assign an array to a string variable and observe the type error. typescript
/*   let frut:string = ["apple","banana","mango"]   */




// Practice Questions on let, const, and var:
//31 Q1: Declare a variable username using let and assign your name to it. Then, try to reassign a different name to this variable.
let username:string = "Ali";

username = "Bravo"



//32 Q2: Declare a variable userId using const and assign it a value. Attempt to change the value and explain what happens.
const empNumbet:number = 1323;

// empNumbet = 1223;  //  Error: Cannot assign to empNumber because its a constant



//33 Q3: Declare a variable age using var and assign it a value. Then, reassign a new value to it.
var aged:number = 28;

aged = 29;



//34 Q4: Declare two variables, cityLet and cityVar, using let and var respectively inside a block. Try to access them outside the block and explain the results.
{
    let cityLet = "New York";     // cityLet is declared with let inside a block
    var cityVar = "Los Angeles";  // cityVar is declared with var inside a block
  }
  
 
//   console.log(cityLet); // Error: Cannot find name 'cityLet'.
  console.log(cityVar); // Outputs: Los Angeles
  


//35 Q5: Declare a const variable API_KEY and assign it a value. Try to redeclare this variable and explain the result.
// const API_KEY = "abc123";

//36 Try to redeclare the const variable 
const API_KEY = "def456"; // Error: Cannot redeclare block-scoped variable 'API_KEY'.



//37 Q6: Declare a let variable score and assign a value to it. Then, declare the same variable again within a different block scope and assign a different value. Explain the result.
let scored = 100

{
    let scored = 200
    console.log(scored);  //  output wil 200
}

console.log(scored);  //  output will be 100 by the value assigned in the outer scope



//38 Q7: Declare a var variable color inside a function. Try to access this variable before its declaration and explain the result.
function getColor() {
    console.log(color);   // undefined
    var color = "green"
    console.log(color);  // green
}
getColor()



//39 Q8: Create a variable using var inside an if block and try to access it outside the block. Explain the behavior.
if (true) {
    var message = "Hello Coderss";
}
console.log(message); // it will print the value of message


//40 Q9: Declare a let variable temperature inside a loop. Try to access this variable outside the loop and explain what happens.
for (let i = 0; i < 5; i++) {
    let temperature = 29+i;
    console.log(`Temperature inside loop ${i}: ${temperature}`);
    
}
// console.log(`Temperature outside loop: ${temperature}`);  // cannot acces, a compilation error occures



//41 Q10: Declare a const variable MAX_LIMIT and assign a value to it. Attempt to change the value and describe the error you encounter.
const MAX_LIMIT = 100;

// MAX_LIMIT = 200;  // Cannot assign to 'MAX_LIMIT' because it is a constant.



//42 Q11: Declare a let variable total in a block scope and assign a value. Reassign a new value within the same block and explain the outcome.
{
    let total = 100;     // declare a variable total with value 100
    console.log(total);  // outcome will 100
    
    total =200;          // reassign a value to the total 200
    console.log(total);  // outcome will be 200
    
}



//43 Q12: Declare a var variable greeting and assign it a value. Redeclare the same variable and assign a new value. Explain the behavior.

var greeting = "Good Morning";   // declared a variable greeitng with the value "Good Morning"


var greeting = "Good Night";   // redeclare variable with the same name and another value

console.log(greeting);  //  the output will Good Night


//44 Q13: Declare a let variable counter and initialize it to 0. Try to redeclare this variable in the same scope and describe the error.

let counter = 0;

let counter = 1;
//  we cannot redeclare a variable by the same name in same scope 


//45 Q14: Declare a const variable BASE_URL and assign a value. Try to reassign a new value to this variable and explain the result.
const BASE_URL = "http: abc@example.co m/"

BASE_URL = "http: xyz@example2.com"
// error will be observed in reassigning value to the constant variable



//46 Q15: Declare a let variable height and a const variable WIDTH. Attempt to log their values before they are declared and explain the behavior for each.
console.log(height2);  // Block-scoped variable 'height2' used before its declaration.
let height2 = 6;

console.log(WIDTH); // cannot access before initialization
const WIDTH = 4
// on hovering this msg arise "Block-scoped variable 'WIDTH' used before its declaration"


// Practice Questions on JSON Objects in TypeScript:
//47 Q1: Create a JSON file named student.json with the following content: Import this JSON data into a TypeScript file and print the student's name to the console.
// check student.json file and import.ts



//48 Q2: Create a JSON file named books.json with an array of book objects, each having title, author, and year properties. Example: Import this JSON data into a TypeScript file and print the titles of all the books.

// check books.json file and import.ts




//49 Q3: Create a JSON file named config.json with the following content: Import this JSON data into a TypeScript file and print the app's version and theme to the console.

// check config.json file and import.ts



//50 Q4: Create a JSON file named employees.json with an array of employee objects, each having id, name, position, and salary properties. Example: Import this JSON data into a TypeScript file and print the names and positions of all employees.

// see employee.json file and import.ts



//51 Q5: Create a JSON file named product.json with the following content: Import this JSON data into a TypeScript file and print the product's name and price to the console.

// see product.json file and import.ts













function testVar() {
    var x = 1;
    if (true) {
      var x = 2;
      console.log(x);
    }
    console.log(x);
  }
//   testVar();


  function testLet() {
    let x = 1;
    if (true) {
      let x = 2;
      console.log(x);
    }
    console.log(x);
  }
//   testLet();



//   const x = 10;
//   x = 20;
//   console.log(x);

// let x = 5;
// let x = 10;
// console.log(x);

// console.log(a);
// let a = 5;

if (true) {
    let a = 1;
  }
//   console.log(a);

const arr = [1, 2, 3];
arr.push(4);
// console.log(arr);


// function foo() {
//     console.log(a);
//     var a = 2;
//   }
//   foo();


// function bar() {
//     console.log(a);
//     let a = 3;
//   }
//   bar();


// var a = 1;
// function test() {
//   console.log(a);
//   var a = 2;
//   console.log(a);
// }
// test();

