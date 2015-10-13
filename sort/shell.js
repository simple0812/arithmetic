/*
“希尔排序”是“插入排序”的改进版
“缩小增量排序法""
*/
function sort(list) {
    var step = Math.floor(list.length)

    while (step >= 1) {
        for (var i = step; i < list.length; i++) {
            var num = list[i];

            var j;
            for (j = i - step; j >= 0; j = j - step ) {
                if (arr[j] > num) {
                    arr[j + step] = arr[j]
                } else {
                    break;
                }
            }

            arr[j + step] = num;
        }

        step = Math.floor(step / 2)
    }

}

var arr = require('./arr').create(100000)
console.time('xxx');
sort(arr);
console.timeEnd('xxx');
// console.log(arr);