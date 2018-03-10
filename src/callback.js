/*
 * @Author: kael 
 * @Date: 2018-03-10 09:52:18 
 * @Last Modified by: kael
 * @Last Modified time: 2018-03-10 11:50:59
 */

const fs = require('fs');

module.exports = function(cb) {
  fs.readFile('../data/A.txt', function(err, A) {
    if (err) throw err;
    fs.readFile('../data/B.txt', function(err, B) {
      if (err) throw err;
      cb(parseInt(A, 10) + parseInt(B, 10));
    });
  });
};