var data = [
    {"year": "2017-18", "ppg": 26.4},
    {"year": "2016-17", "ppg": 25.3},
    {"year": "2015-16", "ppg": 30.1},
    {"year": "2014-15", "ppg": 23.8},
    {"year": "2013-14", "ppg": 24.0}
];

var height = 280;
var width = 600;
var barWidth = 35;
var barOffset = 5;
var animateDuration = 700;
var animationDelay = 30;

var tooltip = d3.select('body').append('div')
  .style('position', 'absolute')
  .style('background', '#f4f4f4')
  .style('padding', '5 15px')
  .style('border', '1px #333 solid')
  .style('border-radius','5px')
  .style('opacity','0');


var colors = d3.scaleLinear()
  .domain([0,data.length])
  .range(["#60AFFE", "#104E8B"])

var myChart = d3.select("#seasonComp").append("svg")
  .attr("width", width)
  .attr("height", height)
  .selectAll("rect")
    .data(data)
    .enter().append("rect")
      .attr("width", barWidth)
      .attr("height", function(d){
        return d.ppg*7;
      })
      .style("fill", function(d, i){
        return colors(i);
      })
      // .style("fill", "#104E8B")
      .attr('x', function(d,i){
        return i * (barWidth + barOffset);
      })
      // .attr('y', function(d){
      //   return height - d.ppg*7;
      // })
      .attr('y', height)
      .on('mouseover', function(d){
        tooltip.transition()
          .style('opacity', 1)

        tooltip.html(d.ppg)
          .style('left', (d3.event.pageX)+'px')
          .style('top', (d3.event.pageY)+'px')
        d3.select(this).style('opacity', 0.5)
      })
      .on('mouseout', function(d){
        tooltip.transition()
          .style('opacity', 0)
          d3.select(this).style('opacity', 1)
      })

      myChart.transition()
        .attr('height', function(d){
          return d.ppg*7;
        })
        .attr('y', function(d){
          return height - d.ppg*7;
        })
        .duration(animateDuration)
        .delay(function(d,i){
          return i*animationDelay;
        })
      // Add the x Axis
      myChart.append("g")
          .attr("transform", "translate(0," + height + ")")
          .call(d3.axisBottom(x));

      // text label for the x axis
      myChart.append("text")
          .attr("transform",
                "translate(" + (width/2) + " ," +
                               (height + margin.top + 20) + ")")
          .style("text-anchor", "middle")
          .text("Year");

      // Add the y Axis
      myChart.append("g")
          .call(d3.axisLeft(y));

      // text label for the y axis
      myChart.append("text")
          .attr("transform", "rotate(-90)")
          .attr("y", 0 - margin.left)
          .attr("x",0 - (height / 2))
          .attr("dy", "1em")
          .style("text-anchor", "middle")
          .text("Points Per Game");
