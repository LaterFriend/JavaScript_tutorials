//JS for...in loop
/*
for (key in object) {
    //body of for..in
}
*/
const student = {
    name: "Monica",
    class: 4,
    age: 12
};

for (let iter in student) {
    console.log(`${iter} => ${student[iter]}`);
}
// V každé iteraci loopu je proměnné "iter" přiřazena hodnota klíče (key) (string,array - index pozice jednotlivých elementů/znaků, objekt - key hodnota v dané property apod.)

const salaries = {
    Jack : 23441,
    Paul : 123213,
    Daniel : 9999999999
};

for (let i in salaries) {
    let salary = "$" + salaries[i];
    console.log(`${i} : ${salary}`);
};

const string = "ahojky";
for (let char in string) {
    console.log(string[char]);
}

const arr = ["hello", 1, "JavaScript"];

for (let x in arr) {
    console.log(arr[x]);
}
// V array kde je důležité pořadí prvků je lepší použít for...of loop