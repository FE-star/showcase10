/*
 * @Author: kael 
 * @Date: 2018-03-10 10:06:24 
 * @Last Modified by: kael
 * @Last Modified time: 2018-03-10 11:50:52
 */

const fs = require('fs');

function* files() {
  yield '../data/A.txt';
  yield '../data/B.txt';
}

function iterator(files, results, cb) {
  let file = files.next();
  if (file.done) return cb(results);
  fs.readFile(file.value, function(err, data) {
    results.push(data);
    iterator(files, results, cb);
  });
}

module.exports = function(cb) {
  iterator(files(), [], function (data) {
    let [A, B] = data;
    cb(parseInt(A, 10) + parseInt(B, 10));
  });
};