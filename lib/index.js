import * as d3 from "d3";
import { updateValues } from './netWorth.js';
import { myChart } from './scoringComp.js';

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

//
updateValues();
