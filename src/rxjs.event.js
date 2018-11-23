const Rx = require('rxjs');
const Op = require('rxjs/operators');
const EventEmitter = require('events');

let events = new EventEmitter();
let source = Rx.fromEvent(events, 'data');

source
  .pipe(Op.bufferCount(2))
  .pipe(Op.groupBy(event => event.type))
  .subscribe((groupedObservable) => {
    groupedObservable.subscribe(val => {
      console.log(groupedObservable.key, val);
    });
  });

events.emit('data', { 'type': 1, msg: 'Test 1' });
events.emit('data', { 'type': 1, msg: 'Test 2' });
events.emit('data', { 'type': 1, msg: 'Test 3' });
events.emit('data', { 'type': 5, msg: 'Test 3' });
