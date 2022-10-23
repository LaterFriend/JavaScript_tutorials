import fetch from "node-fetch";

let url = "https://pokeapi.co/api/v2/pokemon/ditto";
fetch(url) // fetch funkce vraci promise 
    .then((data) => {console.log(data)})
    .catch((err) => {console.log(err)});