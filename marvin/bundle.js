require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"Focm2+":[function(require,module,exports){
var G = {};

G.getInput = function getInput (inputValue) {
  return inputValue.match(/[^\r\n]+/g);
}

G.getGrid = function getGrid (arrayOfLines) {
  var inputArr = arrayOfLines[0].split(" ");
  for(i = inputArr.length - 1; i >= 0; i--) {
    inputArr[i] = inputArr[i].replace(/\s/g,"");
      if (inputArr[i] === "") {
          inputArr.splice(i,1);
      } else if ( isNaN(parseInt(inputArr[i])) ){
          return inputArr = null;
      } else if ((parseInt(inputArr[i])) <= 50){
          inputArr[i] = parseInt(inputArr[i]);
      } else {
        return inputArr = null;
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
      } else if ( (isNaN(parseInt(robotPosition[i])) && (robotPosition[i] === "N" || robotPosition[i] === "S" || robotPosition[i] === "E" || robotPosition[i] === "W")) ){
          robotPosition[i] = robotPosition[i];
      } else if ((parseInt(robotPosition[i])) <= 50){
        robotPosition[i] = parseInt(robotPosition[i]);
      } else {
        robotPosition = null;
      }
  }
  return robotPosition;
}

G.getRobotInstructions = function getRobotInstructions(arrayOfLines) {
  var robotInstructions = arrayOfLines[2].split("");
  for(i = robotInstructions.length - 1; i >= 0; i--) {
    robotInstructions[i] = robotInstructions[i].replace(/\s/g,"");
      if (robotInstructions[i] === "") {
          robotInstructions.splice(i,1);
      } else if (robotInstructions[i] == "L" || robotInstructions[i] == "R" || robotInstructions[i] == "F") {
          robotInstructions[i] = robotInstructions[i];
      } else {
          return robotInstructions = null;
      }
  }
  return robotInstructions;
}

G.removeFromMainArray = function removeFromMainArray(arrayOfLines) {
  arrayOfLines.splice(1, 2);
  return arrayOfLines;
}

module.exports = G;







},{}],"./index.js":[function(require,module,exports){
module.exports=require('Focm2+');
},{}]},{},[])