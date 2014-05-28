require(["calculator", "jQuery"], function(calc, $){
  console.log($);
  $("#answer").on("click", function(event){
    var num1 = parseInt($("#num1").val());
    var num2 = parseInt($("#num2").val());
    var result = calc.add(num1, num2);
    $("#result").val(result);
  });
});