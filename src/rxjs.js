/*
 * @Author: kael 
 * @Date: 2018-03-10 10:39:25 
 * @Last Modified by: kael
 * @Last Modified time: 2018-03-10 11:54:05
 */

const fs = require('fs');
const { forkJoin, bindNodeCallback } = require('rxjs');

const readFile = bindNodeCallback(fs.readFile);

module.exports = function(cb) {
  let A = readFile('../data/A.txt');
  let B = readFile('../data/B.txt');
  
  forkJoin([A, B])
    .subscribe(([A, B]) => {
      cb(parseInt(A, 10) + parseInt(B, 10));
    });
};