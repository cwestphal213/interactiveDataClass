var nums = [11,4,41,50,7,19,8,18,2,6,43,6,20,43,2,23,12,24,31,29]

var addToSum = function(sum, newAmount)
{
  return sum + newAmount
}
var total = nums.reduce(addToSum)
var avg1 = total/nums.length

//Can also use done inside function with if statements
//In this example the function is defined inside the reduce method

var avg2 = nums.reduce(function(sum, newAmount, index, nums)
{
  sum += newAmount;
  if( index === nums.length-1) //returns avg at last number
  {
    return sum/nums.length;
  }
  else
  {
    return sum;
  }
});



var displayNum =function(num,Id) {
  document.getElementById(Id).innerText = num;
}
