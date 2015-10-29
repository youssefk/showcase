$(document).ready(function () {
  var choice = parseInt(prompt("Which mad lib story would you like to fill out? \nType the number of the story in the box. \n\nYour choices are: \n1: 'A fantastic adventure' \n2: 'Pizza Pizza'"));

  if (choice === 1) {
    $("#lib1").fadeIn(1000);
  } else if (choice === 2) {
    $("#lib2").fadeIn(1000);
  } else {
    alert("You didn't choose a valid option, please reload this page and try again.");
  }


  $("#blankstory1 form").submit(function(event) {

    var blanks = ["person1", "person2", "animal", "exclamation", "noun", "verb"]

    blanks.forEach(function(blank) {
      var userInput = $("input#" + blank).val();
      $("." + blank).text(userInput);
    });

    $("#story1").show();

    event.preventDefault();

  });


  $("#blankstory2 form").submit(function(event) {

    var blanks = ["adjective1", "nationality", "pizzaperson", "noun1", "adjective2", "noun2", "adjective3", "adjective4", "pluralnoun", "noun3", "number1", "shapes", "food1", "food2", "number2"]

    blanks.forEach(function(blank) {
      var userInput = $("input#" + blank).val();
      $("." + blank).text(userInput);
    });

    $("#story2").show();

    event.preventDefault();

  });


});
