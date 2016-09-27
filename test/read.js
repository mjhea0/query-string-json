(function() {

  'use strict';

  const chai = require('chai');
  const should = chai.should();
  const fs = require('fs');
  const path = require('path');

  const helpers = require('../index');
  const file = path.join(__dirname, '..', '_sample.txt');

  describe('read()', () => {
    beforeEach((done) => {
      fs.stat(file, (err, stats) => {
        if (!err) fs.unlinkSync(file);
        done();
      });
    });
    it('should return the file contents', (done) => {
      helpers.write('_sample.txt', 'hi!', (error, success) => {
        should.not.exist(error);
        success.should.eql(true);
        helpers.read('_sample.txt', (err, res) => {
          should.not.exist(err);
          res.should.eql('hi!');
          done();
        });
      });
    });
    it('should return an error if the file does not exist', (done) => {
      helpers.read('_sample.txt', (err, res) => {
        should.exist(err);
        should.not.exist(res);
        done();
      });
    });
  });

}());
