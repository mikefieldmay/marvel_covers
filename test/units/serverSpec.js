'use strict';

var chai     = require('chai');
var chaiHttp = require('chai-http');
var http     = require('http');
var expect   = chai.expect;

chai.use(chaiHttp);

describe('server', function () {

  it('loads the index page with a 200 response', function () {
      chai.request('http://localhost:8080')
      .get('/')
      .end(function(err, res) {
        expect(res).to.have.status(200);
      });
  });

  it('returns a 404 response for a non-existent route', function () {
      chai.request('http://localhost:8080')
      .get('/signup')
      .end(function(err, res) {
        expect(res).to.have.status(404);
      });
  });

});
