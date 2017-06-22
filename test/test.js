var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app');
var should = chai.should();

chai.use(chaiHttp);

describe('connect', function() {
  it('fails, as expected', function() { // <= Pass in done callback
    chai.request('http://localhost:8080')
        .get('/fail')
        .end(function(err, res) {
          //console.log(res);
          expect(res).to.have.status(404);
          //done();                               // <= Call done to signal callback end
        });
  });
  it('succeeds silently!', function() {   // <= No done callback
    chai.request('http://localhost:8080')
        .get('/')
        .end(function(err, res) {
          expect(res).to.have.status(123);    // <= Test completes before this runs
        });
    });

});


describe('assert', function () {
  var assert = chai.assert;

  it('assert', function () {
    assert.equal(4, 1+3, 'addSum');
  });

  it('assert', function () {
    assert.equal(5, '5', 'toString');
  });
});
