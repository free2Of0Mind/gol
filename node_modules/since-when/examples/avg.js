var Time = require('../');
var time = new Time();
var t2 = new Time();

// this function outputs the average interval of calls
// which should normalize to 10 ms over time
// it also takes into account how long it takes
// to compute the average

var averages = function(){

  var i = Math.random() * 20

  var t = t2.sinceLast()
    , avg = time.avg()
    , dur = t2.sinceLast()[1] / 1e6
  ;
  
  console.log(avg / 1e6)
  
  var t = setTimeout(averages, i - Math.ceil(dur))

};

averages()
