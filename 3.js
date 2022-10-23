function frontDoorResponse(line) {
    return line[0];
}

function frontDoorPassword(word) {
    word = word.toLowerCase()
    return word.charAt(0).toUpperCase()+word.slice(1);
}

function backDoorResponse(line) {
    line = line.trim();
    return line.slice(-1); //vracím poslední písmeno
}

function backDoorPassword(word) {
    word = word.trim()
    return word.charAt(0).toUpperCase()+word.slice(1) + ', please';
    // Získám ze slova první písmeno -> kapitalizuji ho -> poté připojím zbytek stringu (vše kromě prvního písmena)
}