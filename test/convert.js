(function() {

  'use strict';

  const chai = require('chai');
  const should = chai.should();
  const fs = require('fs');
  const path = require('path');

  const helpers = require('../index');
  const fixtures = require('./_fixtures');
  const file = path.join(__dirname, '..', '_sample.json');

  describe('convert()', () => {
    beforeEach((done) => {
      fs.stat(file, (err, stats) => {
        if (!err) fs.unlinkSync(file);
        done();
      });
    });
    it('should create JSON file', (done) => {
      helpers.convert(fixtures.convert.arr, '_sample.json', (err, res) => {
        should.not.exist(err);
        res.should.eql(true);
        helpers.read('_sample.json', (error, response) => {
          should.not.exist(error);
          JSON.parse(response).should.eql(fixtures.convert.expected);
          done();
        });
      });
    });
    it('should return an error if the object is falsely', (done) => {
      helpers.convert(null, '_sample.json', (err, res) => {
        should.exist(err);
      });
      helpers.convert(undefined, '_sample.json', (err, res) => {
        should.exist(err);
      });
      helpers.convert(false, '_sample.json', (err, res) => {
        should.exist(err);
      });
      helpers.convert({}, '_sample.json', (err, res) => {
        should.exist(err);
      });
      done();
    });
  });

}());
