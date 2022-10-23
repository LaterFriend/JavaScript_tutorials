// JavaScript Destructuring

const person = {
    jmeno: "Sarah",
    age: 23,
    gender: "Bag of chips"
}

// standard way:
let n = person.jmeno;
let a = person.age;
let g = person.gender;
console.log(n,a,g)
//Destructuring
//  let {jmeno, age, gender} = person;
let {gender, jmeno, age} = person; // nezáleží na pořadí proměnných při destructuringu (nemusí odpovídat pořadí key v Objektu)
// Musíme použít stejné názvy proměnných jako jsou názvy key hodnot
console.log(jmeno, age, gender);

//Pokud chceme použít jiné názvy proměnných než jsou názvy key hodnot v Objektu:
let { gender:gd, jmeno:jm, age:ag, animal:an="Dog" } = person; //použití default hodnoty (animal)
console.log(jm,ag,gd,an);

//Array Destructuring
const Arr = ["one", "two", "three"];

// destructuring 
const [x, y, z] = Arr;
console.log(x,y,z);

// použití default hodnot při destructuringu - stejné u objektu
let [xx=3,yy=5,zz=5,gg="ahoj"] = Arr; // Pro proměnné na které nevyzbyde položka z Arraye se použije default hodnota
console.log(xx,yy,zz,gg);

// Prohazování proměnných
let _x = 13;
let _y = 99;

[_x,_y] = [_y,_x];
console.log(_x);
console.log(_y);

//Přeskakování elementů
// Při destructuringu můžeme přeskakovat nechtěné předměty z rozkládaného arraye nebo objektu
const arr_ = ["one", "two", "three"];
const [j, ,k] = arr_; // druhý element v array se přeskočí a neuloží se do žádné proměnné
console.log(j,k);

//Uložení zbylých elementů do jedné proměnné - použití spread operátoru
const Arr_values = ["one","two","three","four","five"];
//destructuring - uložení prvního elementu do "m" a zbytku do "v" (jako array)
const [m,...v] = Arr_values;
console.log(m);
console.log(v);

// to samé u Objektu
const clovek = {
    jmeno : "Daniel",
    position : "Software developer",
    age : 23
}
let {jmeno:jmn,...rest} = clovek; //rest element musí být vždy poslední
console.log(jmn);
console.log(rest);

//Nested Destructuring
const Ar = ["one", ["two","three"],"four"];
const [e1,[e2,e3],e4] = Ar;
console.log(e1,e2,e3,e4);

const student = {
    name : "Jack",
    age : 24,
    hobbies : {
        read: true,
        playGame: false
    }
}
const {name:_e1,hobbies: {read:rd,playGame}} = student;
console.log(_e1,rd,playGame);
