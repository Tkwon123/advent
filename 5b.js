const data = require('./5-data.js')

let parsed = data.replace(/(\r\n|\n|\r)/gm, ",");
let numArray = parsed.split(',').map(num => {
  return parseInt(num);
})

let numArrayLength = numArray.length

let currentPosition = 0;
let previousPosition = 0;
let counter = 0;

while (currentPosition < numArrayLength) {
  let currentValue = numArray[currentPosition]

  incrementPosition(currentValue);
  incrementCounter();
  incrementOffset(currentValue);
}

function incrementPosition(currentValue) {
  previousPosition = currentPosition
  currentPosition = currentValue + currentPosition;
}

function incrementOffset(currentValue) {
  if (currentValue >= 3) {
    numArray[previousPosition] = numArray[previousPosition] - 1;
  } else {
    numArray[previousPosition] = numArray[previousPosition] + 1;
  }
}

function incrementCounter() {
  counter = counter + 1;
}

console.log(`The length is: ${numArrayLength}`)
console.log(`Your answer: ${counter}`);