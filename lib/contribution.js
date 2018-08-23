var chartData = [
    {"player": "Curry", "total": "26.4","percent": 0.283},
    {"player": "Durant","total": "26.4", "percent": 0.283},
    {"player": "Thompson", "total": "20.0", "percent": 0.214},
    {"player": "Green", "total": "11.0", "percent": 0.11},
    {"player": "Cook", "total": "9.5", "percent": 0.102}
];


//margin and radius
// tutorial by Karhik Thota on Youtube, August 23rd
var margin = {top: 20, right: 20, bottom: 20, left: 20},
  width = 250 - margin.right - margin.left,
  height = 250-margin.top-margin.bottom
  radius = width/2;


// arc generator

var arc = d3.arc()
  .outerRadius(radius - 10)
  .innerRadius(0);

var labelArc = d3.arc()
  .outerRadius(radius-50)
  .innerRadius(radius-50);

var pie = d3.pie()
  .sort(null)
  .value(function(d){return d.count});

var svg = d3.select("body").append("svg")
  .attr("width", width)
  .attr("height", height)
  .append("g")
  .attr("transform", "translate(" + width/2 + "," + height/2 + ")");

//csv

d3.csv("contribution.csv", function(error,data){
  if (error) throw error;

  data.forEach(function(d){
    d.total = +d.total; //"23"=> 23
    d.player = d.player; // "Apple" => "Apple"
  });

  //append g elements
  var g = svg.selectAll(".arc")
    .data(pie(data))
    .enter().append("g")
    .attr("class", "arc");

  //append the arc

  g.append("path")
    .attr("d", arc)
    .style("fill", "blue")

  //append text

  g.append("text")
    .attr("transform", function(d) {return "translate(" + labelArc.centroid(d) + ")";})
    .attr("dy", ".35em")
    .text(function(d) {return d.data.player;});
})
