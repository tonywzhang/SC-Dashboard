var gameData = [
    {"game": 1, "opp": "HOU", "points": 22},
    {"game": 2, "opp": "NOP", "points": 28},
    {"game": 3, "opp": "MEM", "points": 37},
    {"game": 4, "opp": "DAL", "points": 29},
    {"game": 5, "opp": "TOR", "points": 30},
    {"game": 6, "opp": "WAS", "points": 20},
    {"game": 7, "opp": "DET", "points": 27},
    {"game": 8, "opp": "LAC", "points": 31},
    {"game": 9, "opp": "SAS", "points": 21},
    {"game": 10, "opp": "DEN", "points": 22},
    {"game": 11, "opp": "MIA", "points": 16},
    {"game": 12, "opp": "MIN", "points": 22},
    {"game": 13, "opp": "PHI", "points": 22},
    {"game": 14, "opp": "BOS", "points": 9},
    {"game": 15, "opp": "PHI", "points": 35},
    {"game": 16, "opp": "BKN", "points": 39},
    {"game": 17, "opp": "OKC", "points": 24},
    {"game": 18, "opp": "CHI", "points": 33},
    {"game": 19, "opp": "NOP", "points": 27},
    {"game": 20, "opp": "LAL", "points": 28},
    {"game": 21, "opp": "ORL", "points": 23},
    {"game": 22, "opp": "MIA", "points": 30},
    {"game": 23, "opp": "NOP", "points": 31},
    {"game": 24, "opp": "MEM", "points": 38},
    {"game": 25, "opp": "DAL", "points": 32},
    {"game": 26, "opp": "HOU", "points": 29},
    {"game": 27, "opp": "LAC", "points": 45},
    {"game": 28, "opp": "DEN", "points": 32},
    {"game": 29, "opp": "TOR", "points": 24},
    {"game": 30, "opp": "CLE", "points": 23},
    {"game": 31, "opp": "CHI", "points": 30},
    {"game": 32, "opp": "HOU", "points": 19},
    {"game": 33, "opp": "NYK", "points": 32},
    {"game": 34, "opp": "MIN", "points": 25},
    {"game": 35, "opp": "BOS", "points": 49},
    {"game": 36, "opp": "UTA", "points": 14},
    {"game": 37, "opp": "SAC", "points": 23},
    {"game": 38, "opp": "DEN", "points": 24},
    {"game": 39, "opp": "OKC", "points": 21},
    {"game": 40, "opp": "DAL", "points": 20},
    {"game": 41, "opp": "SAS", "points": 17},
    {"game": 42, "opp": "PHO", "points": 22},
    {"game": 43, "opp": "POR", "points": 17},
    {"game": 44, "opp": "LAC", "points": 44},
    {"game": 45, "opp": "OKC", "points": 21},
    {"game": 46, "opp": "NYK", "points": 21},
    {"game": 47, "opp": "WAS", "points": 25},
    {"game": 48, "opp": "ATL", "points": 28},
    {"game": 49, "opp": "BKN", "points": 34},
    {"game": 50, "opp": "SAS", "points": 2},
    {"game": 51, "opp": "ATL", "points": 29}
];

var newSvg = d3.select("#barChart").append("svg")
  .attr("width", 600)
  .attr("height", 250);

var tooltip = d3.select('body').append('div')
  .style('position', 'absolute')
  .style('background', '#f4f4f4')
  .style('padding', '5 15px')
  .style('border', '1px #333 solid')
  .style('border-radius','5px')
  .style('opacity','0');

var svg = d3.select("svg"),
    margin = {top: 20, right: 20, bottom: 30, left: 50},
    width = +svg.attr("width") - margin.left - margin.right,
    height = +svg.attr("height") - margin.top - margin.bottom,
    g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var x = d3.scaleLinear()
    .rangeRound([0, width]);

var y = d3.scaleLinear()
    .rangeRound([height, 0]);

var line = d3.line()
    .x(function(d) { return x(d.game); })
    .y(function(d) { return y(d.points); });

d3.json("lib/gameData.json").then(function(data) {

  x.domain(d3.extent(data, function(d) { return d.game; }));
  y.domain(d3.extent(data, function(d) { return d.points; }));

  g.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x))
    .select(".domain")
      .remove();

  g.append("g")
      .call(d3.axisLeft(y))
    .append("text")
      .attr("fill", "#000")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", "0.71em")
      .attr("text-anchor", "end")
      .text("Points Scored");

  g.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round")
      .attr("stroke-width", 1.5)
      .attr("d", line);
});
