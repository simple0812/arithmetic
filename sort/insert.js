/*
在插入排序中，数组会被划分为两种，“有序数组块”和“无序数组块”
前面为有序数组，每次从无序数组中取出一个数插入到有序数组中
0~i-1 有序 i -1 ~length-1 无序
插入逻辑：
从尾部遍历有序数组，如果当前值大于要插入的数则将当前值往后移动一位，否则返回当前值的索引
然后在当前值后面插入
*/
function sort(list) {
    //无序序列
    for (var i = 1; i < list.length; i++) {
        var num = list[i];

        var j ;
        for (j = i - 1; j >= 0; j--) {
            if (arr[j] > num) {
                arr[j + 1] = arr[j]
            } else {
                break;
            }
        }

        arr[j + 1] = num;
    }
}

var arr = require('./arr').create(100000)
console.time('xxx');
sort(arr);
console.timeEnd('xxx');
