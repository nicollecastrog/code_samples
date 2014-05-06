function getValue(){
  return $("#inputTextarea").val().toString();;
}

function analyzeGrid(inputArr){
  if (inputArr != null) {
    gridSetup(inputArr[0], inputArr[1]);
  } else {
    $("#main").empty();
    document.getElementById("inputTextarea").value = "";
    alert("You must use numbers (no larger than 50) to define the upper-right coordinates of Mars");
  }
  $("#comes_out").empty();
  $("#comes_out").append("<h4>Output: </h4>");
  var output = document.createElement('ul');
  output.className = 'output';
  $("#comes_out").append(output);
  $(".output").append('<li>The upper-right corner of Mars ends at: ' + inputArr.join(" ") + '</li>');
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

function setRobotCSS(robotPosition, inputArr, robot){
  $("#" + robot.id).css({left: 48.5 + (robotPosition[0] * 52) + robotPosition[0] + "px", top: 268 + ((inputArr[1] * 50) - (robotPosition[1] * 50)) +"px"});
}

function placeRobot(inputArr, robotPosition){
  var robot = document.createElement('div');
  robot.className = 'arrow_box';
  robot.id = Math.floor(Math.random()*1001);
  console.log("the robot's ID is: " + robot.id);
  $("#main").append(robot);
  var myRobot = document.getElementById(robot.id);
  if (robotPosition[2] == "N") {
    $("#" + robot.id).addClass("placed");
    setRobotCSS(robotPosition, inputArr, robot);
  } else if (robotPosition[2] == "E") {
    $("#" + robot.id).addClass("placed");
    setRobotCSS(robotPosition, inputArr, robot);
    $("#" + robot.id).addClass("east");
  } else if (robotPosition[2] == "S") {
    $("#" + robot.id).addClass("placed");
    setRobotCSS(robotPosition, inputArr, robot);
    $("#" + robot.id).addClass("south");
  } else if (robotPosition[2] == "W") {
    $("#" + robot.id).addClass("placed");
    setRobotCSS(robotPosition, inputArr, robot);
    $("#" + robot.id).addClass("west");
  } else {
    robot.parentNode.removeChild(robot);
    alert("You must choose an appropriate direction for Marvin to face: N(orth), S(outh), E(ast), or W(est). Enter only the first letter of the direction you want.");
  }
  return robot;
}

function turnRight(value, robot){
  value += 90;
  $("#" + robot.id).rotate({ endDeg: value, persist:true });
  return value;
}

function turnLeft(value, robot){
  value -=90;
  $("#" + robot.id).rotate({ endDeg: value, persist:true });
  return value;
};

function resetValue(value){
  if (value == 0 || value == -360 || value % 360 == 0 || value % -360 == 0){
    value = 0;
    return value;
  } else if (value == 90 || value == -270 || value % 450 == 0 || value % -450 == 0){
    value = 90;
    return value;
  } else if (value == 180 || value == -180 || value % 540 == 0 || value % -540 == 0){
    value = 180;
    return value;
  } else if (value == 270 || value == -90 || value % 630 == 0 || value % -630 == 0){
    value = 270;
    return value;
  }
}

function goForward(value, endPosition, robot){
  value = resetValue(value);
  if (value == 0){
    $("#" + robot.id).animate({
      top: "-=50"
    }, 1000, function() {
      //end of animation
    });
    endPosition[1] += 1; 
    endPosition[2] = "N";

  } else if (value == 90){
    $("#" + robot.id).animate({
      left: "+=50"
    }, 1000, function() {
      //end of animation
    });
    endPosition[0] += 1;
    endPosition[2] = "E";
  } else if (value == 180){
    $("#" + robot.id).animate({
      top: "+=50"
    }, 1000, function() {
      //end of animation
    });
    endPosition[1] -= 1;
    endPosition[2] = "S";
  } else if (value == 270){
    $("#" + robot.id).animate({
      left: "-=50"
    }, 1000, function() {
      //end of animation
    });
    endPosition[0] -= 1;
    endPosition[2] = "W";
  }
  return endPosition;
}

function moveRobot(inputArr, robotInstructions, robotPosition, endPosition, robot, fences){
  var gridArr = inputArr;
  var $robot = $("#" + robot.id);
  console.log("inside moveRobot");

  for (var i = 0; i <= robotInstructions.length - 1; i++) {
    if (i == 0) {
        var direction = robotPosition[2];
        if (direction == "N"){
          var value = 0;
        } else if (direction == "E"){
          var value = 90;
        } else if (direction == "S"){
          var value = 180;
        } else if (direction == "W") {
          var value = 270;
        }
    }

    if (robotInstructions[i] == "L"){
        value = turnLeft(value, robot);
        if (endPosition[2] == "N"){
          endPosition[2] = "W";
        } else if (endPosition[2] == "E"){
          endPosition[2] = "N";
        } else if (endPosition[2] == "S"){
          endPosition[2] = "E";
        } else if (endPosition[2] =="W"){
          endPosition[2] = "S";
        }
    } else if (robotInstructions[i] == "R"){
        value = turnRight(value, robot);
        if (endPosition[2] == "N"){
          endPosition[2] = "E";
        } else if (endPosition[2] == "E"){
          endPosition[2] = "S";
        } else if (endPosition[2] == "S"){
          endPosition[2] = "W";
        } else if (endPosition[2] =="W"){
          endPosition[2] = "N";
        }
    } else if (robotInstructions[i] == "F") {
        fenceCheck = checkFences(endPosition, fences);
        console.log("The fenceCheck is: " + fenceCheck);
        if (fenceCheck == true){
            console.log("There is a fence here, ignore instructions to move off board");
        } else if (fenceCheck == false){
            if (endPosition[0] <= 0 && endPosition[2] == "W"){
                fences.push(endPosition);
                $robot.addClass("lost");
                $robot.fadeTo( "fast" , 0.5, function() {
                  // Animation complete.
                });
                return endPosition;
            } else if (endPosition[1] <= 0 && endPosition[2] == "S"){
                fences.push(endPosition);
                $robot.addClass("lost");
                $robot.fadeTo( "fast" , 0.5, function() {
                  // Animation complete.
                });
                return endPosition;
            } else if (endPosition[0] >= gridArr[0] && endPosition[2] == "E"){
                fences.push(endPosition);
                $robot.addClass("lost");
                $robot.fadeTo( "fast" , 0.5, function() {
                  // Animation complete.
                });
                return endPosition;
            } else if (endPosition[1] >= gridArr[1] && endPosition[2] == "N"){
                fences.push(endPosition);
                $robot.addClass("lost");
                $robot.fadeTo( "fast" , 0.5, function() {
                  // Animation complete.
                });
                return endPosition;
            } else {
              endPosition = goForward(value, endPosition, robot);
            }
        } //end of if fenceCheck == false  
    } //end of if "F"

  }; //end of main moveRobot for loop
  return endPosition;
} //end of moveRobot

function checkFences(endPosition, fences){
  console.log("inside checkFences");
  console.log(fences);
  var fenceCheck = false;
  for (var j = fences.length - 1; j >= 0; j--) {
      console.log("determining if the current endPosition matches a fence");
      console.log("The current fence is: " + fences[j]);
      console.log("The current endPosition is: " + endPosition);
      var a = fences[j].toString();
      var b = endPosition.toString();
      if (a == b){
        var fenceCheck = true;
      }
  } // end of for loop
  return fenceCheck;
} // end of checkFences

function showOutput(newArray, endPosition, inputArr, c, robot){
  console.log("The endPosition is: " + endPosition);
  var gridArr = inputArr;
  var robotEnd = endPosition.join(" ");
  var $robot = $("#" + robot.id);

  for (var i = 0; i <= newArray.length - 1; i++) {
    if (i == 2){
        if ($robot.hasClass("lost")){
          $(".output").append("<li>Robot " + c + "'s final position: " + robotEnd + " LOST</li>");
        } else {
          $(".output").append("<li>Robot " + c + "'s final position: " + robotEnd + "</li>");
        }
    } else if (i == 1){
      $(".output").append("<li>Robot " + c + "'s starting position: " + newArray[i] + "</li>");
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
    var newArray = array;
    var c = 1;
    var fences = [];

    for (var i = array.length - 2; i >= 0; i -= 2) {
      console.log("Entering the main for loop");
      console.log("newArray is now: " + newArray);
      var robotPosition = G.getRobotPosition(newArray);
      var robot = placeRobot(inputArr, robotPosition);
      var robotInstructions = G.getRobotInstructions(newArray);
      var endPosition = robotPosition;
      endPosition = moveRobot(inputArr, robotInstructions, robotPosition, endPosition, robot, fences);
      showOutput(newArray, endPosition, inputArr, c, robot);

      if (array.length > 3){
        newArray = G.removeFromMainArray(newArray);
      }
      c += 1;
    };

  }); //end of $submit.click

};

$(document).ready(setup);


