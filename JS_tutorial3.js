// Type Conversions
// 2 typy konverze - Implicitní (automatická) a explicitní (manuální)

//Implicitní (automatická) konverze
// Implicitní konverze do stringu
let result;
result = "3" + 2;
console.log(result);
result = 3 + "2";
console.log(result);
//string datový typ "+" jiný datový typ - vrátí string datový typ (chová se jako spojování string řetězců)
result = undefined + "ahoj";
console.log(result);
result = null + "ahoj";
console.log(result);
result = "ahoj"+true;
console.log(result);
// před součtem ("+") se jiný datový typ automaticky převede na string - poté klasické spojování dvou stringů pomocí "+"

//Implicitní konverze do Number
// Se znaménkem "-","*","/" se javascript obě strany pokusí automaticky převést na numeric - výsledek je numeric
result = "4"-"2";
console.log(result);
result = "4"-2;
console.log(result);
result = "4"*"2";
console.log(result);
result = 4 / "2";
console.log(result);

//Nan
// non-numeric a string ústí v NaN (not a number) při použítí "-","*","/"
result = "hello"-"world";
console.log(result);
result = true - "hello";
console.log(result);
result = undefined / "hello";
console.log(result);

//pokud použijeme boolean hodnoty - true je automaticky převeden na 1, false na 0
// JavaScript považuje 0 jako false a všechny nenulové hodnoty jako true. Pokud je true ale převedeno na Number - je to vždy 1
result = "4" - true;
console.log(result);
result = 4 + false;
console.log(result);
result = "4"/true;
console.log(result);

//null konverze - null je brán jako 0 po převodu na Number typ
result = 4 + null;
console.log(result);
result = "4" - null; // obě hodnoty jsou převedeny na Number, pokud by jsme použili "+" - vznikne nám "4null"
console.log(result);
result = "4" + null;
console.log(result);

//undefined - aritmetické operace undefined s Number, boolean nebo null vrací NaN
result = 4 + undefined;
console.log(result);  
result = 4 - undefined;
console.log(result);  
result = true + undefined;
console.log(result);  
result = null + undefined;
console.log(result); 

//Explicitní (manuální) konverze
//Konverze do Number - Number()
// platí : true = 1, false = 0, null = 0, undefined = NaN, string znakový řetězec = NaN, prázdný string řetězec = 0
let result2;
result2 = Number("2313");
console.log(result2);
result2 = Number("hello");
console.log(result2);
result2 = Number(true);
console.log(result2);
result2 = Number(false);
console.log(result2);
result2 = Number(undefined);
console.log(result2);
result2 = Number(null);
console.log(result2);
result2 = Number(" ");
console.log(result2);
// Ze stringu můžeme generovat čísla pomocí "parseInt()", "parseFloat()", unárního operátoru "+" a "Math.floor()"
result2 = parseInt("20.001");
console.log(result2);
result2 = parseFloat("20.001");
console.log(result2);
result2 = +"20.001";
console.log(result2);

//Konverze do Stringu - String(), toString()
result = String(324);
console.log(result);  // "324"
result = String(2 + 4);
console.log(result); // "6"

//other data types to string
result = String(null);
console.log(result); // "null"
result = String(undefined);
console.log(result); // "undefined"
result = String(NaN);
console.log(result); // "NaN"
result = String(true);
console.log(result); // "true"
result = String(false);
console.log(result); // "false"

//toString()
result = (324).toString();
console.log(result); // "324"
result = true.toString();
console.log(result); // "true"

// String() vezme null a undefined a převede je na string řetězec, ale toString() vyvolá error : "null are passed"

//Konverze do Booleanu - Boolean()
// undefined, null, 0, NaN, "" -> false!
result = Boolean('');
console.log(result); // false
result = Boolean(0);
console.log(result); // false
result = Boolean(undefined);
console.log(result); // false
result = Boolean(null);
console.log(result); // false
result = Boolean(NaN);
console.log(result); // false
// všechny ostatní hodnoty -> true
result = Boolean(324);
console.log(result); // true
result = Boolean('hello');
console.log(result); // true
result = Boolean(' ');
console.log(result); // true