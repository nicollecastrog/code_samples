var assert = require('assert');
var nextPrime = require('./../index').nextPrime;


describe('nextPrime', function(){
  before(function() {
    // Some setup
  });

  it('should return the next prime number', function(){
    assert.equal(11, nextPrime(7));
  });
  it('should know that zero and one are not prime numbers', function(){
    assert.equal(2, nextPrime(0));
    assert.equal(2, nextPrime(1));
  });

  after(function() {
    // Some tear-down
  });
});