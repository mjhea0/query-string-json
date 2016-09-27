(function() {

  'use strict';

  const chai = require('chai');
  const should = chai.should();

  const helpers = require('../index');

  describe('parse()', () => {
    it('should extract query string from url', (done) => {
      const actual = helpers.parse('https://foo.bar?some=params&over=here');
      actual.should.contain.keys('some', 'over');
      actual.some.should.eql([ 'params' ]);
      actual.over.should.eql([ 'here' ]);
      done();
    });
    it('should handle strings not containing a query string', (done) => {
      helpers.parse('https://foo.bar?some').should.eql({some: null});
      const actual = helpers.parse('https://foo.bar?some&over');
      actual.should.contain.keys('some', 'over');
      should.not.exist(actual.some);
      should.not.exist(actual.over);
      done();
    });
    it('should handle strings containing invalid values', (done) => {
      helpers.parse(null).should.eql(false);
      helpers.parse(undefined).should.eql(false);
      done();
    });
    it('should handle strings without values', (done) => {
      const testOne = helpers.parse('https://foo.bar?some&over=here');
      testOne.should.eql({ some: null, over: [ 'here' ] });
      const testTwo = helpers.parse('https://foo.bar?some=params&over');
      testTwo.should.eql({ some: [ 'params' ], over: null });
      helpers.parse('https://foo.bar?').should.eql(false);
      helpers.parse('https://foo.bar').should.eql(false);
      helpers.parse('https://foo.bar/').should.eql(false);
      helpers.parse('').should.eql(false);
      done();
    });
    it('should handle `+` strings correctly', (done) => {
      const actual = helpers.parse('https://foo.bar?over=here++');
      actual.should.eql({ over: [ 'here++' ] });
      done();
    });
    it('should handle `=` strings correctly', (done) => {
      const actual = helpers.parse('https://foo.bar?over=here==');
      actual.should.eql({ over: [ 'here==' ] });
      done();
    });
    it('should handle multiple of the same key', (done) => {
      const actual = helpers.parse('https://foo.bar?some=params&some=here');
      actual.should.eql({ some: [ 'params', 'here' ] });
      done();
    });
  });

}());
