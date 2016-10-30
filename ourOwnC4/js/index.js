var NUM_OF_ROWS = 6;
var NUM_OF_COLS = 7


/*state = [
    [null, null, null, null, 'red', null, null],
    [null, null, null, null, 'red', 'blue', null],
    [null, null, null, null, 'red', 'red', null],
    [null, null, null, 'red', 'red', 'blue', null],
    [null, 'blue', null, 'blue', 'red', 'red', null],
    ['red', 'red', null, 'red', 'red', 'blue', null]
]*/

state = [
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null]
]

elements = [].map.call(gameTable.getElementsByTagName('tr'), function(el){
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

function newMove(column, color) {
    var columnHeight = getColumnHeight(column);

    if (columnHeight > 0) {
        columnHeight = NUM_OF_ROWS - columnHeight;
        console.log(columnHeight);
        state[columnHeight][column - 1] = color;
    }
    render();
    // checkWinningMove();
}

function getColumnHeight(column) {
    var i = 0;
    var j = 0;
    column -= 1;
    for (i = NUM_OF_ROWS - 1; i >= 0; i--) {
        var currentRow = state[i];
        console.log(currentRow);
        if (currentRow[column] == null) {
            return NUM_OF_ROWS - i;
        }
    }
    return 0;
}
