// JS NUMBER
const a = 0xff; //Hexadecimální notace čísla
console.log(a);

//Pokud je numerický string (string, který je možno parsovat do numeric value) použit v matematické operaci - je automaticky přeparsován, až na "+"!
console.log(4-"2");
console.log("3"*"7");
console.log(9/"3");
console.log(6+"9"); // výsledek je string

//NaN
console.log(isNaN("4"));
console.log(isNaN(1-"d"));
// aritmetická operace (kromě "+") numeric hodnoty a stringu ústí v NaN
console.log(4-"hello");

//JavaScript čísla jsou ukládána v 64bit formátu IEEE-754 ("double precision floating point numbers")
// číslo je uloženo v 0.-51. bit, exponent v 52.-62. bitu, znaménko v 63. bitu
const known_problem = 0.1 + 0.2;
console.log(known_problem);
console.log(known_problem.toFixed(2)); //zaokrouhlení na 2 desetinné hodnoty - výsledek je ve Stringu
// Integery jsou přesné až na 15 čísel

//Metody pro práci s NUMBERS v JS
/*
isNaN()	                determines whether the passed value is NaN
isFinite()	            determines whether the passed value is a finite number
isInteger()	            determines whether the passed value is an integer
isSafeInteger()	        determines whether the passed value is a safe integer
parseFloat(string)	    converts the numeric floating string to floating-point number
parseInt(string, [radix])	    converts the numeric string to integer
toExponential(fractionDigits)	returns a string value for a number in exponential notation
toFixed(digits)	        returns a string value for a number in fixed-point notation
toPrecision()	        returns a string value for a number to a specified precision
toString([radix])	    returns a string value in a specified radix(base)
valueof()	            returns the numbers value
toLocaleString()	    returns a string with a language sensitive representation of a number
*/
// Metody voláme na objektu (třídě) Number (některé)
const t = 12;
console.log(Number.isInteger(a));
console.log(Number.isNaN(Number.NaN));
console.log(1231.3213.toFixed(2)); // Výsledek je String!

//NUMBER properties
// EPSILON	        returns the smallest interval between two representable numbers
// MAX_SAFE_INTEGER	returns the maximum safe integer
// MAX_VALUE	    returns the largest possible value
// MIN_SAFE_INTEGER	returns the minimum safe integer
// MIN_VALUE	    returns the smallest possible value
// NaN	            represents 'Not-a-Number' value
// NEGATIVE_INFINITY	represents negative infinity
// POSITIVE_INFINITY	represents positive infinity
// prototype	        allows the addition of properties to Number objects

console.log(Number.MAX_VALUE);
console.log(Number.MAX_SAFE_INTEGER);

//funkce Number() - pro konvert data typů do Numbers
const aa = "23";
const bb = true;
console.log(Number(aa));
console.log(Number(bb));