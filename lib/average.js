let players;

d3.json("lib/gsw2017-18.json").then(function(data){
  players = data.resultSets[0].rowSet;
});

console.log(players[15][1]+ " is averaging " + players[15][29] + " points per game, " + players[15][21] + " rebounds per game, and " + players[15][22] + " assists per game.");
