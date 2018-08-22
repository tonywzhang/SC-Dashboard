/* var svg = d3.select("#chart-area").append("svg")
  .attr("width", 500)
  .attr("height", 400);

var rect = svg.append("rect").attr("x", 100).attr("y", 100).attr("width", 70).attr("height", 100).attr("fill", "blue");

var ellipse = svg.append("ellipse").attr("cx", 100).attr("cy", 100).attr("rx", 70).attr("ry", 100).attr("fill", "red");

var cir = svg.append("circle").attr("cx", 100).attr("cy", 100).attr("r", 70).attr("r", 100).attr("fill", "blue");

var line = svg.append("line")
  .attr("x1", 5)
  .attr("y1", 5)
  .attr("x2", 50)
  .attr("y2", 50)
  .attr("stroke-width", 2)
  .attr("stroke", "black");


mycolor = d3.lab(52, -4, -32);  // Lab color space (l, a, b); steelblue

d3.select("#SC30header").style("color", mycolor);

<div style="width: 264px;">26.4</div>
<div style="width: 253px;">25.3</div>
<div style="width: 301px;">30.1</div>
<div style="width: 238px;">23.8</div>
<div style="width: 240px;">24.0</div>

*/

// var svg = d3.select("#netWorth").append("svg")
//   .attr("width", 500)
//   .attr("height", 400);
//
// var cir = svg.append("circle").attr("cx", 100).attr("cy", 100).attr("r", 70).attr("r", 100).attr("fill", "blue");


//javascript

//players[14][1]+ " is averaging " + players[14][29] + " points per game, " + players[14][21] + " rebounds per game, and " + players[14][22] + " assists per game."

/* Players:

Players is the array of player data from the NBA Stat Page for the Golden State Warriors

If let data = entire data set hash (gsw2017-18.json), to index players,

data.resultSets[0].rowSet[15] accesses Steph player data for 2017-18 NBA season

players = data.resultSets[0].rowSet;

notable headers:

1: PLAYER_NAME
3: TEAM_ABBREVIATION
21: Rebounds
22: Assists
24: Steals
25: Blocks
29: Points
30: Plus-Minus

Player Arrangement

0: Andre Iguodala
1: Chris Boucher
2: Damian Jones
3: David West
4: Draymond Green
5: JaVale McGee
6: Jordan Bell
7: Kevin Durant
8: Kevon Looney
9: Klay Thompson
10: Nick Young
11: Omri Casspi
12: Patrick McCaw
13: Quinn Cook
14: Shaun Livingston
15: Stephen Curry
16: Zaza Pachulia


Pie Chart with Players
1. Stephen Curry
2. Kevin Durant
3. Klay Thompson
4. Draymond Green
5. Quinn Cook

<link rel="shortcut icon" href="./favicon.ico" />

let players;
let headers;
let games = 0;
let ppg = 0;
let rpg = 0;
let apg = 0;

d3.json("lib/gsw2017-18.json").then(function(data){
  players = data.resultSets[0].rowSet;
  headers = data.resultSets[0].headers;
  console.log(data.resultSets[0].rowSet[15]);
});

*/
