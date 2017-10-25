/*
冒泡法
第一次遍历 用第一个数First与后面的数Behind比较 如果 First > Behind 则将2个数互换位置 直到数据结尾
第二次遍历 用第二个数....
*/

function sort(list) {
	var len = list.length;
	for(var i =0; i < len ; i++) {
		for(var j = i + 1; j < len ; j++) {
			if(list[j] < list[i]) {
				var p = list[j];
				list[j] = list[i];
				list[i] = p;
				// [list[i], list[j]] = [list[j], list[i]];
			}
		}
	}
}

var arr = require('./arr').create(100000)

console.time('xxx');
sort(arr);
console.timeEnd('xxx');
