window.onload = function () {
    currTeam = 1;
    chart1 = new CanvasJS.Chart("chartContainer1",
    {
        title:{
          text: "Connect 4"
        },
        axisY: {
          title: "Votes"
        },

        data: [
        {
          color: "#FF0000",

          dataPoints: [
          { x: 10, y: 0, label: "Col 1"},
          { x: 20, y: 0,  label: "Col 2" },
          { x: 30, y: 0,  label: "Col 3"},
          { x: 40, y: 0,  label: "Col 4"},
          { x: 50, y: 0,  label: "Col 5"},
          { x: 60, y: 0, label: "Col 6"},
          { x: 70, y: 0,  label: "Col 7"}
          ]
        }
        ]
    });

    chart2 = new CanvasJS.Chart("chartContainer2",
    {
        title:{
          text: "Connect 4"
        },
        axisY: {
          title: "Votes"
        },

        data: [
        {
          color: "#0000FF",

          dataPoints: [
          { x: 10, y: 0, label: "Col 1"},
          { x: 20, y: 0,  label: "Col 2" },
          { x: 30, y: 0,  label: "Col 3"},
          { x: 40, y: 0,  label: "Col 4"},
          { x: 50, y: 0,  label: "Col 5"},
          { x: 60, y: 0, label: "Col 6"},
          { x: 70, y: 0,  label: "Col 7"}
          ]
        }
        ]
    });

    // Main program
    refreshCharts();
    setTeam();
    var fiveMinutes = 60 * 5,
    display = document.querySelector('#time');
    startTimer(10, display);
}

function refreshCharts() {
    chart1.render();
    chart2.render();
    console.log("Charts updated");
}

function resetChart(chartNum) {
    if (chartNum == 1) {
        chart1.options.data[0].dataPoints = [
        { x: 10, y: 0, label: "Col 1"},
        { x: 20, y: 0, label: "Col 2" },
        { x: 30, y: 0, label: "Col 3"},
        { x: 40, y: 0, label: "Col 4"},
        { x: 50, y: 0, label: "Col 5"},
        { x: 60, y: 0, label: "Col 6"},
        { x: 70, y: 0, label: "Col 7"}
        ];
        refreshCharts();
    }

    else if (chartNum == 2) {
        chart2.options.data[0].dataPoints = [
        { x: 10, y: 0, label: "Col 1"},
        { x: 20, y: 0, label: "Col 2" },
        { x: 30, y: 0, label: "Col 3"},
        { x: 40, y: 0, label: "Col 4"},
        { x: 50, y: 0, label: "Col 5"},
        { x: 60, y: 0, label: "Col 6"},
        { x: 70, y: 0, label: "Col 7"}
        ];
        refreshCharts();
    }
}

function updateChart(position, addValue, chartNum) {
    if (chartNum == 1) {
        chart1.options.data[0].dataPoints[position].y = addValue;
        console.log("Value " + addValue + " added to position " + (position + 1));
    }

    else if (chartNum == 2) {
        chart2.options.data[0].dataPoints[position].y = addValue;
        console.log("Value " + addValue + " added to position " + (position + 1));
    }
}

function addVote(pos, chartNum) {
    if (chartNum == 1) {
        chart1.options.data[0].dataPoints[pos].y += 1;
        console.log("Added vote to column " + (pos + 1));
        chart1.render();
    }

    else if (chartNum == 2) {
        chart2.options.data[0].dataPoints[pos].y += 1;
        console.log("Added vote to column " + (pos + 1));
        chart2.render();
    }
}

function fetchHighestVote(chartNum) {
    var highVal = 0;
    var colNum;
    if (chartNum == 1) {
        for (i = 0; i < 7; i++) {
            if (chart1.options.data[0].dataPoints[i].y > highVal) {
                highVal = chart1.options.data[0].dataPoints[i].y;
                colNum = i;
            }
        }
    }
    else if (chartNum == 2) {
        for (i = 0; i < 7; i++) {
            if (chart2.options.data[0].dataPoints[i].y > highVal) {
                highVal = chart2.options.data[0].dataPoints[i].y;
                colNum = i;
            }
        }
    }
    console.log("Highest vote was col " + (colNum + 1));
    return colNum;
}

function setTeam() {
    currTeam = 1;
    teamHead.innerText = "Red Team's Move";
    teamHead.style.color = "red";
}

function switchTeam() {
    if (currTeam == 1) {
        currTeam = 2;
        teamHead.innerText = "Blue Team's Move";
        teamHead.style.color = "blue";
    }

    else if (currTeam == 2) {
        currTeam = 1;
        teamHead.innerText = "Red Team's Move";
        teamHead.style.color = "red";
    }
}

// Where the business end is
function makeMove() {
    if (currTeam == 1) {
        redMove = fetchHighestVote(1);
        redMove++;
        console.log("Sent off Red move - " + redMove);
        //newMove(redMove, "red");
        // Pass red move to board HTML
        resetChart(1);
        switchTeam();
    }

    else if (currTeam == 2) {
        blueMove = fetchHighestVote(2);
        blueMove++;
        console.log("Sent off Blue move - " + blueMove);
        //makeMove(blueMove, "blue");
        // Pass red move to board HTML
        resetChart(2);
        switchTeam();
    }
}

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
            makeMove();
        }
    }, 1000);
}
