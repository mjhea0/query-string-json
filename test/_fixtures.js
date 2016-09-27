const combine = [
  {
    argument: {
      some: [ 'params' ],
      over: [ 'here' ]
    },
    result: {
      some: [ 'params' ],
      over: [ 'here' ]
    }
  },
  {
    argument: {
      some: [ 'params' ],
      over: [ 'here' ],
      my: 'time'
    },
    result: {
      my: 'time',
      some: [ 'params' ],
      over: [ 'here' ]
    }
  }
];

const combineTotal = {
  some: [ 'params', 'params' ],
  over: [ 'here', 'here' ],
  my: 'time'
};

const convert = {
  arr: [
    'https://foo.bar?some=params&over=here',
    'http://example.com/products/women?category=dresses&color=green',
    'http://example.com/shop/index.php?product_id=32&highlight=green+dress&cat_id=1&sessionid=123&affid=431'
  ],
  expected: [
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
  ]
};

module.exports = {
  combine,
  combineTotal,
  convert
};
