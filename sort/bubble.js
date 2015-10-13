function sort(list) {
	var len = list.length;
	for(var i =0; i < len ; i++) {
		for(var j = i + 1; j < len ; j++) {
			if(list[j] < list[i]) {
				var p = list[j];
				list[j] = list[i];
				list[i] = p;
			}
		}
	}
}

var arr = require('./arr').create(100000)

console.time('xxx');
sort(arr);
console.timeEnd('xxx');
