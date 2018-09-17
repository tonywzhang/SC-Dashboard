var data = [
  {"year": "2017-18", "ppg": 26.4},
  {"year": "2016-17", "ppg": 25.3},
  {"year": "2015-16", "ppg": 30.1},
  {"year": "2014-15", "ppg": 23.8},
  {"year": "2013-14", "ppg": 24.0}
];

var height = 280;
var width = 700;
var barWidth = 35;
var barOffset = 5;
var animateDuration = 700;
var animationDelay = 30;



var colors = d3.scaleLinear()
.domain([0,data.length])
.range(["#60AFFE", "#104E8B"])

var svg = d3.select("svg"),
margin = {
  top: 20, //20
  right: 20, //20
  bottom: 30, //30
  left: 50
},
width = 700 - margin.left - margin.right,
height = 280 - margin.top - margin.bottom,
g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var x = d3.scaleBand()
.rangeRound([0, width])
.padding(0.1);

var y = d3.scaleLinear()
.rangeRound([height, 0]);

d3.csv("lib/scoringComp.csv").then(function (data) {
  x.domain(data.map(function (d) {
    return d.yr;
  }));
  y.domain([0, d3.max(data, function (d) {
    return Number(d.ppg);
  })]);
  g.append("g")
  .attr("transform", "translate(0," + height + ")")
  .call(d3.axisBottom(x))
  g.append("g")
  .call(d3.axisLeft(y))
  .append("text")
  .attr("fill", "#000")
  .attr("transform", "rotate(-90)")
  .attr("y", 6)
  .attr("dy", "0.71em")
  .attr("text-anchor", "end")
  .text("Points per game");
  g.selectAll(".bar")
  .data(data)
  .enter().append("rect")
  .attr("class", "bar")
  .attr("x", function (d) {
    return x(d.yr);
  })
  .attr("y", function (d) {
    return y(Number(d.ppg));
  })
  .attr("width", (x.bandwidth())/2)
  .attr("height", function (d) {
    return height - y(Number(d.ppg));
  })
  .on("mouseover", function(d){
    tooltip.style("display", null);
    console.log("mouseover");
  })
  .on("mouseout", function(d){
    tooltip.style("display", "none");
  })
  .on("mousemove", function(d){
    var xPos = d3.mouse(this)[0] - 15;
    var yPos = d3.mouse(this)[1] - 55;
    tooltip.attr("transform", "translate(" + xPos + "," + yPos + ")");
    tooltip.select("text").text(d.year + " : " + d.ppg);
  })

  var tooltip = svg.append("g")
  .attr("class", tooltip)
  .style("display", "none");

  tooltip.append("text")
  .attr("x", 15)
  .attr("dy", "1.2em")
  .style("font-size", "1.25em")
  .style("font-weight", "bold");

});



// export const myChart = d3.select("#seasonComp").append("svg")
//   .attr("width", width)
//   .attr("height", height)
//   .selectAll("rect")
//     .data(data)
//     .enter().append("rect")
//       .attr("width", barWidth)
//       .attr("height", function(d){
//         return d.ppg*7;
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
//         tooltip.html(`${d.year}: ${d.ppg}`)
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
//       myChart.transition()
//         .attr('height', function(d){
//           return d.ppg*7;
//         })
//         .attr('y', function(d){
//           return height - d.ppg*7;
//         })
//         .duration(animateDuration)
//         .delay(function(d,i){
//           return i*animationDelay;
//         });
