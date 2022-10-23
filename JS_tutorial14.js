// JavaScript String
const a = "hello";
console.log(a[1]); //e
console.log(a.charAt(1)); //e

// String je v JS neměnný - znak ve stringu nemůže být změněn
a[0] = "Q";
console.log(a);
// JS je case-sensitive
const b = "A";
const B = "a";
console.log(b===B);
//víceřádkové stringy
const message = "ahoj tohle je dlou\
hý string tak je na víc řádků \
a tak.";
console.log(message);

console.log(a.length);

//Více string metod
/*
charAt(index)	        returns the character at the specified index
concat()	            joins two or more strings
replace()	            replaces a string with another string
split()	                converts the string to an array of strings
substr(start, length)	returns a part of a string
substring(start,end)	returns a part of a string
slice(start, end)	    returns a part of a string
toLowerCase()	        returns the passed string in lower case
toUpperCase()	        returns the passed string in upper case
trim()	                removes whitespace from the strings
includes()	            searches for a string and returns a boolean value
search()	            searches for a string and returns a position of a match
*/

const text1 = "hello";
const text2 = "world";
const text3 = "         JavaScript         ";

const result1 = text1.concat(text2);
console.log(result1); //hello world

const result2 = text1.toUpperCase();
console.log(result2); //HELLO

const result3 = text3.trim();
console.log(result3); //"JavaScript"

//konvert stringu na array
const result4 = text1.split();
console.log(result4)

const result5 = text1.slice(1,3);
console.log(result5);

//funkce String()
const q = 224;
const d = true;

const string1 = String(q);
const string2 = String(d);

console.log(string1, string2);

console.log("Ahoj moje přezdívka je \"ZAMINI\"");
