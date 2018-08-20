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

*/

let players;
let games = 0;
let ppg = 0;
let rpg = 0;
let apg = 0;

d3.json("lib/gsw2017-18.json").then(function(data){
  players = data.resultSets[0].rowSet;
  // console.log(data.resultSets[0].rowSet[15]);
});

var colors = ['#104E8B', '#1874CD', '#1C86EE', '#60AFFE', '#007FFF'];
