let animals = ["eagle", "osprey","salmon"];
let key = animal => animal ==='salmon';
if (animals.some(key)===true) {
    console.log("swim");
}
console.log(key);