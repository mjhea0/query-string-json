# Query String JSON

[![Build Status](https://travis-ci.org/mjhea0/query-string-json.svg?branch=master)](https://travis-ci.org/mjhea0/query-string-json)
[![Coverage Status](https://coveralls.io/repos/github/mjhea0/query-string-json/badge.svg?branch=master)](https://coveralls.io/github/mjhea0/query-string-json?branch=master)

Parse and convert URL query strings to JSON

## Install

```sh
npm install query-string-json
```

## Usage

```javascript
const parser = require('query-string-json');
const arr = [
  'https://foo.bar?some=params&over=here',
  'https://foo.bar?some=test'
];
const file = '_sample.json';

parser.convert(arr, file, (err, res) => {
  if (!err) console.log('success!');
});
```
