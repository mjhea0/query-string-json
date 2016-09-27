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
  });

}());
