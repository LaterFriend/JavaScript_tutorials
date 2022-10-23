// Operators 
// arithmetic operators: +,-,*,/,%,++,--,**
let x = 5;
let y = 3;
// addition
console.log('x + y = ', x + y);  // 8
// subtraction
console.log('x - y = ', x - y);  // 2
// multiplication
console.log('x * y = ', x * y);  // 15
// division
console.log('x / y = ', x / y);  // 1.6666666666666667
// remainder - modulo
console.log('x % y = ', x % y);   // 2
// increment - stejné jako v Javě
console.log('++x = ', ++x); // x is now 6
console.log('x++ = ', x++); // prints 6 and then increased to 7
console.log('x = ', x);     // 7
// decrement - stejné jako v Javě
console.log('--x = ', --x); // x is now 6
console.log('x-- = ', x--); // prints 6 and then decreased to 5
console.log('x = ', x);     // 5
//exponentiation
console.log('x ** y =', x ** y);

//Comparison operators: ==, !=, ===, !==, >, >=, <, <=
// == : pokud jsou hodnoty operandů stejné (provede změny datových typů)
// === : pokud jsou hodnoty operandů stejné a zároveň jsou operandy stejného datového typu (striktní porovnávání)
console.log(5=="5"); //true 
console.log(5==="5"); //false
console.log(5!=6); //true
console.log(5!==5) //false

//Logical operators: && (AND), || (OR), ! (NOT)
const r = 4, q = 3;
console.log((r<5)&&(q===3)); //true
console.log(false&&true); //false
console.log(false||true); //true

//Bitwise operators : & (bitwise AND), | (bitwise OR), ^ (bitwise XOR), ~ (bitwise NOT), << (left shift), >> (right shift), >>> (zero-fill right shift)
// používají se zřídka 

//String operators
console.log("Hello" + " World" + "!");
