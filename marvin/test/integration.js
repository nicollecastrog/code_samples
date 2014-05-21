// var assert = require("assert"); // core module
// var Browser = require("zombie");
// browser = new Browser();
// console.log("START");

// // describe("Marvin", function() {
// //   it("should produce the correct output", function() {
//     // console.log("CHECK");
//     // assert.equal(1+1, 3);
//     browser.visit("http://localhost:8000/home.html", function (a, b) {
//       console.log(a);
//       console.log(b);
//       // assert.ok(browser.success);
//       // browser.fill("#inputTextarea", "1 1 N")
//       // browser.click("#goes_in p");
//       // browser.dump();
//       // done()
//     });
//   });
// });

// var Browser = require("zombie");
// var assert = require("assert");

// // Load the page from localhost
// browser = new Browser()
// browser.visit("http://localhost:8000/home.html", function () {

//   // Fill email, password and submit form
//   browser.
//     fill("email", "zombie@underworld.dead").
//     fill("password", "eat-the-living").
//     pressButton("Sign Me Up!", function() {

//       // Form submitted, new page loaded.
//       assert.ok(browser.success);
//       assert.equal(browser.text("title"), "Welcome To Brains Depot");

//     })

// });