function readInput () {
  var myInput = $("#goes_in textarea").val();
  var theInput = parseInt(myInput);
  return theInput;
}

function setup () {
  var $submit = $("#goes_in p");

  $submit.click(function() {
    var x = readInput();
    nextPrime(x);
  });

};

$(document).ready(setup);