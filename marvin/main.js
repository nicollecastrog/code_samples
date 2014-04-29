function getValue(){
  this.inputValue = $("#inputTextarea").val().toString();
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
  var grid_wrapper = document.createElement('div');
  grid_wrapper.className = 'grid_wrapper';
  var grid = document.createElement('table');
  grid.className = 'grid';
  var cols = cols;
  var rows = rows;
  $("#main").append(grid_wrapper);
  $(".grid_wrapper").append(grid);

  for(var i = 0; i < rows; i++) {
      $('.grid').append('<tr></tr>');
      for(var j = 0; j < cols; j++) {
          $('.grid').find('tr').eq(i).append('<td></td>');
          $('.grid').find('tr').eq(i).find('td').eq(j).attr('data-row', i).attr('data-col', j);
      }
  }
}

function placeRobot(inputArr, robotPosition){
  console.log(robotPosition)
  var robot = document.createElement('div');
  robot.className = 'arrow_box';
  $("#main").append(robot);
  if (robotPosition[2] == "N") {
    $(".arrow_box").css({left: 48.5 + (robotPosition[0] * 52) + robotPosition[0] + "px", top: 160 + ((inputArr[1] * 50) - (robotPosition[1] * 50)) +"px"});
  } else if (robotPosition[2] == "E") {
    $(".arrow_box").css({left: 45 + (robotPosition[0] * 53) + "px", top: 153.5 + ((inputArr[1] * 50) - (robotPosition[1] * 50)) +"px"});
    $(".arrow_box").css({"-webkit-transform": "rotate(90deg)", "-ms-transform": "rotate(90deg)", "transform": "rotate(90deg)"});
  } else if (robotPosition[2] == "S") {
    $(".arrow_box").css({left: 48.5 + (robotPosition[0] * 52) + robotPosition[0] + "px", top: 150 + ((inputArr[1] * 50) - (robotPosition[1] * 50)) +"px"});
    $(".arrow_box").css({"-webkit-transform": "rotate(180deg)", "-ms-transform": "rotate(180deg)", "transform": "rotate(180deg)"});
  } else if (robotPosition[2] == "W") {
    $(".arrow_box").css({left: 52 + (robotPosition[0] * 53) + "px", top: 153.5 + ((inputArr[1] * 50) - (robotPosition[1] * 50)) +"px"});
    $(".arrow_box").css({"-webkit-transform": "rotate(270deg)", "-ms-transform": "rotate(270deg)", "transform": "rotate(270deg)"});
  } else {
    robot.parentNode.removeChild(robot);
    alert("You must choose an appropriate direction for Marvin to face: N(orth), S(outh), E(ast), or W(est). Enter only the first letter of the direction you want.");
  }
}

function setup () {
  var $submit = $("#goes_in p");

  $submit.click(function() {
    var value = getValue();
    var arrayOfLines = G.getInput(value);
    var inputArr = G.getGrid(arrayOfLines);
    analyzeGrid(inputArr);
    var robotPosition = G.getRobotPosition(arrayOfLines);
    placeRobot(inputArr, robotPosition);
  });

};

$(document).ready(setup);


