// console.log( Math.floor((12321 % 100000) / 10000));
// console.log( Math.floor((12321 % 10000) / 1000));
// console.log( Math.floor((12321 % 1000) / 100));
// console.log( Math.floor((12321 % 100) / 10));
// console.log( Math.floor((12321 % 10) / 1));

function foo(num) {
    if(num >= 100000 || num <= 10000) {
        return false;
    }

    var p = [];
    var t = 10;
    for(var i = 0; i < 5; i++) {
        p.push(Math.floor((num % t) / (t / 10)))
        t *= 10;
    }

    if(p[0] !== p[4] || p[1] !== p[3]) {
        return false
    }

    return true;
}

console.log(foo(123210))
console.log(foo(1232))
console.log(foo(12321))
console.log(foo(12320))