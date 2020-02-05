var add = function(number1, number2) {
    return number1 + number2;
  };
  var subtract = function(number1, number2) {
    return number1 - number2;
  };

  var multiply = function(number1, number2) {
    return number1 * number2;
  };

  var divide = function(number1, number2) {
    return number1 / number2;
  };

  var number1 = parseInt(prompt("Enter a number:"));
  var number2 = parseInt(prompt("Enter another number:"));

  var BMI = function(weight,height) {
    return (weight / (height * height))* 703
    };

    var weight = prompt("What is your weight in lbs?");
    var height = prompt("What is your height in in?");

    result = BMI(weight,height).toPrecision(4);

  alert("The result is "+ result);

  var volume = prompt("Enter volume...in gallons.")

  var liters = function (volume) {
      return (volume * 3.78)
  };

  var result = liters(volume)
  alert("The volume in liters is..." + result);
  

  
