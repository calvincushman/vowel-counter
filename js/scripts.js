var testVowels = ["a", "e", "i", "o", "u", "y", "A", "E", "I", "O", "U"]

var vowelCounter = function(userInput) {
  for(var index 0; index <= testVowels.length; index += 1) {
    console.log("testVowels at " + testVowels[index]);

  }
}

var userInput = function(inputString) {
  return inputString.split("");
}



$(document).ready(function() {
  $("form#vowelFinder").submit(function(event) {
    event.preventDefault();
    var inputString = ($("input#inputString").val());
    var result = userInput(inputString);
    console.log(inputString.length);
    $("#result").text(result);
  });
});
