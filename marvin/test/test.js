var assert = require("assert"); // core module
var G = require('../index.js');  // my module

describe('Grid', function(){
  describe('Module G', function(){
    it('should have a getInput Method', function(){
      assert.equal(typeof G, 'object');
      assert.equal(typeof G.getInput, 'function');
    })
    it("getInput('5 3\n1 1 E') should equal ['5 3', '1 1 E']", function(){
      assert.deepEqual(G.getInput('5 3\n1 1 E'), ['5 3', '1 1 E']);
    })
    it("getGrid(['5 2', '4 4 E']) should equal [5, 2]", function(){
      assert.deepEqual(G.getGrid(['5 2', '4 4 E']), [5, 2]);
    })
    it("getGrid(['5 cat', '4 4 E']) should equal null", function(){
      assert.deepEqual(G.getGrid(['5 cat', '4 4 E']), null);
    })
    it("getGrid(['53 2', '4 4 E']) should equal null", function(){
      assert.deepEqual(G.getGrid(['53 2', '4 4 E']), null);
    })
    it("getRobotPosition(['5 2', '4 1 E']) should equal [4, 1, E]", function(){
      assert.deepEqual(G.getRobotPosition(['5 2', '4 1 E']), [4, 1, 'E']);
    })
  })
})