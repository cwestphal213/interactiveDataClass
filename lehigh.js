var s = document.createElement("script");
s.src = "https://d3js.org/d3.v5.js"
var body = document.getElementsByTagName("body")[0]
body.after(s);

var linkList = d3.selectAll("div.view-content a").nodes()
var academicList = linkList.map(function(major){
  return major.innerText
});

academicList.forEach(function(major){
  console.log(major)
})
