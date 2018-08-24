export function IndivChart(){

  var margin = {top: 20, right: 20, bottom: 20, left: 20},
  width = 350 - margin.right - margin.left,
  height = 350 - margin.top - margin.bottom,
  radius = width/2;

  var color = d3.scaleOrdinal()
  .range(["#BBDEFB", "#90CAF9", "#64B5F6", "#42A5F5", "#2196F3"]);


  var arc = d3.arc()
  .outerRadius(radius - 10)
  .innerRadius(0);

  var labelArc = d3.arc()
  .outerRadius(radius-50)
  .innerRadius(radius-50);

  var pie = d3.pie()
  .sort(null)
  .value(function(d){return d.total});

  var svg = d3.select("#barChart").append("svg")
  .attr("width", width)
  .attr("height", height)
  .append("g")
  .attr("transform", "translate(" + width/2 + "," + height/2 + ")");


  d3.csv("lib/stats.csv")
  .then(function(data, error){
    if (error) throw error;

    data.forEach(function(d){
      d.total = +d.total;
      d.stat = d.stat;
    });

    var g = svg.selectAll(".arc")
    .data(pie(data))
    .enter().append("g")
    .attr("class", "arc");

    g.append("path")
    .attr("d", arc)
    .style("fill", function(d){return color(d.data.stat);})
    .transition()
    .ease(d3.easeLinear)
    .duration(1000)
    .attrTween("d", pieTween);

    g.append("text")
    .transition()
    .ease(d3.easeLinear)
    .duration(1000)
    .attrTween("d", pieTween)
    .attr("transform", function(d) {return "translate(" + labelArc.centroid(d) + ")";})
    .attr("dy", ".35em")
    .text(function(d) {return `${d.data.stat} ${d.data.total}`;});
  });

  function pieTween(b){
    b.innerRadius = 0;
    var i = d3.interpolate({startAngle: 0, endAngle: 0}, b);
    return function(t) { return arc(i(t));};
  }
}
