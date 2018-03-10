/*
 * @Author: kael 
 * @Date: 2018-03-10 09:56:50 
 * @Last Modified by: kael
 * @Last Modified time: 2018-03-10 11:50:13
 */

const callback = require('./callback');
const generator = require('./generator');
const promise = require('./promise');
const rxjs = require('./rxjs');

module.exports = {
  callback: callback(result => console.log('callback result:', result)),
  generator: generator(result => console.log('generator result:', result)),
  promise: promise(result => console.log('promise result:', result)),
  rxjs: rxjs(result => console.log('rxjs result:', result)),
};
