const parser = require('./');
const arr = [
  'https://foo.bar?some=params&over=here',
  'https://foo.bar?some=test'
];
const file = '_sample.json';

parser.convert(arr, file, (err, res) => {
  if (!err) console.log('success!');
});
