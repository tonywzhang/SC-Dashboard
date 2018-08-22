var width = 300;
var height = 300;
var radius = 200;

let players;
let headers;

d3.json("lib/gsw2017-18.json").then(function(data){
  players = data.resultSets[0].rowSet;
  headers = data.resultSets[0].headers;
  console.log(data.resultSets[0].rowSet[15]);
});
