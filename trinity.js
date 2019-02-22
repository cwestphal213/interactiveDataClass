var s = document.createElement("script");
s.src = "https://d3js.org/d3.v5.js"
var body = document.getElementsByTagName("body")[0]
body.after(s);

var linkList = d3.selectAll("div.mainContent-160 table td").nodes()
var rawList = linkList.map(function(course){
  return course.innerText
});
var majorList = []
rawList.forEach(function(major){
  if (major != ""){
    majorList.push(major)
  }
})

majorList.forEach(function(major){
  console.log(major)
})
