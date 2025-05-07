
/* Task 1: Declare variables for a person's name, age, isStudent status, and favorite
prograrnming language.*/
let personName="raja babu";
let age=30;
let isStudent=true;
let favorite_language="python";

// Task 2: Print the values to the console.
console.log(`my name is${personName} and my age is ${age} and am i a student ${isStudent}i love ${favorite_language}`);

// Task 3: Try reassigning values to let and const variables and observe errors.
let number1=50;
console.log(number1);
number1=90;
console.log(number1);
const name="shakti kapoor";
console.log(name);
// name=govinda;
// console.log(name);
// not able to reassign name again show error


// Task 4: Create an object and an array, assign them to new variables, modify, and observe
// changes .

let obj1={name:"arvinda", age:80};

let array1 = [90, 85, 78];
console.log(array1)
 obj2 = obj1;
let array2 = array1;


array1.push(100);
console.log(obj1.age,obj1.name);
console.log(array1);
console.log(array2);


