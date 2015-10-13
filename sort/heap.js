/*
1.构建大根堆
2.将第一个数和最后一个数互换
3.将数组减一后(除去最后一个数) 继续构建大根堆
*/

function heapAdjust(list, parent, length) {
    var temp = list[parent];

    var child = 2 * parent + 1;

    while(child < length) {
        if(child + 1 < length && list[child] < list[child + 1]) {
            child ++;
        }

        if(temp >= list[child]) break;

        list[parent] =  list[child];

        parent = child;

        child = 2 * parent + 1;

    }

    list[parent] = temp;
}


function sort(list) {
    //构建大根堆:从最后一个父节点开始构建
    var lastParent =Math.floor((list.length -1) / 2 );
    for(var i = lastParent; i >= 0; i--){
        heapAdjust(list, i, list.length);
    }   

    for(var i = list.length -1 ; i > 0; i--) {
        var temp = list[0];
        list[0] = list[i];
        list[i] = temp;
        heapAdjust(list, 0, i);
    }
}


var arr = require('./arr').create(100000)
// var arr = [1, 23, 12, 45, 16, 65, 24]
console.time('xxx');
sort(arr);
console.timeEnd('xxx');
// console.log(arr);
