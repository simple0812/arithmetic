var p = [
    {id : 1, name : 'xx' },
    {id : 14, name : 'xx'},
    {id : 13, name : 'xx'},
    {id : 15, name : 'xx'},
    {id : 19, name : 'xx'},
    {id : 135, name : 'xx'},
    {id : 14, name : 'xx'},
    {id : 15, name : 'xx'},
    {id : 12, name : 'xx'},
    {id : 12, name : 'xx'},
    {id : 162, name : 'xx'}
]

p.sort(function(i, j) {
    return i.id - j.id
})

console.log(p, p.length);