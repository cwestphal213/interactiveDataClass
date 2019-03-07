var gradeData = d3.json("gradeData.json")



//intialize
gradeData.then(function(data){
drawGraph(data, 500, 500)

})


var drawGraph = function(data, width, height){

//screen parameters
/*  var dim =
  {
    width: 200,
    height: 500
  }*/

  var margin = {
    left: 20, right: 20, top: 20, bottom: 20
  }

  //scale graphs

  var xScale = d3.scaleLinear()
                  .domain([0, 20])
                  .range([margin.left, width - margin.right])

  var yScale = d3.scaleLinear()
                  .domain([0,100])
                  .range([dim.height - margin.bottom, margin.top])
  //color scale

  var cScale = d3.scaleOrdinal(d3.schemeDark2)


  var svg = d3.select("svg")
              .attr("width", width)
              .attr("height", height)

  var plot = svg.append("g")
                .classed("plot",true)

  var students = plot.selectAll("g")
                          .data(data)
                          .enter()
                          .append("g")
                          .attr("fill", function(d){return cScale(d.name)});
students.selectAll("circle")
.data(function(d){return d.grades})
.enter()
.append("circle")
.attr("cx", function(d,i){
  return xScale( i);})
.attr("cy", function(d){
  return yScale(d)
  })
.attr("r", 2)











}
