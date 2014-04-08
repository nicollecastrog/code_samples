
var $row6 = $('#row6');
var $row5 = $('#row5');
var $row4 = $('#row4');
var $row3 = $('#row3');
var $row2 = $('#row2');
var $row1 = $('#row1');


var turn = 0;

function hideCheckBtn() {
  for (var i = 1; i <= 6; i++){
    if ((($('#check' + i)).hasClass('hidden')) && (i == turn)) {
      ($('#check' + i)).removeClass('hidden');
    } else if (i != turn) {
      ($('#check' + i)).addClass('hidden');
    } 
  }
}

var colorOptions = new Array("purple","lblue","red", "pink", "brown", "dblue");

function shuffle(o){ 
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

function createCode() {
  code = shuffle(colorOptions);
  code.pop();
  code.pop();
}

function isfree(element) {
  if ((element.hasClass("purple")) || (element.hasClass("lblue")) || (element.hasClass("red")) || (element.hasClass("pink")) || (element.hasClass("brown")) || (element.hasClass("dblue"))) {
    return false;
  } else {
    return true;
  }
}


function placeColor(color) {
  if (isfree($('#A'  + turn))) {
    $('#A'  + turn).addClass(color);
  } else if (isfree($('#B'  + turn))) {
    $('#B'  + turn).addClass(color);
  } else if (isfree($('#C'  + turn))) {
    $('#C'  + turn).addClass(color);
  } else if (isfree($('#D'  + turn))) {
    $('#D'  + turn).addClass(color);
  } else {
    $('#A'  + turn).removeClass();
    $('#A'  + turn).addClass("gray_circle");

    $('#B'  + turn).removeClass();
    $('#B'  + turn).addClass("gray_circle");

    $('#C'  + turn).removeClass();
    $('#C'  + turn).addClass("gray_circle");

    $('#D'  + turn).removeClass();
    $('#D'  + turn).addClass("gray_circle");

    $('#A'  + turn).addClass(color);
  }  
}

function goNewRow() {
  console.log('goNewRow has been called');
  turn += 1;
  submitArray = [];
  hideCheckBtn();
  ($('#check' + turn)).on('click', goCheck);
}

function giveClues() {
  for (var i = 0; i <= 3; i++) {
    if ((submitArray[0] == code[0]) && ($('#E'  + turn).hasClass("green") == false)) {
      $('#E'  + turn).addClass("green");
    } else if ((submitArray[1] == code[1]) && ($('#F'  + turn).hasClass("green") == false)) {
      $('#F'  + turn).addClass("green");
    } else if ((submitArray[2] == code[2]) && ($('#G'  + turn).hasClass("green") == false)) {
      $('#G'  + turn).addClass("green");
    } else if ((submitArray[3] == code[3]) && ($('#H'  + turn).hasClass("green") == false)) {
      $('#H'  + turn).addClass("green");
    }
  }
}


function goCompare() {
  if ( (submitArray[0] == code[0]) && (submitArray[1] == code[1]) && (submitArray[2] == code[2]) && (submitArray[3] == code[3]) ){
    turn = 7;
    $('#A'  + turn).addClass(code[0]);
    $('#B'  + turn).addClass(code[1]);
    $('#C'  + turn).addClass(code[2]);
    $('#D'  + turn).addClass(code[3]);
    alert( "You submission matches the code! You WIN!" );
  } else if (turn < 6) {
    giveClues();
    goNewRow();
  } else {
    turn = 7;
    $('#A'  + turn).addClass(code[0]);
    $('#B'  + turn).addClass(code[1]);
    $('#C'  + turn).addClass(code[2]);
    $('#D'  + turn).addClass(code[3]);
    alert( "Game over!" );
  }
}

function colorsToArray(letter) {
  if ($('#' + letter + turn).hasClass("purple")) {
    submitArray.push("purple");
  } else if ($('#' + letter + turn).hasClass("lblue")) {
    submitArray.push("lblue");
  } else if ($('#' + letter + turn).hasClass("red")) {
    submitArray.push("red");
  } else if ($('#' + letter + turn).hasClass("pink")) {
    submitArray.push("pink");
  } else if ($('#' + letter + turn).hasClass("brown")) {
    submitArray.push("brown");
  } else if ($('#' + letter + turn).hasClass("dblue")) {
    submitArray.push("dblue");
  }
}

function goCheck() {
  for (var i = 1; i <= 4; i++) {
      if (i == 1) {
        colorsToArray("A");
      } else if (i == 2) {
        colorsToArray("B");
      } else if (i == 3) {
        colorsToArray("C");
      } else if (i == 4) {
        colorsToArray("D");
      }
    };
  goCompare();
};










function setup () {
  goNewRow();
  createCode();

  var $choosePurple = $('#choosePurple');
  var $chooseLBlue = $('#chooseLBlue');
  var $chooseRed = $('#chooseRed');
  var $choosePink = $('#choosePink');
  var $chooseBrown = $('#chooseBrown');
  var $chooseDBlue = $('#chooseDBlue');


  $choosePurple.click(function() {
    placeColor("purple");
  });

  $chooseLBlue.click(function() {
    placeColor("lblue");
  });

  $chooseRed.click(function() {
    placeColor("red");
  });

  $choosePink.click(function() {
    placeColor("pink");
  });

  $chooseBrown.click(function() {
    placeColor("brown");
  });

  $chooseDBlue.click(function() {
    placeColor("dblue");
  });

}

$(document).ready(setup);




