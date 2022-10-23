const PREPARATION_MINUTES_PER_LAYER = 2;
const EXPECTED_MINUTES_IN_OVEN = 40;

function remainingMinutesInOven(actualMinutesInOven) {
    return EXPECTED_MINUTES_IN_OVEN-actualMinutesInOven;
  }

function preparationTimeInMinutes(numberOfLayers) {
    return PREPARATION_MINUTES_PER_LAYER*numberOfLayers;
  }
function totalTimeInMinutes(numberOfLayers, actualMinutesInOven) {
    return preparationTimeInMinutes(numberOfLayers) + actualMinutesInOven;
  }
