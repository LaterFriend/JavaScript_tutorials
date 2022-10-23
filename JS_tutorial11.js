//GETTER AND SETTER
// 2 typy objekt vlastností - Data properties (datové vlastnosti) , Accessor properties (přístupové vlastnosti)

// Data property
const student = {
    // data property
    firstName: "Monica"
};

// Accessor property
// metody, které získají (get) nebo nastaví (set) hodnotu objektu
//  get - Definování metody Getter pro získání hodnoty vlastnosti
//  set - Definování metody Setter pro nastavení hodnoty vlastnosti

// JS GETTER
// Používané pro přístup k vlastnostem objektu
// Ke GETTER metodě přistupujeme jako k vlastnosti (student.getName;)

const human = {
    firstName: "Daniel",
    get getName() {
        return this.firstName;
    }
};
// Přístup k data property 
console.log(human.firstName); //Daniel
// Přístup ke GETTER metodě
console.log(human.getName); //Daniel
// Pokus o přístup ke GETTERU jako ke standartní metodě
//  console.log(student.getName()); -- ERROR

// JS SETTER
// Používané ke změně hodnot u vlastností objektu

const pupil = {
    firstName: "Thomas",
    set changeName(newName) {
        this.firstName = newName;
    }
};

console.log(pupil.firstName);
pupil.changeName = "Sarah"; // Změna vlastnosti objektu za pomocí SETTERU
console.log(pupil.firstName);

// SETTER musí mít přesně jeden formální parametr

// Object.defineProperty()
// Metoda pro přidání GETTER a SETTER vlastností
const student2 = {
    firstName: "Monica"
};
//GETTER
Object.defineProperty(student2, "getName", {
    get : function () {
        return this.firstName;
    }
});
//SETTER
Object.defineProperty(student2,"changeName", {
    set : function (value) {
        this.firstName = value;
    }
});

console.log(student2.firstName); // Data property
student2.changeName = "Sarah"; // SETTER
console.log(student2.getName); // GETTER

// Object.defineProperty(obj, prop, descriptor)
    // 3 argumenty
    // 1. : Jméno objektu
    // 2. : Název vlastnosti
    // 3. : objekt popisující vlastnost