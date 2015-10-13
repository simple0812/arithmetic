function sort(s, l, r) {
    if (l < r) {
        var i = l,
            j = r,
            x = s[l];

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
}


function find(arr, key, left, right) {
  if(left >= right -1) return -1;
  var mid = Math.floor((left + right) / 2);

  if (arr[mid] < key) {
    return find(arr, key, mid, right)
  } else if(arr[mid] > key) {
    return find(arr, key, left, mid);
  } else {
    return mid;
  }
}

  
var arr = require('./arr').create(1000000);
sort(arr, 0, arr.length -1)
console.time('xxx');
console.log(find(arr, 300000, 0, arr.length -1));
console.timeEnd('xxx');