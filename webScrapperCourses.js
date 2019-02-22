var s = document.createElement("script");
s.src = "https://d3js.org/d3.v5.js"
var body = document.getElementsByTagName("body")[0]
body.after(s);

var linkList = d3.selectAll("div#main > ul:first-of-type a").nodes()
var courseList = linkList.map(function(course){
  return course.innerText
});
