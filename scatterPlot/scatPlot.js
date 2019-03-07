dataP = d3.csv("journalFree.csv")

dataP.then(function(data) {
  console.log("data", data)
  drawChart(data)
})

var drawChart = function(data) {

  var width = 1000;
  var height = 500;
  var padding = 40


var yScale = d3.scaleLinear()
              .domain([0, d3.max(data, function(d) { return d.Rank2018; })])
              .range([height - padding, padding]);


var yAxis = d3.axisLeft()
            .scale(yScale)
            .ticks(8);


  var svg = d3.select("body")
              .append("svg")
              .attr("width", width)
              .attr("height", height)
//creates dots
  svg.selectAll("circle")
     .data(data)
     .enter()
     .append("circle")
     .attr("cx", function(d, i){
       return padding + i * 10
     })
     .attr("cy", function(d, i){
       return yScale(d.Rank2018)
     })
     .attr("r", 2)
     .attr("fill", "black")
   svg.selectAll("text")
    .data(data)
    .enter()
    .append("text")
    .attr("x", function(d, i){
      return padding + i * 10
    })
    .attr("y", function(d, i){
      return yScale(d.Rank2018)
    })
    .text(function(d) {
      return d.ISO
    })
    .attr("font-size", 10)
    //y axis
    svg.append("g")
    .attr("transform", "translate(" + padding + ",0)")
    .call(yAxis)
}
