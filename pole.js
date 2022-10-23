const pole = [];
const pole_bad = new Array(); // Nepoužívat!
let pole2 = [];

pole[0] = "Hello";

console.log(pole);

let mypole = [];
mypole["Hello"] = "World";
// Takto vytváříme asociativní pole - NEPOUŽÍVAT!
// Pro ukládání pojmenovaných dat používat objekt

pole.push("world"); //přidání položky na konec pole
console.log(pole);

//pop
    // odstraňuje poslední prvek v poli a zároveň tento prvek vrací
    console.log(pole.pop());
    console.log(pole);
//push
    // přidání prvku na konec pole a zároveň vrací novou délku pole
    console.log(pole.push("World"));
    console.log(pole);
//reverse
    // převrácení pořadí prvků
    console.log(pole.reverse()); // vrací převrácené pole
    console.log(pole); // zároveň ale nevytváří nové pole, ale mění existující
// shift
    // odstraňuje první prvek z pole a zároveň tento prvek vrací
    console.log(pole.shift());
    console.log(pole)

pole.push("world");
pole.push(12);
// sort
    // slouží k uspořádání pole ve vzestupném pořadí - vše převádí na textové řetězce a poté porovnává
    // pokud se pokusíme ale např. seřadit [1,2,3,10] -> získáme [1,10,2,3], jelikož v abecedním pořadí je "10" před "2" (první znak je totiž "1")
    // funkci sort, můžeme předat vlastní srovnávací funkci -> můžeme srovnávat podle vlastních kritérií
    console.log(pole.sort()); // stejné jako u reverse()
    console.log(pole);
// splice
    // slouží současně k odebírání a přidávání prvků
    // pole.splice(index, kolik[, prvek1, ... prvekN])
    console.log(pole.splice(1,1,"nový text")); // vrací odstraněný prvek / prvky
    console.log(pole)
    // nahrazujeme 1 prvek na index pozici 1 za string "nový text"

    console.log(pole.splice(1, 2, 13,"ahoj", "jak se máš"));
    console.log(pole);
    // nahrazuje 2 prvky od indexové pozice 1 (prvky na index pozicích 1,2 ) za 3 nové prvky

    console.log(pole.splice(0,2)); // vracíme odstraněné prvky
    console.log(pole);
    // nevkládáme žádné nové prvky, pouze odstraňujeme první 2 prvky v poli
// unshift
    // přidává jeden nebo více prvků na začátek pole a zároveň vrací novou délku pole
    console.log(pole.unshift("první", "druhý"));
    console.log(pole);


// Přístupové metody
// concat
    // spojení více polí do jednoho
    // původní pole zůstanou netknutá, místo toho se vrací jedno pole nové se všemi hodnoty
    pole2 = ["něco", "jak", "se", "mas"];
    pole_all = pole.concat(pole2); //pole a pole2 zůstanou beze změny
    console.log(pole_all);
// join
    // metoda spojuje prvky pole do textového řetězce
    // předáváme volitelný argument, který určuje jaký znak vložíme mezi jednotlivé prvky (defaultně jsou to ",")
    // na datových typech prvků pole nezáleží, jelikož metoda join vše automaticky převádí na string pomocí metody .tostring
    console.log(pole2.join(" ")); 
    console.log(pole2); // pole zůstane samozřejmě beze změny
// slice
    // kopíruje vybranou část pole a vrací ji (neupravuje původní pole, ale vytváří jeho mělkou kopii)
    // funkci předáváme indexy pro začátek a konec (konec je volitelný)
    // např. pole.slice(2) vrací kopii pole od indexu 2 až do konce pole
    //  pole.slice(-2) vrací kopii posledních dvou prvků
    let pole_copy = pole2.slice(1,3); // pole_copy bude obsahovat kopii 2. a 3. prvku pole2 <1,3)
    console.log(pole_copy);
// toString
    // vrací textovou reprezentaci prvků pole
    // převede všechny prvky pole na string a zřetězí je
    // nezobrazuje objekty vnořené v poli
    // pole vnořené v poli zobrazuje jako by se nic nedělo
    let pole_x = [1,2,"tři", "čtyři", [1,2,"zase tři"], 6];
    console.log(pole_x.toString());
    console.log(pole_x); // původní pole zůstane samozřejmě beze změny
//indexOf
    // hledá první výskyt daného prvku v poli a vrací jeho indexové pořadí
    // hodnoty jsou porovnávány striktně (===) s hledanou hodnotou
    // druhý argument je volitelný -> indexová pozice, kde má metoda začít hledat (vhodné u velkých polí)
    console.log(pole_x.indexOf("zase tři")); // neumí hledat ve vnořených polích!!
    // pokud metoda prvek nenalezne -> vrací -1
    console.log(pole_x.indexOf("tři"));
    console.log(pole_x.indexOf(6,4)); // hledáme až od index pozice 4
//lastIndexOf
    // stejné jako metoda indexOf, ovšem prohledává pole od posledního prvku
    // hledáme poslední výskyt
    console.log(pole_x.lastIndexOf("tři")); // indexovou pozici však vrací normálně od začátku
    console.log(pole_x.lastIndexOf(6, 4)); // jelikož hledáme odzadu - od index pozice 4 (hodnota 6 je na index pozici 5) -> nic nenajdeme


// Iterační metody
// forEach
    // pro procházení všech prvků v poli
    // metodě předáváme anonymní funkci, kterou provede pro každý prvek
    const pole_for_each = [4, 7, 8, 4, 2, 8, 9, 1, 2, 5];
    let soucet = 0;
    pole_for_each.forEach(x => soucet+=x); //pro každou položku v poli opakujeme danou callback funkci
    // položka kterou zrovna metoda forEach zpracovává se ukládá do hodnoty x
    console.log(soucet);
// map
    // téměř totožná s metodou forEach
    // rozdíl je v tom, že metoda map vrací pole, jež obsahuje hodnoty, které vrátíme pomocí callback funkce
    const mocniny = pole_for_each.map(x => x**2);
    console.log(mocniny);
// every
    // pro každý prvek z pole spouští předanou callback funkci -> vrací hodnotu true, pokud jsou všechny hodnoty v poli platné (true) -> jinak false
    const pole_less_10 = [1,2,3,4,5];
    const pole_10 = [1,2,31,9,8];

    let jeplatne = pole_less_10.every(x=>x<10); // každá položka je < 10
    console.log(jeplatne);

    jeplatne = pole_10.every(x=>x<10); // každá položka není < 10
    console.log(jeplatne);
    // pro každou položku v poli se vyhodnocuje callback funkce, pokud funkce vždy vrátí platný výsledek -> metoda every se vyhodnotí jako true
    // pokud callback funkce vyhodnotí false -> cyklus procházení prvků se zastaví a metoda every vrátí false
// some
    // podobný princip jako metoda every, ale vrací hodnotu true, pokud je alespoň jeden výsledek callback funkce platný
    jeplatne = pole_less_10.some(x=>x>10); //žádná položka není > 10
    console.log(jeplatne);
    jeplatne = pole_10.some(x=>x>10); // alespoň jedna položka je > 10
    console.log(jeplatne);
// filter
    // vytvoření pole složeného pouze z prvků, které vyhovují podmínkám
    // podobné jako every/some, ale s rozdílem, že všechny prvky, které vyhoví kritériím se kopírují do nového pole
    const x_x = [1,2,3,6,7,8,2,9,10];
    const plat_prvky = x_x.filter(x=>x>5);
    console.log(plat_prvky);
// reduce
    // prochází dané pole v cyklu a předává naší callback funkci jako argumenty předchozí a aktuální hodnotu (konkrétně - hodnotu spočítanou v předchozím kroku a hodnotu aktuálního prvku)
    // reduce metoda předává navíc callback funkci také aktuální indexové pořadí a odkaz na samotné pole
    soucet = x_x.reduce((x,y)=> x+y);
    console.log(soucet);
    // metoda reduce prochází pole trochu jinak než metody předchozí
        // jelikož by v prvním kroku nemohla nic před jako argument "předchozí" -> předává rovnou první a druhý prvek jako argumenty "předchozí" a "aktuální" (index hodnoty 0 a 1)
        // v následujících krocích předává jako "předchozí" hodnotu -> hodnotu, kterou jsme vrátili z naší callback funkce a jako hodnotu "aktuální" -> hodnotu dalšího prvku v poli
// reduceRight
    // funguje stejně jako metoda reduce, ale prochází pole v opačném pořadí (začíná na konci pole a postupuje směrem k začátku)
    