//MULTIDIMENSIONAL ARRAY
const data = [
    [1,2,3],
    [1,2,3],
    [1,2,3]
];

let student1 = ['Jack', 24];
let student2 = ['Sara', 23];
let student3 = ['Peter', 24];
let studentsData = [student1,student2,student3];

console.log(studentsData[0]);
console.log(studentsData[0][1]);

//Přidání položky pomocí push (vnější array)
studentsData.push(["Daniel",23]);
console.log(studentsData);
//Přidání položky pomocí index notace
studentsData[3][2] = "Borec";
console.log(studentsData);
//Přidání položky do vnitřního arraye pomocí push()
studentsData[1].push("loser");
console.log(studentsData);
//Přidání položky na určitý index
studentsData.splice(1,0,["Timothy",41]);
// splice(na jakém indexu začínáme, kolik položek chceme smazat, položky kterými nahradíme smazané)
console.log(studentsData);
studentsData.splice(2,2); //smazání 2,3 index položky
console.log(studentsData);

console.log(studentsData.pop()); //smazání a vrácení poslední položky ve vnějším array
console.log(studentsData);
console.log(studentsData[1].pop()); //smazání a vrácení poslední položky ve vnitřním array (na index pozici 1 vnějšího array)

console.log(studentsData);

//ITERATING OVER MULTIDIMENSIONAL ARRAY
//forEach()
let studentsData_ = [ [ 'Jack', 24 ], [ 'Timothy', 41 ], [ 'Daniel', 23, 'Borec' ] ];
//Pomocí forEach s arrow callback funkcí
studentsData_.forEach((i)=>{
    i.forEach((j)=>{
        console.log(j);
    })
});
//Pomocí for..of
for (let i of studentsData_) {
    for (let j of i) {
        console.log(j);
    }
};