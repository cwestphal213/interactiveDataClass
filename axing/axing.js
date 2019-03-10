//intialize
var gradeData = d3.json("gradeData.json")


// first time
gradeData.then(function(data){
  drawGraph(data, 500, 500);
});

//Gets dimensions from users
var getDim = function() {
  d3.select("body").selectAll("g").remove();
  var width = document.getElementById("width").value;
  var height = document.getElementById("height").value;
  gradeData.then(function(data){
    drawGraph(data, width, height);
  });
}

var drawGraph = function(data, width, height){
    //screen parameters
    var dim =
      {
        width: width,
        height: height
      }

      var margin = {
        left: 25, right: 25, top: 20, bottom: 20
      }

      //scale graphs
      var xScale = d3.scaleLinear()
                      .domain([0, 20])
                      .range([margin.left, dim.width - margin.right]);

      var yScale = d3.scaleLinear()
                      .domain([0,100])
                      .range([dim.height - margin.bottom, margin.top]);
      //color scale

      var cScale = d3.scaleOrdinal(d3.schemeDark2);


      var svg = d3.select("svg")
                  .attr("width", width)
                  .attr("height", height)

      var plot = svg.append("g")
                  .classed("plot",true).attr("fill","black");

      var students = plot.selectAll("g") // margins
                 .data(data)
                 .enter()
                 .append("g")
                 .attr("fill", function(d){return cScale(d.name)});

    students.selectAll("circle")
                .data(function(d){return d.grades})
                .enter()
                .append("circle")
                .attr("cx", function(d,i){
                  return xScale(i+1);})
                .attr("cy", function(d){
                  return yScale(d)
                  })
                .attr("r", 2)

    // legend
    var legend = plot.append("g").classed("legend",true);

    legend.selectAll("circle")
                .data(data).enter()
                .append("circle")
                .attr("fill",function(d){return cScale(d.name);})
                .attr("cx", function(d,i) {return width*.9 - margin.right;}) // (width - margin.right) // scale?
                .attr("cy",function(d,i) {return margin.top+(i*15);}) // top.margin*i
                .attr('r', 4);
    legend.selectAll("text").data(data).enter().append("text").attr("x",width*.9 - margin.right+4)
          .attr("y",function(d,i){return margin.top+(i*15)+4;}).text(function(d){return d.name;}).attr("font-size",12);


    // axes
    var x_axis = d3.axisBottom().scale(xScale);
    var y_axis = d3.axisLeft().scale(yScale);
    var x_axes = plot.append("g").classed("xaxes",true).call(x_axis).attr("transform","translate(0," + (dim.height - margin.bottom) +")");
    var y_axes = plot.append("g").classed("yaxes",true).call(y_axis).attr("transform","translate("+margin.right+",0)");

}
