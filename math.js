/ To run JS in VSC run: node <filename>

//Var key word is reassignable and redeblarable
var something = 12;

something = 13;

var something = 'A string';

// console.log(something);

// Let is reassignable.
// Let is not re-declarable within its scope.
//Unless absolutely necessary, dont use the same name twice
let anotherVariable = true;

anotherVariable = false;

{
  let anotherVariable = 'Hello'; //THis variable only exists inside where it was declared
}

// console.log(anotherVariable);

//Const keywork is NOT- reassignable and NOT redeclarable in scope
const password = '123456';

// password = '12' // cannot reassign constant variable

//Literals are values that arenot saved to variables/places in memory
// console.log(typeof true); //boolean
// console.log(typeof 'Hello World!'); //string
// console.log(typeof 42); //number

//Not a literal because value is saved to memory
let hello = 'hello world';

let num1 = 13;
let num2 = 23;

console.log(num1 + num2) // Addition
console.log(num1 - num2) // Subtraction 
console.log(num1 * num2) // Multiplication
console.log(num1 / num2) // Division
console.log(num2 % num1) // Modulos
console.log(4**4) //Exponentiation - to the power of

//Artithmetic Shorthand
let newNumber = 9;
newNumber -= 3; // newNumber is now equal to 6
newNumber /= 3; // newNumber is now equal to 2
newNumber *= 3; // newNumber is now equal to 6
newNumber %= 3; // newNumber is now equal to 0
newNumber++ //newNumber is now equal to 1
newNumber-- //newNumber is now equal to 0

//Compairison Operators
console.log(3 > 2) // Greater than
console.log(3 < 2) // Less tham
console.log(3 >= 2) // Greater than or equal too
console.log(3 <= 2) // Less than or equal too
console.log(true == 1) // Loose compairison to each other, compares values not data types
console.log(3 === "3") // Strict compairison to each other, both data type and value has to match
console.log(3 != 2) // NOT equal too

//Logical operators - always return a true or false value
// AND - &&
console.log(3 > 2 && 2 > 0) // True because all compairison are true
console.log(3 > 2 && 2 > 0 && -1 > 0) // False because 1 compairson was false

// OR - || - with OR only one compairison must be true
console.log(3 > 2 || -1 > 0) //True because ATLEAST one compairison is true
console.log(2 > 3 || -1 > 0) // False because all compairisons are false

// NOT - !
console.log(!(3 > 2 || -1 > 0)) 
console.log(!(2 > 3 || -1 > 0)) 

//String Contactination
let word1 = "Hello,"
let word2 = "World!"

let concat = word1 + word2
let concat2 = word1 + 13
// console.log(concat)
// console.log(concat2)
console.log("a" != "b")
console.log("Hey" == "hey")

const frost =
	"Nature's first green is gold, \
Her hardest hue to hold. \
Her early leaf's a flower; \
But only so an hour. \
Then leaf subsides to leaf. \
So Eden sank to grief, \
So dawn goes down to day. \
Nothing gold can stay.";

console.log(frost);


let string = `THis is a quote he said, \'what is up\' `

//Check if all numbers are divisible by 5. Cache the result in a variable.
//Check if the first number is larger than the last. Cache the result in a variable.
//Accomplish the following arithmetic chain:
//Subtract the first number from the second number.
//Multiply the result by the third number.
//Find the remainder of dividing the result by the fourth number.
//Change the way that isOver25 calculates so that we do not need to use the NOT operator (!) in other logic comparisons. Rename the variable as appropriate.


//Part 2: Practical Math