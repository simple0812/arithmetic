//择排序每扫描一遍数组，只需要一次真正的交换，而冒泡可能需要很多次
/*
1.遍历整个数组找到最小的数，保存其index
2.将最小数与第一个元素交互
*/
function sort(arr) {
    var len = arr.length;
    for (var i = 0; i < len ; i++) {
        
        //假设 i最小 遍历的时候发现更小的时候则将index重新赋值
        var index = i;

        for(var j = i+1; j < len ; j ++) {
            if(arr[j] < arr[index]) {
                index = j;
            }
        }

        var p = arr[i];
        arr[i] = arr[index];
        arr[index] = p;
    }
}

var arr = require('./arr').create(100000)

console.time('xxx');
sort(arr);
console.timeEnd('xxx');
