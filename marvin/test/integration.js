var Browser = require("zombie");
browser = new Browser();

describe("Marvin", function() {
  it("should produce the correct output", function(done) {
    browser.visit("file://"+__dirname+"/../home.html", function () {
      browser.fill("#inputTextarea", "1 1 N")
      browser.click("#goes_in p");
      browser.dump();
      done()
    });
  });
});