Marvin
===========

A simple game/code test to determine Marvin the Robot's position within a flat, grid-like version of Mars.

Install dependencies:

    npm install

Run mocha in the console to check unit tests.

Marvin uses Dalek for integration tests. Install it globally:

    npm install dalek-cli -g

To run Dalek tests, set up a simple Python server to host on port 8000:

    python -m SimpleHTTPServer

Then, run the Dalek tests themselves:

    dalek test/dalek-testing.js

Open home.html to see Marvin in action in the browser.
