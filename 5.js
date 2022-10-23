// array.push() - přidá jeden nebo více elementů na konec arraye a vrátí novou délku arraye
// array.pop() - odstraní z arraye poslední element, který zároveň vrátí
// array.shift() - odstraní z arraye první element, který zároveň vrátí
// array.unshift() - přidá jeden nebo více elementů na začátek arraye a vrátí novou délku arraye
// array.splice() - upravuje obsah existujícího arraye, kdy odstraňuje nebo nahrazuje existující elementy a přidává elementy nové
    /*
    splice(start)
    splice(start, deleteCount)
    "deleteCount" - kolik elementů bude odstraněno (počínaje index pozicí "start")
    splice(start, deleteCount, item1)
    splice(start, deleteCount, item1, item2, itemN)
    item1-itemN jsou elementy, které budou přidány do arraye, na index pozici "start"

    const numbers = [1, 'two', 3, 'four'];
    numbers.splice(2, 1, 'one');
    numbers; => [1, 'two', 'one', 'four']

    const names = new Array(); - tvorba prázdného arraye


    const names = ['Jack', 'Laura', 'Paul', 'Megan'];
    delete names[1];
    
    Delete nechá na pozici smazané položky "empty" element, tento element je však přeskočen při použití traverzálních nebo mutačních operací
    Lepší než Delete je Splice

    Array.length je mutable 
    Pokud je zvětšen -> jsou do arraye přidány "empty" elementy
    Pokud je zmenšen -> jsou odstraňovány položky z arraye od poslední

    Jelikož je Array object, tak funkce "typeof" vrací "object"
    typeof names;
    Pokud chceme vědět zda je něco Array -> použijeme metodu "isArray"
    Array.isArray(names);
    */

    function getItem(cards, position) {
        return cards[position];
      }
    function setItem(cards, position, replacementCard) {
        cards[position]=replacementCard;
        return cards;
    }
    function insertItemAtTop(cards, newCard) {
        cards.push(newCard);
        return cards;
    }
    function removeItem(cards, position) {
        cards.splice(position, 1);
        return cards;
    }
    function removeItemFromTop(cards) {
        cards.pop();
        return cards;
    }
    function insertItemAtBottom(cards, newCard) {
        cards.unshift(newCard);
        return cards;
    }
    function removeItemAtBottom(cards) {
        cards.shift();
        return cards;
    }
    function checkSizeOfStack(cards, stackSize) {
        return cards.length===stackSize;
    }