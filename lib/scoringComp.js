var svg = d3.select("#seasonComp").append("svg").attr("width", 400).attr("height", 400);

d3.json("lib/stephCareerPPG.json").then(function(data){
  console.log("Our data,", data);

  data.forEach(d => {
    d.height = +d.height;
  });

  var y = d3.scaleLinear()
    .domain([0,828])
    .range([0,400]);

  var rects = svg.selectAll("rect")
    .data(data)
    .enter()
    .appent("rect")
    .attr("y", 20)
    .attr("x", function(d,i){
      return (i * 60);
    })
    .attr("width", 40)
    .attr("height", function(d){
      return y(d.height);
    })
    .attr("fill", function(d){
      return "grey";
    });

})
