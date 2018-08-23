// country, gdp

export function myIndivChart(){
  var margin = {top: 20, right: 10, bottom: 100, left: 40},
  width = 700 - margin.right - margin.left,
  height = 300 - margin.top - margin.bottom;

  var svg = d3.select("#barChart").append("svg")
  .attr("width", width + margin.right + margin.left)
  .attr("height", height+ margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.right + ")");

  var xScale = d3.scaleOrdinal([0,width], 0.2, 0.2);
  // .rangeRoundBands([0,width], 0.2, 0.2);

  var yScale = d3.scaleLinear()
  .range([height, 0]);


  //define axis

  var xAxis = d3.axisBottom(xScale);

  var yAxis = d3.axisLeft(yScale);

  d3.csv("lib/scoringComp.csv")
  .then(function(data, error){
    if (error) throw error;

    data.forEach(function(d){
      d.ppg = +d.ppg;
      d.year = d.year;
      console.log(d.ppg);
    });

    xScale.domain(data.map(function(d){return d.year;}));
    yScale.domain([0, d3.max(data, function(d){return d.ppg;}) ] );

    svg.selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', function(d) {return xScale(d.year); })
      .attr('y', function(d) {return yScale(d.ppg); })
      .attr('width', xScale.bandwidth())
      .attr('height',function(d) {return height - yScale(d.ppg); })
  });

}
