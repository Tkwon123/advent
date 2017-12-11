let data = require('./4data.js')

data = data.replace(/(\r\n|\n|\r)/gm, ",");
data = data.split(',');

let counter = data.map((item) => {
  let split = item.split(' ')
  let sorted = sortLetters(split);

  let set = new Set(sorted);
  if (split.length === set.size) {
    return split
  }
});

function sortLetters(array) {
  return array.map(item => {
    let letterArray = item.split('')
    return letterArray.sort('').join('');
  })
}


let results = counter.filter(item => item);
console.log(results.length);