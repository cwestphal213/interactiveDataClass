//Creates list of animals in JS
var animals = ["cat", "dog", "wolf", "bear", "mouse"]

//Creates empty list element in html
var webList = document.createElement("UL");
webList.setAttribute("id", "animalList")
document.body.appendChild(webList);


//This function takes the animal as a parameter, creates a new
//element, adds the animal as text, and adds that to the html list
var addAnimal = function(animal){
  var point= document.createElement("LI")
  var pointText = document.createTextNode(animal)
  point.appendChild(pointText)
  document.getElementById("animalList").appendChild(point);
}

//this for each runs the addAnimal function for every animal in the array
animals.forEach(addAnimal)
