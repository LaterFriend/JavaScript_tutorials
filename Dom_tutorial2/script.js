// DOM Manipulation 

// Traverse the DOM

// Parent Node Traversal

let ul = document.querySelector('ul');

console.log(ul.parentNode); // parent nod daného elementu
console.log(ul.parentElement); // parent element daného elementu
// <div class='container'> element je parent <ul> elementu

console.log(ul.parentNode.parentNode); 
console.log(ul.parentElement.parentElement); // tyto vlastnosti můžeme řetězit a tím najít parent parent element (grandparent element)
// <body> element je grandparent <ul> elementu

/*
Element vs Node
    Element
        - speciální type Nodu reprezentující jeden Nod v DOM tree struktuře
    Node
        - generický název pro jakýkoliv objekt v DOM hierarchii
        - document node, text node, comment node atd.
        - zkrátka Node je jakýkoliv DOM objekt
- Document node má HTML node jako child
- HTML node má list child nodů (body node + head node)
- Body node má list child nodů (top level elementy v našem HTML souboru)
- nodelist = array-like list Nodů

- Element je specifický typ nodu - může být přímo specifikovaný v HTML pomocí HTML tagů a může mít HTML vlastnosti jako ID nebo class apod.
- Každý Nod má speciální vlastnost .nodetype, která vrací typ daného nodu
*/



// Child Node Traversal
console.log(ul.childNodes); 
// zde je vidět rozdíl v element vs node
//  - childNodes vlastnost vrací NodeList všech child nodů
//  - mezi těmito nody jsou odsazení mezi jednotlivými <li> elementy (text.nodes) + samotné <li> elementy (element nodes)
console.log(ul.lastChild); // odsazení mezi <ul> tagem a prvním <li> tagem (text node)
console.log(ul.firstChild); // odsazení mezi <ul> tagem a posledním </li> tagem (text node)

ul.childNodes[1].style.backgroundColor = 'blue'; // stylování druhého child nodu
// s NodeListem pracujeme podobně jako s arrayem

// pouze element nodes :
console.log(ul.children); // vrací HTMLCollection = kolekce child elementů (pouze element nodes)
console.log(ul.firstElementChild); // první child element
console.log(ul.lastElementChild); // poslední child element

ul.children[2].style.backgroundColor = "red";
// s HTMLCollection pracujeme podobně jako s arrayem



// Sibling Node Traversal
// Sibling Nody nemusí být stejné typy nodů (např. komentář (text nod) je sibling <ul> elementu (element nod))
console.log(ul.previousSibling); // text Node - odsazení mezi <ul> a </h1> tagem
// pokud by zde toto odsazení nebylo - previousSibling by byl <h1> element
console.log(ul.nextSibling); // text Node - odsazení mezi </ul> a </div> tagem
// pokud by zde toto odsazení nebylo - nextSibling by byl null

// pouze element nodes :
console.log(ul.previousElementSibling); //h1 element 
console.log(ul.nextElementSibling); // null - <ul> je poslední child, nemá next sibling

