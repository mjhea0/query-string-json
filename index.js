(function() {

  'use strict';

  const fs = require('fs');

  function convert(arr, file, callback) {
    const data = {};
    const final = arr.map((url) => {
      const obj = parse(url);
      return combine(obj, data);
    });
    write(file, JSON.stringify(final), (error) => {
      if (error) callback(error);
      callback(null, true);
    });
  }

  // *** helpers *** //

  function parse(url) {
    if (typeof url !== 'string') return false;
    if (url.indexOf('?') === -1) return false;
    const params = url.slice(url.indexOf('?') + 1).split('&');
    if (params.length < 1 || params[0] === '') return false;
    return params.reduce((result, value, index) => {
      const hash = value.split(/=(.+)?/);
      if (!Object.keys(result).length) {
        return updateObject(hash, result);
      } else {
        for (let key in result) {
          if (result.hasOwnProperty(hash[0])) {
            result[hash[0]] = result[hash[0]].concat(hash[1]);
          } else {
            return updateObject(hash, result);
          }
        }
        return result;
      }
    }, {});
  }

  function updateObject(hash, obj) {
    if (hash.length === 1) obj[hash[0]] = null;
    else obj[hash[0]] = [hash[1]];
    return obj;
  }

  function combine(obj, src, callback) {
    if (!obj) return 'obj cannot be falsely';
    if (obj !== Object(obj) || Array.isArray(obj)) return 'obj must be an object';
    if (!Object.keys(obj).length) return 'obj cannot be empty';
    for (let key in src) {
      if (src.hasOwnProperty(key)) {
        obj[key] = obj[key].concat(src[key][0]);
      }
    }
    return obj;
  }

  function read(name, callback) {
    fs.readFile(name, 'utf8', (err, data) => {
      if (err) callback(err);
      callback(null, data);
    });
  }

  function write(name, data, callback) {
    fs.writeFile(name, data, (err) => {
      if(err) callback(err);
      callback(null, true);
    });
  }

  module.exports = {
    convert,
    parse,
    combine,
    write,
    read
  };

}());
