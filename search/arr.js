exports.create = function(len) {
    len = len || 10;
    var arr = [];
    for(var i = 0; i < len ; i++) {
        var p = Math.floor(Math.random()*10 * len);
        arr.push(p);
    }

    return arr;
}

