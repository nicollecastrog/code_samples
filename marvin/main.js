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
    alert("You must use numbers (no larger than 50) to define the upper-right coordinates of Mars");
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

// function turnLeft(direction){
//   console.log("Going left");

//   if (direction == "N"){
//     $(".arrow_box").rotate({ startDeg:0, endDeg:-90, persist:true });
//     direction = "W";
//   } else if (direction == "E"){
//     $(".arrow_box").rotate({ startDeg:-270, endDeg:-360, persist:true });
//     direction = "N";
//   } else if (direction == "S"){
//     $(".arrow_box").rotate({ startDeg:180, endDeg:-270, persist:true });
//     direction = "E";
//   } else {
//     $(".arrow_box").rotate({ startDeg:-90, endDeg:-180, persist:true });
//     direction = "S";
//   }
//   console.log(direction + " is the new direction.");
//   return direction
// }

function turnRight(value){
  console.log("Going right");
  value += 90;
  $(".arrow_box").rotate({ endDeg: value, persist:true });
  console.log(value + " is the new value.");
  return value
}

function turnLeft(value){
  console.log("Going left");
  value -=90;
  $(".arrow_box").rotate({ endDeg: value, persist:true });
  console.log(value + " is the new value.");
  return value
};

function goForward(value){
  console.log("Going forward");
}

function moveRobot(inputArr, robotInstructions, robotPosition){
  for (var i = 0; i <= robotInstructions.length - 1; i++) {
    if (i == 0) {
      var direction = robotPosition[2];
      console.log(direction);
      if (direction == "N"){
        value = 0;
      } else if (direction == "E"){
        value = 90;
      } else if (direction == "S"){
        value = 180;
      } else if (direction == "W") {
        value = 270;
      }
    }

    if (robotInstructions[i] == "L") {
      value = turnLeft(value);
    } else if (robotInstructions[i] == "R"){
      value = turnRight(value);
    } else if (robotInstructions[i] == "F"){
      value = goForward(value);
    }
  };
}

function setup () {
  var $submit = $("#goes_in p");

  $submit.click(function() {
    var value = getValue();
    var array = G.getInput(value);
    var inputArr = G.getGrid(array);
    analyzeGrid(inputArr);
    for (var i = array.length - 2; i >= 0; i -= 2) {
      var robotPosition = G.getRobotPosition(array);
      placeRobot(inputArr, robotPosition);
      var robotInstructions = G.getRobotInstructions(array);
      moveRobot(inputArr, robotInstructions, robotPosition);
    };
  });

};

$(document).ready(setup);


