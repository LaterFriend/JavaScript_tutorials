// if...else
let number = 4;
if (number > 0) {
    console.log("Positive number");
}
number = -3;
if (number > 0) {
    console.log("Positive number");    
} else {
    console.log("Negative number");
}
number = 0;
if (number > 0){
    console.log("Positive number");
} else if (number < 0) {
    console.log("Negative number");
} else {
    console.log("Number = 0");
}
number = -3;
if (number >= 0) {
    if (number === 0)
        console.log("Number = 0");
    else
        console.log("Number is positive");  
} else console.log("Number is negative");
// Pokud else/if větev obsahuje pouze jeden statement - můžeme vynechat složené závorky - dokonce nemusíme používat ani odsazení na další řádek

//FOR LOOP
/*
    for (initialExpression; condition; updateExpression) {
        // for loop body
    }
*/
const n = 5;
for (let i=1;i<=n;i++){
    console.log(`I love cheese ${i}`);
}
//initialExpression se provede pouze jednou, condition se provede -> pokud true -> provede se tělo loopu a následně updateExpression
let sum = 0;
const nn = 100;
for (let i=1;i<=nn;i++){
    sum+=i;
}
console.log(`SUM : ${sum}`);

//WHILE LOOP | DO...WHILE LOOP
//WHILE LOOP - nemusí se provést ani jednou / podmínka se vyhodnocuje na začátku
let i = 1;
while (i<=n){
    console.log(i);
    i++;
}
//DO...WHILE LOOP - tělo cyklu se vždy provede alespoň jednou / podmínka se vyhodnocuje na konci
i = 1;
do {
    console.log(i);
    i++;
} while (i<=n);
