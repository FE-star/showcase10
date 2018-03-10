/*
 * @Author: kael 
 * @Date: 2018-03-10 10:39:25 
 * @Last Modified by: kael
 * @Last Modified time: 2018-03-10 11:54:05
 */

const fs = require('fs');
const Rx = require('rxjs');

const readFile = Rx.Observable.bindNodeCallback(fs.readFile);

// let A = Rx.Observable.create((observer) => {
//   fs.readFile('../data/A.txt', (err, data) => {
//     observer.next(data);
//     observer.complete();
//   });
// });

// let B = Rx.Observable.create((observer) => {
//   fs.readFile('../data/B.txt', (err, data) => {
//     observer.next(data);
//     observer.complete();
//   });
// });

module.exports = function(cb) {
  let A = readFile('../data/A.txt');
  let B = readFile('../data/B.txt');

  Rx.Observable
    .forkJoin(A, B)
    .subscribe(([A, B]) => {
      cb(parseInt(A, 10) + parseInt(B, 10));
    });
};