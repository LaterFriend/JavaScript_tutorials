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
  - v jazyku DOM struktury: event začne na targetu a postupuje směrem k root node
 2. Capturing 
  - Opak bubblingu
  - Obsluha eventu nejdříve proběhne na parent elementu a až poté na elementu, který daný event vyvolal
  - ve zkratce: event je nejprve zachycen na elementech nejvzdálenějších a poté je postupně propagován směrem k centrálnímu elementu, který event vyvolal
  - v jazyku DOM struktury: event začne na root node a postupuje směrem k node, která event vyvolala (target) 
*/

// capturing -> target -> bubbling
//3. parametr u addEventListener metody určuje zda chceme použít event capturing nebo event bubbling
//  defaultně false = event bubbling | true = event capturing
window.addEventListener('click',function() {
  console.log('Window');
  },false);
document.addEventListener('click',function() {
  console.log('Document');
  },false);
document.querySelector('.div2').addEventListener
('click',function(e) {
  e.stopPropagation(); // zastavení event propagationu (vztahuje se na capturing i bubbling)
  console.log('DIV 2');
  },false);
document.querySelector('.div1').addEventListener
('click',function(e) {
  console.log('DIV 1');
  console.log(e.target); //i zde můžeme vidět (při kliknutí na button), že event byl zavolán na elementu: button
  },{once:true}); // EventListener poté již event neregistruje
document.querySelector('button').addEventListener
('click',function(e) {
  // parametr 'e' = PointerEvent (event object) -> obsahuje všechny vlastnosti eventu, který nastal
  // vlastnost (objekt) 'target' ukazuje na jakém elementu byl event vyvolán
  console.log(e);
  console.log(e.target);
  e.target.innerText = 'clicked!'; // změna vnitřního textu buttonu
  
  },false);