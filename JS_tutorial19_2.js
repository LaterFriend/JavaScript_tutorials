// exporting a function
module.exports.greetPerson = function(name) {
    return `Hello ${name}`;
}

module.exports.a = "22";

const aqua = function(a,b) {
    return a+b;
}
module.exports.banger = aqua; // export neanonymní fce