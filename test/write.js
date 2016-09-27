const chai = require('chai');
const should = chai.should();
const fs = require('fs');
const path = require('path');

const helpers = require('../index');
const file = path.join(__dirname, '..', '_sample.txt');

describe('write()', () => {
  beforeEach((done) => {
    fs.stat(file, (err, stats) => {
      if (!err) fs.unlinkSync(file);
      done();
    });
  });
  it('should return true', (done) => {
    helpers.write('_sample.txt', 'hi!', (error, success) => {
      should.not.exist(error);
      success.should.eql(true);
      done();
    });
  });
});
