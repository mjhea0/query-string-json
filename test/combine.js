(function() {

  'use strict';

  const chai = require('chai');
  const should = chai.should();

  const helpers = require('../index');

  describe('combine()', () => {
    it('should combine objects', (done) => {
      const arr = [
        {
          some: [ 'params' ],
          over: [ 'here' ]
        },
        {
          some: [ 'params' ],
          over: [ 'here' ],
          my: 'time'
        }
      ];
      helpers.combine(arr[0], {}).should.eql(
        { some: [ 'params' ], over: [ 'here' ] });
      const src = helpers.combine(arr[0], {});
      const actual = helpers.combine(arr[1], src);
      actual.should.eql(
        {
          some: [ 'params', 'params' ],
          over: [ 'here', 'here' ],
          my: 'time'
        }
      );
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
