const data = require('./6-data.js');
const memoryBank = data.split('\t').map(Number);

let cycles = 0;
const historicalCycles = new Set();
const banks = memoryBank.length - 1 // use base 0
let evaluated = {
  current: {},
  next: {}
};

while (!checkIfSeen(memoryBank)) {
  setParameters();
  memoryBank[evaluated.current.position] = 0;
  while (evaluated.current.toDrain > 0) {
    evaluated.next.position > banks ? evaluated.next.position = 0 : evaluated.next.position
    incrementBank()
  }
  addToSet();
  incrementCycle();
}

console.log(`Completed cycles: ${cycles}`)

function setParameters() {
  evaluated.current.position = calculateHighestPosition(memoryBank);
  evaluated.current.toDrain = memoryBank[evaluated.current.position];
  evaluated.next.position = evaluated.current.position + 1;
}

function hashArray() {
  evaluated.current.hashed = array.join(',')
}

function incrementBank() {
  // console.log(`Adding to position ${evaluated.next.position}`)
  memoryBank[evaluated.next.position] = memoryBank[evaluated.next.position] + 1
  evaluated.current.toDrain = evaluated.current.toDrain - 1
  evaluated.next.position = evaluated.next.position + 1

}

function incrementCycle() {
  cycles = cycles + 1;
}

function calculateHighestPosition(array) {
  return memoryBank.indexOf(Math.max(...array));
}

function checkIfSeen(array) {
  evaluated.current.hashed = array.join(',')
  return historicalCycles.has(evaluated.current.hashed) ? true : false
}

function addToSet() {
  let hashed = evaluated.current.hashed;
  historicalCycles.add(hashed);
}