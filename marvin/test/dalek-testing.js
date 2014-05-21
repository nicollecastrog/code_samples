var instructionsToGetLost = '5 3\n2 2 N\nLRFF';
var lostRobotText = "Output:" +
"\nThe upper-right corner of Mars ends at: 5 3" + 
"\nRobot 1's starting position: 2 2 N" +
"\nRobot 1's final position: 2 3 N LOST";

module.exports = {
  'Page title is correct': function (test) {
    test
      .open('http://localhost:8000/home.html')
      .assert.title().is('Marvin', 'It has title')
      .done();
  },
  'Generates visual grid correctly': function (test) {
    test
      .open('http://localhost:8000/home.html')
      .type('#inputTextarea', instructionsToGetLost)
      .click('#goes_in p')
      .waitForElement('#main .grid_wrapper')
      .assert.numberOfElements('#main .grid tr', 3, 'Three rows are present in Mars')
      .assert.numberOfElements('#main .grid td', 15, 'Fifteen cells are present in Mars')
      .done();
  },
  'Robot can get LOST': function (test) {
    test
      .open('http://localhost:8000/home.html')
      .type('#inputTextarea', instructionsToGetLost)
      .click('#goes_in p')
      .waitForElement('#main .grid_wrapper')
      .assert.text('#comes_out').is(lostRobotText)
      .done();
  }
};