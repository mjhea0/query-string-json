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
    it('should return an error if the first argument is null', (done) => {
      helpers.convert(null, '_sample.json', (err, res) => {
        should.exist(err);
        should.not.exist(res);
        helpers.read('_sample.json', (error, response) => {
          should.exist(error);
          should.not.exist(response);
          done();
        });
      });
    });
    it('should return an error if the first argument is undefined',
    (done) => {
      helpers.convert(undefined, '_sample.json', (err, res) => {
        should.exist(err);
        should.not.exist(res);
        helpers.read('_sample.json', (error, response) => {
          should.exist(error);
          should.not.exist(response);
          done();
        });
      });
    });
    it('should return an error if the first argument is false', (done) => {
      helpers.convert(false, '_sample.json', (err, res) => {
        should.exist(err);
        should.not.exist(res);
        helpers.read('_sample.json', (error, response) => {
          should.exist(error);
          should.not.exist(response);
          done();
        });
      });
    });
    it('should handle an empty first argument', (done) => {
      helpers.convert([], '_sample.json', (err, res) => {
        should.not.exist(err);
        res.should.eql(true);
        helpers.read('_sample.json', (error, response) => {
          should.not.exist(error);
          JSON.parse(response).should.eql([]);
          done();
        });
      });
    });
    it('should return an error if the array contains null as the first argument', (done) => {
      helpers.convert([null, 'test'], '_sample.json', (err, res) => {
        should.exist(err);
        should.not.exist(res);
        helpers.read('_sample.json', (error, response) => {
          should.exist(error);
          should.not.exist(response);
          done();
        });
      });
    });
    it('should return an error if the array contains null as the second argument', (done) => {
      helpers.convert(['test', null], '_sample.json', (err, res) => {
        should.exist(err);
        should.not.exist(res);
        helpers.read('_sample.json', (error, response) => {
          should.exist(error);
          should.not.exist(response);
          done();
        });
      });
    });
    it('should return an error if the array contains undefined as the first argument', (done) => {
      helpers.convert([undefined, 'test'], '_sample.json', (err, res) => {
        should.exist(err);
        should.not.exist(res);
        helpers.read('_sample.json', (error, response) => {
          should.exist(error);
          should.not.exist(response);
          done();
        });
      });
    });
    it('should return an error if the array contains undefined as the second argument', (done) => {
      helpers.convert(['test', undefined], '_sample.json', (err, res) => {
        should.exist(err);
        should.not.exist(res);
        helpers.read('_sample.json', (error, response) => {
          should.exist(error);
          should.not.exist(response);
          done();
        });
      });
    });
    it('should return an error if the array contains false as the first argument', (done) => {
      helpers.convert([false, 'test'], '_sample.json', (err, res) => {
        should.exist(err);
        should.not.exist(res);
        helpers.read('_sample.json', (error, response) => {
          should.exist(error);
          should.not.exist(response);
          done();
        });
      });
    });
    it('should return an error if the array contains false as the second argument', (done) => {
      helpers.convert(['test', false], '_sample.json', (err, res) => {
        should.exist(err);
        should.not.exist(res);
        helpers.read('_sample.json', (error, response) => {
          should.exist(error);
          should.not.exist(response);
          done();
        });
      });
    });
  });

}());
