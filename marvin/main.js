function getValue(){
  this.inputValue = $("#inputTextarea").val().toString();
  console.log(inputValue);
  return inputValue;
}

function analyzeGrid(inputArr){
  if (inputArr != null) {
    gridSetup(inputArr[0], inputArr[1]);
  } else {
    $("#main").empty();
    document.getElementById("inputTextarea").value = "";
    alert("You must use numbers to define the upper-right corner of Mars");
  }
}

function gridSetup(cols, rows) {
  $("#main").empty();
  var grid = document.createElement('table');
  grid.className = 'grid';
  var cols = cols;
  var rows = rows;
  $("#main").append(grid);

  for(var i = 0; i < rows; i++) {
      $('.grid').append('<tr></tr>');
      for(var j = 0; j < cols; j++) {
          $('.grid').find('tr').eq(i).append('<td></td>');
          $('.grid').find('tr').eq(i).find('td').eq(j).attr('data-row', i).attr('data-col', j);
      }
  }
}

function placeRobot(robotPosition){
  var robot = document.createElement('div');
  robot.className = 'arrow_box';
  $("#main").append(robot);
}

function setup () {
  var $submit = $("#goes_in p");

  $submit.click(function() {
    var value = getValue();
    var arrayOfLines = G.getInput(value);
    var inputArr = G.getGrid(arrayOfLines);
    analyzeGrid(inputArr);
    var robotPosition = G.getRobotPosition;
    placeRobot(robotPosition);
  });

};

$(document).ready(setup);


