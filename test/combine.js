(function() {

  'use strict';

  const chai = require('chai');
  const should = chai.should();

  const helpers = require('../index');
  const fixtures = require('./_fixtures');

  describe('combine()', () => {
    it('should combine objects', (done) => {
      helpers.combine(fixtures.combine[0].argument, {}).should.eql(
        fixtures.combine[0].result);
      helpers.combine(fixtures.combine[1].argument, {}).should.eql(
        fixtures.combine[1].result);
      const src = helpers.combine(fixtures.combine[0].argument, {});
      const actual = helpers.combine(fixtures.combine[1].argument, src);
      actual.should.eql(fixtures.combineTotal);
      done();
    });
    it('should return an error if the object is falsely', (done) => {
      helpers.combine(null, {}).should.eql('obj cannot be falsely');
      helpers.combine(undefined, {}).should.eql('obj cannot be falsely');
      helpers.combine(false, {}).should.eql('obj cannot be falsely');
      helpers.combine({}, {}).should.eql('obj cannot be empty');
      done();
    });
    it('should return an error if the object is empty', (done) => {
      helpers.combine({}, {}).should.eql('obj cannot be empty');
      done();
    });
    it('should return an error if the object is not an object', (done) => {
      helpers.combine('test', {}).should.eql('obj must be an object');
      helpers.combine(1, {}).should.eql('obj must be an object');
      helpers.combine([], {}).should.eql('obj must be an object');
      done();
    });
  });

}());
