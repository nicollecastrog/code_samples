var G = {};

G.getInput = function getInput (inputValue) {
  var arrayOfLines = inputValue.match(/[^\r\n]+/g);
  console.log(arrayOfLines);
  return arrayOfLines;
}

G.getGrid = function getGrid (arrayOfLines) {
  var inputArr = arrayOfLines[0].split(" ");
  for(i = inputArr.length - 1; i >= 0; i--) {
    inputArr[i] = inputArr[i].replace(/\s/g,"");
      if (inputArr[i] === "") {
          inputArr.splice(i,1);
      } else if ( isNaN(parseInt(inputArr[i])) ){
          return inputArr = null;
      } else {
          inputArr[i] = parseInt(inputArr[i]);
      }
  }
  return inputArr;
}
 
G.getRobotPosition = function getRobotPosition(arrayOfLines) {
  var robotPosition = arrayOfLines[1].split(" ");
  for(i = robotPosition.length - 1; i >= 0; i--) {
    robotPosition[i] = robotPosition[i].replace(/\s/g,"");
      if (robotPosition[i] === "") {
          robotPosition.splice(i,1);
      } else if ( isNaN(parseInt(robotPosition[i])) ){
          robotPosition[i] = robotPosition[i];
      } else {
          robotPosition[i] = parseInt(robotPosition[i]);
      }
  }
  return robotPosition;
}

// module.exports = G;






