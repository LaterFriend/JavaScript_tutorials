// if (condition) { code that is executed if "condition" is true }
// if (condition) { code that is executed if "condition" is true } else { code that is executed otherwise }
// if (condition1) { code that is executed if "condition1" is true } else if (condition2) { code that is executed if "condition2" is true but "condition1" was false } else { code that is executed otherwise }

/*
const num = 4;
if (num) {
  // splní se - stejné jako u Pythonu


  Short hand notation
  if (condition) doSomething();
}
*/
function needsLicense(kind) {
    return (kind==="car" || kind==="truck") === true
  }
  /* Stejné jako:
    if (kind ==="car" || kind==="truck") {
        return true
    } else {
        return false
    };
  */
function chooseVehicle(option1, option2) {
    if (option1 < option2) {
        return option1 + " is clearly the better choice."
    } else {
        return option2 + " is clearly the better choice."
    };
}
function calculateResellPrice(originalPrice, age) {
    if (age < 3) {
      return originalPrice * 0.8
    } else if (age > 10) {
      return originalPrice * 0.5
    } else {
      return originalPrice * 0.7
    };
}