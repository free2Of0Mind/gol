var time = require('../');

var fib = function(n){
  var t = new time()
  var nacho = 0
    , p1 = 0
    , p2 = 0
    , a = 0;
  while(a <= n){
    nacho = p1 + p2;
    p2 = p1;
    p1 = (a === 1) ? nacho += 1 : nacho
    a++;
  }
  return [nacho, t.sinceBegin()]
};

var f = fib(100)
var ns = f[1][0] * 1e9 + f[1][1]
console.log('calculated answer to be: ' + f[0] + ' in %sns', ns)
