/*
 * @Author: kael 
 * @Date: 2018-03-10 10:06:24 
 * @Last Modified by: kael
 * @Last Modified time: 2018-03-10 13:31:18
 */

const fs = require('fs');
const util = require('util');

// promisify callbackify
const readFile = util.promisify(fs.readFile);

module.exports = async function(cb) {
  let A = await readFile('../data/A.txt');
  let B = await readFile('../data/B.txt');
  cb(parseInt(A, 10) + parseInt(B, 10));
};