// DOM Manipulation 

// Event Listeners

//element.addEventListner('click', function)

const buttonTwo = document.querySelector('.btn-2');
function alertBtn() {
    alert('I love JavaScript!');
};
buttonTwo.addEventListener('click',alertBtn);

// Mouseover
const newBackgroundColor = document.querySelector('.box-3');

function changeBgcolor() {
    newBackgroundColor.style.backgroundColor = 'blue';
}
newBackgroundColor.addEventListener('mouseover',changeBgcolor);


// Event propagation
/*
 - Určuje v jakém pořadí elementy obdrží event
 - Existují dva způsoby, jak zpracovat pořadí šíření eventu v modelu HTML DOM
    - Event Bubbling 
    - Event Capturing 

 1. Bubbling
  - Když na elementu proběhne event -> nejdříve na daném elementu spustí obslužnou rutinu eventu
    - pak na parent elementu
    - pak na dalších nadřazených elementech
  - Defaultně se všechny eventy zpracovávají v tomto pořadí -> od eventu středového elementu až po event nejvzdálenějšího elementu

 2. Capturing 
  - Opak bubblingu
  - Obsluha eventu nejdříve proběhne na parent elementu a až poté na elementu, který daný event vyvolal
  - ve zkratce: event je nejprve zachycen na elementech nejvzdálenějších a poté je postupně propagován směrem k centrálnímu elementu, který event vyvolal
  - v jazyku DOM struktury: event začne na root node a postupuje směrem k node, která event vyvolala 
*/