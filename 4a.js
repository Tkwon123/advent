let data = require('./4data.js')

data = data.replace(/(\r\n|\n|\r)/gm, ",");
data = data.split(',');

let counter = data.map((item) => {
  let split = item.split(' ')
  let set = new Set(split);
  if (split.length === set.size) {
    return split
  }
});

let results = counter.filter(item => item);

console.log(results.length);