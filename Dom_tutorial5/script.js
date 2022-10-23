// Event delegation

document.querySelector('#sports').addEventListener('click',function(e){
	console.log(e.target.getAttribute('id') + " is clicked");
	// getAttribute vrací hodnotu atributu targetu (zde hodnotu atributu id)

	const target = e.target;
	if (target.matches('li')) {
		target.style.backgroundColor = "lightgrey";
	}
});

/*
Event delegation
	- vzor pro efektivní zpracování událostí
	- Namísto přidání EventListeneru ke každému podobnému prvku můžeme přidat EventListener do parent elementu 
		a volat událost na konkrétní cíl pomocí vlastnosti event objectu .target

	- Platí pro všechny stávající a nové child elementy 
		- pokud dále v kódu přidáme element nový a uděláme z něj child element -> bude se na něj aplikovat event delegation parent elementu 
*/


//Přidání nové položky do listu sports
const sports = document.querySelector('#sports');
const newSports = document.createElement('li');

newSports.innerText = 'Rugby';
newSports.setAttribute('id','Rugby');

sports.appendChild(newSports);