/*jslint node: true */
/*global describe: false, before: false, after: false, it: false */
"use strict";

// Declare the variables used
var expect = require('chai').expect,
    request = require('request'),
    server = require('../index');

// Server tasks
describe('server', function () {

    // Beforehand, start the server
    before(function (done) {
        console.log('Starting the server');
        done();
    });

    // Afterwards, stop the server and empty the database
    after(function (done) {
        console.log('Stopping the server');
        done();
    });

    // Test the index route
    describe('Test the index route', function () {
        it('should return a page with the title Noticeboard', function (done) {
            request.get({ url: 'http://localhost:5000/' }, function (error, response, body) {
                expect(body).to.include('Noticeboard');
                expect(response.statusCode).to.equal(200);
                expect(response.headers['content-type']).to.equal('text/html; charset=utf-8');
                done();
            });
        });
    });

    // Test the notices route
    describe('Test the notices route', function () {
        it('should return JSON', function (done) {
            request.get({ url: 'http://localhost:5000/notices' }, function (error, response, body) {
                expect(response.statusCode).to.equal(200);
                expect(response.headers['content-type']).to.equal('application/json; charset=utf-8');
                done();
            });
        });
    });

});
