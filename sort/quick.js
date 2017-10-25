//尾递归
//挖坑法
/*
1.数组的每一个元素都占用一个坑，将左一的元素作为基准数，并将他的坑设为空
2.从右边开始遍历找到小于基准数的数， 然后将这个数移到坑里，自己成为一个空的坑
3.从左边开始遍历找到大于基准数的数，然后将这个数移到坑里，自己成为一个空的坑
4.依次遍历直到左右碰撞(! i < j)
5.将基准数填到空坑
*/
function sort(s, l, r) {
    if(l >= r) return ;
    
    var i = l;
    var j = r;
    var x = s[l];

    while (i < j) {
        while (i < j && s[j] >= x) // 从右向左找第一个小于x的数  
            j--;

        if (i < j)
            s[i++] = s[j]; // => s[i] = s[j]; i ++;

        while (i < j && s[i] <= x) // 从左向右找第一个大于等于x的数  
            i++;

        if (i < j)
            s[j--] = s[i];
    }

    s[i] = x;

    sort(s, l, i - 1); // 递归调用   
    sort(s, i + 1, r);
}


// var arr = [30, 3, 21, 4, 5, 6, 1, 3];
var arr = require('./arr').create(100000)
arr.push(5);
console.time("xxx")
sort(arr, 0, arr.length - 1);
console.timeEnd("xxx");