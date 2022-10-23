// DOM Manipulation

// GetElementById()

const title = document.getElementById('main-heading'); // z HTML dokumentu vybereme element podle unikátního ID (H1)
// getElementById vrací referenci na první element s daným ID
// <h1 id="main-heading">Favourite Movie Franchise</h1>
console.log(title); // ukládáme do logu na web stránce - vývojářská konzole


//GetElementByClassName()
    // vrací kolekci všech elementů v dokumentu s daným class name
const listItem = document.getElementsByClassName('list-items');
console.log(listItem);
console.log(typeof(listItem)); // object (array)
/* 
0 : li.list-items
1 : li.list-items
2 : li.list-items
3 : li.list-items
4 : li.list-items
*/

//GetElementsByTagName()
    // vrací kolekci všech elementů daného tagu 
const tagItem = document.getElementsByTagName('li');
    // kolekce všech <li> elementů v dokumentu
console.log(tagItem);

//querySelector()
    // vrací !PRVNÍ! element splňující námi zadané podmínky
const container = document.querySelector('div');
    // vrací první div v HTML 
console.log(container);


//querySelectorAll()
    //vrací kolekci všech elementů splňujících podmínky
const containerALL = document.querySelectorAll('li');
    // vrací první div v HTML 
console.log(containerALL);


//Styling an Element
const css_title = document.getElementById('main-heading');
css_title.style.color = "red"; // upravíme css vlastnost color
css_title.style.fontSize = '2.5rem'; 
// tomuto se říká inline styling - funguje pouze na jeden element
console.log(css_title);


//Creating elements

const ul = document.querySelector("ul"); // vybereme <ul> element 
const li = document.createElement("li"); // vytvoříme element <li>

//Adding elements

ul.append(li); // vytvořený <li> element přidáme do <ul> elementu

// Modifying the text

const firstListItem = document.querySelector('.list-items');
// vybíráme první element s class = "list-items" (první <li> v <ul>)
console.log(firstListItem.textContent); // podobné jako innerText - ovšem vrací text stejně odřádkovaný či odsazený jako je tomu uvnitř elementu
console.log(firstListItem.innerHTML); // zobrazuje i vnořené tagy v elementu
console.log(firstListItem.innerText); // pouze viditelný text obsažený v elementu - string

li.innerText = "X-men"; // přidáváme text do nově vytvořeného <li> elementu


// Modifying Attributes & Classes

li.setAttribute('id','main-heading') // předáváme 2 parametry : 1. název měněného atributu 2. nová hodnota atributu
li.removeAttribute('id'); // odstranění atributu 'id' z daného elementu

const title_atr = document.querySelector('#main-heading');
console.log(title_atr.getAttribute('id')); // zobrazení hodnoty určitého atributu daného elementu

li.classList.add('list-items'); // přidání elementu do dané class
console.log(li.classList.contains('list-items')); // vrací true pokud je element v dané class
li.classList.remove('list-items'); // odebrání elementu z dané class 
console.log(li.classList.contains('list-items')); 

// Removing elements
li.remove(); // odstranění daného elementu


