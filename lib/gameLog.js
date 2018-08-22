var gameData = [
    {"opp": "HOU", "points": 22},
    {"opp": "NOP", "points": 28},
    {"opp": "MEM", "points": 37},
    {"opp": "DAL", "points": 29},
    {"opp": "TOR", "points": 30},
    {"opp": "WAS", "points": 20},
    {"opp": "DET", "points": 27},
    {"opp": "LAC", "points": 31},
    {"opp": "SAS", "points": 21},
    {"opp": "DEN", "points": 22},
    {"opp": "MIA", "points": 16},
    {"opp": "MIN", "points": 22},
    {"opp": "PHI", "points": 22},
    {"opp": "BOS", "points": 9},
    {"opp": "PHI", "points": 35},
    {"opp": "BKN", "points": 39},
    {"opp": "OKC", "points": 24},
    {"opp": "CHI", "points": 33},
    {"opp": "NOP", "points": 27},
    {"opp": "LAL", "points": 28},
    {"opp": "ORL", "points": 23},
    {"opp": "MIA", "points": 30},
    {"opp": "NOP", "points": 31},
    {"opp": "MEM", "points": 38},
    {"opp": "DAL", "points": 32},
    {"opp": "HOU", "points": 29},
    {"opp": "LAC", "points": 45},
    {"opp": "DEN", "points": 32},
    {"opp": "TOR", "points": 24},
    {"opp": "CLE", "points": 23},
    {"opp": "CHI", "points": 30},
    {"opp": "HOU", "points": 19},
    {"opp": "NYK", "points": 32},
    {"opp": "MIN", "points": 25},
    {"opp": "BOS", "points": 49},
    {"opp": "UTA", "points": 14},
    {"opp": "SAC", "points": 23},
    {"opp": "DEN", "points": 24},
    {"opp": "OKC", "points": 21},
    {"opp": "DAL", "points": 20},
    {"opp": "SAS", "points": 17},
    {"opp": "PHO", "points": 22},
    {"opp": "POR", "points": 17},
    {"opp": "LAC", "points": 44},
    {"opp": "OKC", "points": 21},
    {"opp": "NYK", "points": 21},
    {"opp": "WAS", "points": 25},
    {"opp": "ATL", "points": 28},
    {"opp": "BKN", "points": 34},
    {"opp": "SAS", "points": 2},
    {"opp": "ATL", "points": 29}
];

var newSvg = d3.select("#trendLine").append("svg")
  .attr("width", 600)
  .attr("height", 250);

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










//
// var height = 280;
// var width = 600;
// var barWidth = 35;
// var barOffset = 5;
// var animateDuration = 700;
// var animationDelay = 30;
//
//
//
// var tooltip = d3.select('body').append('div')
//   .style('position', 'absolute')
//   .style('background', '#f4f4f4')
//   .style('padding', '5 15px')
//   .style('border', '1px #333 solid')
//   .style('border-radius','5px')
//   .style('opacity','0');
//
//
// var colors = d3.scaleLinear()
//   .domain([0, gameData.length])
//   .range(["#60AFFE", "#104E8B"])
//
// export const seasonChart = d3.select("#trendLine").append("svg")
//   .attr("width", width)
//   .attr("height", height)
//   .selectAll("rect")
//     .data(gameData)
//     .enter().append("rect")
//       .attr("width", barWidth)
//       .attr("height", function(d){
//         return d.points*7;
//       })
//       .style("fill", function(d, i){
//         return colors(i);
//       })
//       .attr('x', function(d,i){
//         return i * (barWidth + barOffset);
//       })
//       .attr('y', height)
//       .on('mouseover', function(d){
//         tooltip.transition()
//           .style('opacity', 1)
//
//         tooltip.html(`${d.opp}: ${d.points}`)
//           .style('left', (d3.event.pageX)+'px')
//           .style('top', (d3.event.pageY)+'px')
//         d3.select(this).style('opacity', 0.5)
//       })
//       .on('mouseout', function(d){
//         tooltip.transition()
//           .style('opacity', 0)
//           d3.select(this).style('opacity', 1)
//       })
//
//       seasonChart.transition()
//         .attr('height', function(d){
//           return d.points*7;
//         })
//         .attr('y', function(d){
//           return height - d.points*7;
//         })
//         .duration(animateDuration)
//         .delay(function(d,i){
//           return i*animationDelay;
//         });
