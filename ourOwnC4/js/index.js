var state = [
    [null, 'blue', null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, 'red', null, null, null],
    [null, null, null, null, null, null, null],
    ['red', null, null, null, null, 'blue', null]
]

var elements = [].map.call(gameTable.getElementsByTagName('tr'), function(el){
    return Array.from(el.getElementsByTagName('td'))
})


function render(){

    state.forEach(function (row, i) {
        row.forEach( function (cell, j) {

            elements[i][j].className =
                cell||''

        })
    })
}