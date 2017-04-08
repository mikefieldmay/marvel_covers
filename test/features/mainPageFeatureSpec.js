'use strict';

var Browser  = require('zombie');
var http     = require('http');
var chai     = require('chai');
var expect   = chai.expect;

var server   = require('../../app');

Browser.localhost('example.com', 3000);

describe('index page', function () {

    before(function () {
        this.browser = new Browser();
    });

    beforeEach(function (done) {
        this.timeout(3000);
        this.browser.visit('/', done);
    });

    it('should have a title', function () {
        expect(this.browser.text('a.navbar-brand')).to.equal('Marvel Comic Finder');
    });

    it('should have a header element', function (done) {
        done();
        expect(this.browser.text('h1')).to.exist;
    });

    it('should have a summary element', function (done) {
        done();
        expect(this.browser.text('p')).to.exist;
    });

    it('should have a search bar', function (done) {
        done();
        expect(this.browser.text('form.search-box')).to.exist;
    });

});
