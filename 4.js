function canExecuteFastAttack(knightIsAwake) {
    return !(knightIsAwake);
  }
function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
    return (knightIsAwake || archerIsAwake || prisonerIsAwake);
  }
function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
    return prisonerIsAwake && !(archerIsAwake);
  }
function canFreePrisoner(
    knightIsAwake,
    archerIsAwake,
    prisonerIsAwake,
    petDogIsPresent) 
  {
    return (petDogIsPresent && !(archerIsAwake)) || (!(petDogIsPresent) && (!(archerIsAwake) && !(knightIsAwake) && prisonerIsAwake));
  }
// ! = negace, && = AND, || = OR