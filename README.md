1. What is the difference between var, let, and const?

Ans:
var

# It is the old way of declaring variables.

# It has function scope, not block scope.

# It can be redeclared and updated.

Example:

var x = 10;
var x = 20; (allowed)

let:

# Introduced in ES6.

# It has block scope (works inside {}).

# It cannot be redeclared, but it can be updated.

Example:

let x = 10;
x = 20; (allowed)

const:

# Also introduced in ES6.

# It has block scope.

# It cannot be redeclared or updated.

Example:

const x = 10;
x = 20 (not allowed)

---

2. What is the spread operator (...)?

Ans: The spread operator (...) is used to expand or copy elements of an array or object.

Example:

const arr1 = [1,2,3];
const arr2 = [...arr1,4,5];
console.log(arr2);

## output:[1,2,3,4,5]

3. What is the difference between map(), filter(), and forEach()?

Ans:

# map()

Creates a new array by transforming each element.

const nums = [1,2,3];
const doubled = nums.map(n => n \* 2);

# filter()

Creates a new array with elements that match a condition.

const nums = [1,2,3,4];
const even = nums.filter(n => n % 2 === 0);

# forEach()

Just loops through the array but does not return a new array.

nums.forEach(n => console.log(n));

4. What is an arrow function?
   Ans:An arrow function is a shorter way to write a function introduced in ES6.

- Example:
  const add = (a,b) => a + b;

---

5. What are template literals?

Ans: Template literals are used to create strings with embedded variables using backticks ( ).

- Example:

const name = "Joy";
const age = 20;

console.log(`My name is ${name} and I am ${age} years old.`);
