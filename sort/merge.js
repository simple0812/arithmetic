/*
每次将2个相邻的元素合并并排序
*/

function merge(arr) {
    var len = arr.length;
    var t = [];
    for (var i = 0; i < len; i = i + 2) {
        if (i + 1 >= len) {
            t.push([arr[i]]);
        } else if (arr[i] > arr[i + 1]) {
            t.push([arr[i + 1], arr[i]])
        } else {
            t.push([arr[i], arr[i + 1]])
        }
    }

    return t;
}

function mergeArr(left, right) {
    if (typeof right === 'undefined') {
        return left;
    }
    var　 result = [];

    while (left.length > 0 && right.length > 0) {
        if (left[0] < right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }

    return result.concat(left).concat(right);
}

function sort(arr) {
    if (arr.length === 1) {
        arr = arr[0];
        return;
    }

    var t = [];
    for (var i = 0; i < arr.length; i = i + 2) {
        t.push(mergeArr(arr[i], arr[i + 1]));
    }

    return sort(t);
}

var arr = require('./arr').create(100000)

console.time('xxx');
sort(merge(arr))
console.timeEnd('xxx');