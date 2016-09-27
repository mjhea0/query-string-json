(function() {

  'use strict';

  const chai = require('chai');
  const should = chai.should();
  const fs = require('fs');
  const path = require('path');

  const helpers = require('../index');
  const file = path.join(__dirname, '..', '_sample.json');
  const testArray = [
    'https://foo.bar?some=params&over=here',
    'http://example.com/products/women?category=dresses&color=green',
    'http://example.com/shop/index.php?product_id=32&highlight=green+dress&cat_id=1&sessionid=123&affid=431'
  ];
  const expected = [
    {
      some: [ 'params' ],
      over: [ 'here' ]
    },
    {
      category: [ 'dresses' ],
      color: [ 'green' ]
    },
    {
      product_id: [ '32' ],
      highlight: [ 'green+dress' ],
      cat_id: [ '1' ],
      sessionid: [ '123' ],
      affid: [ '431' ]
    }
  ];

  describe('main()', () => {
    beforeEach((done) => {
      fs.stat(file, (err, stats) => {
        if (!err) fs.unlinkSync(file);
        done();
      });
    });
    it('should create JSON file', (done) => {
      helpers.convert(testArray, '_sample.json', (error, success) => {
        should.not.exist(error);
        success.should.eql(true);
        helpers.read('_sample.json', (err, res) => {
          should.not.exist(err);
          JSON.parse(res).should.eql(expected);
          done();
        });
      });
    });
  });

}());
