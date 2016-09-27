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
  });

}());
