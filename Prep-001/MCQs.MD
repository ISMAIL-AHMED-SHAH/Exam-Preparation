MCQs (Json object , errors , strong typing , let const var)
Question 1
What does the command npm install -g typescript do?

B) Installs TypeScript globally on your system.

Question 2
Why would you use the -g flag with the npm install command?

B) To install the package globally, making it available system-wide.


Question 3
What is the purpose of the command tsc --init?

C) Creates a tsconfig.json file to configure TypeScript options.

Question 4
Which file is created when you run the tsc --init command?

B) tsconfig.json


Question 5
What does the command npm init -y do?

A) Initializes a new npm project with default settings.


Question 6
Why would you use the -y flag with the npm init command?

B) To skip the interactive prompts and use default settings for project initialization.


Question 7
What does the command npm i @types/node -D do?

B) Installs type definitions for Node.js as a development dependency.


Question 8
What is the purpose of a .gitignore file in a project?

B) To ignore specific files and directories in version control.


Question 9
What does the tsc command do when run in a TypeScript project?

C) Compiles TypeScript files into JavaScript.


Question 10
What does the node (file name) command do?

B) Executes the specified JavaScript file using Node.js.


Question 11
What does JSON stand for?

A) JavaScript Object Notation


Question 12
What is JSON primarily used for?

B) Storing and transferring data


Question 13
Which of the following is a correct JSON syntax for an object?

B) { "name": "Vipin", "age": 21, "gender": "male" }


Question 14
Can JavaScript objects contain functions while JSON cannot?

A) Yes


Question 15
Which of the following is true about JSON compared to JavaScript objects?

C) JSON can be created and used by other programming languages.


Question 16
Which of the following is the correct way to write a key/value pair in JSON?

C) "name": "Vipin"


Question 17
Which of the following must be true for JSON keys and values?

A) Both must be in single quotes.
B) Both must be in double quotes.
C) Only keys must be in double quotes.
D) Only values must be in double quotes.

Question 18
Which of the following correctly represents a JSON object?

B) { "name": "Vipin", "age": 21 }


Question 19
Which of the following is a valid JSON array?

A) [ "Vipin", "Ankit", "Raj" ]


Question 20
How do you access the value of the "age" property in a JSON object using dot notation?

B) detail.age


Question 21
Which of the following statements is true about accessing JSON data?

C) You can use both dot notation and square bracket notation to access JSON data.


Question 22
What is the output of the following code?

const detail = { name: "Vipin", age: 21 };
console.log(detail["age"]);

B) 21


Question 23
Which format is most commonly used for transmitting data between a server and a client?

C) JSON


Question 24
Why is JSON considered language independent?

B) Because it can be created and used by multiple programming languages.


Question 25
What is the output of the following code?

const detail = { name: "Vipin", age: 21 };
console.log(detail.name);
A) Vipin


Question 26
Which of the following is NOT a correct statement about JSON?

C) JSON values can be functions.


Question 27
What is a key difference between JSON and JavaScript objects?

C) JavaScript objects can include functions, while JSON cannot.


Question 28
Which of the following correctly represents a JSON object containing multiple key/value pairs?

A) { "name": "Vipin", "age": 21, "gender": "male" }


Question 29
Which notation is used to access the "name" value in the following JSON object?

const detail = { name: "Vipin", age: 21 };

B) detail["name"]


Question 30
Which of the following statements is true about JSON data?

B) JSON data is easy to parse and use.


Question 31
What does the presence of a tsconfig.json file indicate?

B) The root of a TypeScript project

Question 32
Which of the following properties is NOT part of a compilerOptions in tsconfig.json?

D) files


Question 33
Which property in tsconfig.json specifies the list of files to be included in the compilation?

A) include



Question 34
What is the default file extension for TypeScript files?

A) .ts


Question 35
Which command is used to compile TypeScript code using tsconfig.json?

C) tsc --build



Question 36
Which of the following JSON formats is correct for defining a string proper
C) { "name": "Vipin" }


Question 37
How can you exclude certain files from being compiled in tsconfig.json?

A) Using exclude property

Question 38


What is the purpose of the sourceMap option in tsconfig.json?

A) To include source maps in the output files
line#55


Question 39
Which JSON key/value pair format is valid in JSON?

C) { "name": "Vipin" }


Question 40
What does the noImplicitAny compiler option do?

- B) Disallows variables to have the any type implicitly
line#86



Question 41
What is the extension for a TypeScript declaration file?

- B) .d.ts



Question 42
Which of the following is a valid tsconfig.json file property for specifying the root files?

- B) files



Question 43
What does the outFile compiler option do?

- B) Specifies the name of the output file
line#57


Question 44
Which of the following can be used to extend a base configuration in tsconfig.json?

- B) extends


Question 45
Which of the following TypeScript types does NOT exist?

- D) int


Question 46
Which type error does this typescript code create? typescript let value: number = "abc";

- C) Type error


Question 47
Identify the type error in the typescript code given below: typescript let items: number[] = [1, 2, "three"];

- B) Type error



Question 48
Which typescript feature can create type error?

- C) Type casting


Question 49
What type error does this code create? typescript let isDone: boolean = "yes";

- B) Type error



Question 50
Which assignment will produces typescript error?

- C) let z: number = "five";



Question 51
What type error does this code create? typescript let obj: {name: string, age: number} = {name: "John", age: "30"};

- B) Type error



Question 52
Identify Assignability error: typescript let tuple: [string, number] = ["hello", "world"];

- B) Type error



Question 53
Which is not a type in typescript types?

- D) integer


Question 54
What will be the output of this typescritp code? typescript let person: {name: string, age: number} = {name: "Alice", age: "25"};

- B) Type error



Question 55
What is the error in this typescritp code: typescript let nums: number[] = [1, 2, 3]; nums.push("four");

- B) Type error



Question 56
What will be the output of this typescritp code? typescript let unionType: string | number = "hello"; unionType = true;

- B) Type error



Question 57
Which assignment is correct?

- B) let age: number = 30;


Question 58
What is the error in the code below: typescript let point: {x: number, y: number} = {x: 10, y: "20"};

- B) Type error



Question 59
Which statement will porduce typescript type error?

- C) let isActive: boolean = "true";



Question 60
Which of the following is a correct way to declare a variable in TypeScript?

- A) var x: string = "hello";



Question 61
Which of the following is NOT a valid TypeScript syntax?

- C) var z boolean = true;



Question 62
What will be the output of the following TypeScript code? typescript let num: number = "123";

- A) Syntax error



Question 63
Identify the syntax error in the following TypeScript code: typescript let arr: number[] = [1, 2, 3


- B) Missing closing bracket


Question 64
Which of the following statements is incorrect in TypeScript?


    C) let bool: boolean = "true";



Question 65
What is the main difference between let and var?

b) let is block-scoped, and var is function-scoped


Question 66
What will the following code print?

function testVar() {
  var x = 1;
  if (true) {
    var x = 2;  // Redeclare x within the same function scope and assign it the value 2
    console.log(x);  // this will print the of x which is 2
  }
  console.log(x); // this will also print the reassign value which is 2
}
testVar();

b) 2 2


Question 67
3. What will the following code print?
function testLet() {
  let x = 1;
  if (true) {
    let x = 2;
    console.log(x); //  this will print the value of a inner x which is 2
  }
  console.log(x); this will print the vlue of outer x which is 1
}
testLet();

c) 2 1


Question 68
Which of the following statements is true about const in TypeScript?

a) The value of a const variable cannot be changed


Question 69
What will the following code print?

const x = 10;
x = 20;  // cannot reassign the value of const variable
console.log(x);

c) Compilation error


Question 70
What happens if you declare the same variable name using let within the same block scope?

let x = 5;
let x = 10;  // cannot redeclare in same scope
console.log(x);

c) Compilation error


Question 71
In the context of let, var, and const, what is "hoisting"? 

a) Moving variable declarations to the top of the scope



Question 72
What will the following code print?

console.log(a);
var a = 5;
// Its throwing error on compilation, and while printing from js file it prints undefined

c) Compilation error


Question 73
What will the following code print?

console.log(a);
let a = 5;

c) Compilation error



Question 74
What is the temporal dead zone (TDZ) in the context of let and const? 
// its not cleared */

a) The time during which the variable is not accessible
b) The time after which the variable is accessible
c) The time during which the variable is undefined
d) None of the above

Question 75
What will the following code print?

if (true) {
  var a = 1;
}
console.log(a);
a) 1


Question 76
What will the following code print?

if (true) {
  let a = 1;
}
console.log(a);

c) Compilation error


Question 77
Can you reassign a const object in TypeScript? 

b) No



Question 78
What will the following code print?

const arr = [1, 2, 3];
arr.push(4);
console.log(arr);

b) [1, 2, 3, 4]


Question 79
Which of the following statements about var is false?

b) var is block-scoped


Question 80
What will the following code print?

function foo() {
  console.log(a);
  var a = 2;
}
foo();

c) Compilation error


Question 81
What will the following code print?

function bar() {
  console.log(a);
  let a = 3;
}
bar();

c) Compilation error


Question 82
Which of the following can be redeclared in the same scope without error?

a) var


Question 83
What will the following code print?

var a = 1;
function test() {
  console.log(a);
  var a = 2;
  console.log(a);
}
test();
a) 1 2
b) 2 2
c) undefined 2
d) 1 undefined

ans: c

Question 84
What will the following code print?

let a = 1;
{
  let a = 2;
  console.log(a);
}
console.log(a);
a) 1 1
b) 2 2
c) 2 1
d) 1 2

ans: c

Question 85
Which keyword(s) support block-level scoping in TypeScript?

a) var
b) let
c) const
d) Both b and c

ans: d

Question 86
What will the following code print?

const a = { x: 1 };
a.x = 2;
console.log(a.x);
a) 1
b) 2
c) Compilation error
d) Runtime error

ans: b


Question 87
What will the following code print?

const arr = [1, 2];
arr = [3, 4];
console.log(arr);
a) [1, 2]
b) [3, 4]
c) Compilation error
d) Runtime error

ans: c


Question 88
What will the following code print?

if (true) {
  var a = 10;
}
console.log(a);
a) 10
b) undefined
c) Compilation error
d) Runtime error

ans: 10


Question 89
What will the following code print?

if (true) {
  const a = 10;
}
console.log(a);
a) 10
b) undefined
c) Compilation error
d) Runtime error

ans: c


Question 90
8What will the following code print?

function foo() {
  var a = 1;
  let b = 2;
  {
    var a = 3;
    let b = 4;
    console.log(a);
    console.log(b);
  }
  console.log(a);
  console.log(b);
}
foo();
a) 3 4 3 2
b) 3 4 1 2
c) 3 2 1 4
d) 1 2 3 4

ans: a


Question 91
What will the following code print?

for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
a) 0 1 2
b) 2 2 2
c) 0 0 0
d) 1 1 1

❌❌❌
 3 3 3


Question 92
What will the following code print?

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
a) 0 1 2
b) 2 2 2
c) 0 0 0
d) 1 1 1

ans: a


Question 93
Which statement about const is true?

a) A const variable must be initialized at the time of declaration.
b) A const variable can be declared without initialization.
c) A const variable can be reassigned later.
d) None of the above

ans: a


Question 94
What will the following code print?

let x = 10;
if (true) {
  x = 20;
}
console.log(x);
a) 10
b) 20
c) Compilation error
d) Runtime error

ans: b




Question 95
What will the following code print?

function example() {
  if (false) {
    var x = 1;
  }
  console.log(x);
}
example();
a) 1
b) undefined
c) Compilation error
d) Runtime error

ans: c


Question 96
What will the following code print?

function example() {
  if (false) {
    let y = 1;
  }
  console.log(y);
}
example();
a) 1
b) undefined
c) Compilation error
d) Runtime 

ans: error


Question 97
What will the following code print?

const x = { a: 1 };
x.a = 2;
console.log(x.a);
a) 1
b) 2
c) Compilation error
d) Runtime error

ans: b


Question 98
What will the following code print?

const y = [1, 2, 3];
y[0] = 10;
console.log(y);
a) [1, 2, 3]
b) [10, 2, 3]
c) Compilation error
d) Runtime error

ans: b



Question 99
35. What will the following code print?
var a = 1;
let a = 2;
console.log(a);
a) 1
b) 2
c) Compilation error
d) Runtime error

ans: err


Question 100
What will the following code print?

var a = 1;
(function () {
  var a = 2;
  console.log(a);
})();
console.log(a);
a) 1 1
b) 2 2
c) 2 1
d) 1 2

ans: c