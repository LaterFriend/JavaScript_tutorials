//BREAK statement
// Slouží k předčasnému ukončení loopu
// můžeme použí label break
for (let i = 1; i <=5;i++){
    if (i===3) 
        break;
    console.log(i);
}
//Pokud použijeme break ve vnitřním loopu -> ukončíme vnitřní loop, vnější pořád pokračuje
for (let i = 1; i <= 3;i++){
    for (let j = 1; j<=3;j++){
        if (j===2)
            break;
        console.log(`${i}${j}`)
    }
}
//Pomocí labeled breaku můžeme ukončit vnější cyklus z vnitřního cyklu
loop1: //label
for (let i = 1; i <= 3;i++){
    for (let j = 1; j<=3;j++){
        if ((i===2)&&(j===3))
            break loop1;
        console.log(`${i}${j}`)
    }
}
console.log("CONTINUE")
//CONTINUE statement
// Slouží pro přeskočení současné iterace v loopu
// můžeme použít label continue
for (let i = 1; i <=5;i++){
    if (i===3) 
        continue;
    console.log(i);
}
//Pokud použijeme continue ve vnitřním loopu -> přeskočí se současná iterace ve vnitřním loopu 
for (let i = 1; i <= 3;i++){
    for (let j = 1; j<=3;j++){
        if (j===2)
            continue;
        console.log(`${i}${j}`)
    }
}
//Pomocí labeled continue můžeme přeskočit iteraci vnějšího cyklu z vnitřního cyklu (vnitřní cyklus se tak okamžitě ukončí na dané iteraci)
loop1: //label
for (let i = 1; i <= 3;i++){
    for (let j = 1; j<=3;j++){
        if (j===2)
            continue loop1;
        console.log(`${i}${j}`)
    }
}
console.log("SWITCH")
//SWITCH statement
// Switch statement vyhodnotí podmínku a podle výsledku zvolí jakým case (blokem) bude kód pokračovat
let a = 2;
switch (a) {
    case "2": //Javascript kontroluje statementy ve switch striktně (===) - musí se rovnat hodnota i datový typ
        a = 2;
        break;
    case 1:
        a = "one";
        break; //break statement je volitelný, pokud ho však nepoužijeme - provedou se i následující bloky po vhodném bloku, dokud program nenarazí na break a switch ukončí
    case 2:
        a = "two";
        break;
    default: // pokud nenajdeme žádný vyhovující blok - provede se default blok - jeho existence je volitelná
        a = "not found";
        break;
}
console.log(`The value is ${a}`);

//Multiple Case Switch - více case je seskupeno tak, že sdílí stejný kód
let object = "apple";
switch(object){
    case "mango":
    case "banana":
    case "apple":
    case "pineapple":
        console.log(`${object} is a fruit`);
        break;
    default:
        console.log(`${object} is not a fruit`);
        break;
}