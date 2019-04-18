
var dataP = d3.json("classData.json")

dataP.then(function(data){

allQuizes = getQuizesObj(data)

//console.log('grade', allQuizes[1].grade)

},
function(err){
  console.log(err)
})


var getQuizesObj = function(data){

return data.map(function(d){

  console.log(d.quizes)

  return d.quizes;
})
}

var getQuizesGrades = function(quizesGrades){

return data.map(function(d){

  console.log(d.grade)

  return d.grade;})}

var getR = function(x,y){

  mx = d3.mean(x)
  my = d3.mean(y)

}
