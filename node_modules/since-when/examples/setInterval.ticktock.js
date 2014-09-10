var Time = require('../');
var time = new Time();
var t2 = new Time();
// every billion nanoseconds tock()


setInterval(function(){
  console.log('setInterval is ' +  Math.abs(1e9 - t2.sinceLastNS()) + ' nanoseconds off 1 second mark')
}, 1000)


