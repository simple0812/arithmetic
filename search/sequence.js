function find(arr, key) {
  for(var i = 0, len = arr.length; i < len ; i++) {
    if(arr[i] === key) {
      return i;
    }
  }

  return -1;
}


var arr = require('./arr').create(1000000)

console.time('xxx');
console.log(find(arr, 14212545));
console.timeEnd('xxx');