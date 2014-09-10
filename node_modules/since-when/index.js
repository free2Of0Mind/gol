var ms2s = 1.0 / 1000.0;
var ns2ms = 1.0 / 1000000.0
var ns2s = 1e-9

module.exports = T

function T(){
	if(!process.hrtime){ // browser fill

		process.hrtime = function(){

			if(arguments.length){
				arguments[1] = new Date().getTime();
				arguments[0] =  arguments[1] - millies(arguments[0])
			}

			else {
				arguments[0] = new Date().getTime();
			}
			
			return [parseInt(arguments[0] * ms2s), parseInt(((arguments[0] * ms2s) % 1) / ns2s)];
			
		}
	}
  if(!(this instanceof T)) return new T();
  var self = this;
  self.start = self.last = self.beat = process.hrtime();
  self.x = []
  self.end = []
  self.beats =  []
  self.averageSetSize = 333
  self.threshold = 1e6 // 10,000,000 ns ( 10 ms )
  self.skip = false
};

T.prototype.sinceBegin = function(){
  return process.hrtime(this.start)
};

T.prototype.sinceLast = function(){
  this.x = process.hrtime(this.last)
  this.last = process.hrtime()
  return this.x
}

T.prototype.sinceLastNS = function(){
  return nanos(this.sinceLast())
};

T.prototype.sinceBeginNS = function(){
  return nanos(this.sinceBegin())
};

T.prototype.avg = function(){
  var ns = nanos(this.sinceLast())
  this.beats.push(ns);
  this.beats = this.beats.splice(-this.averageSetSize)
  return avg(this.beats);
};

T.prototype.everyS = function(s, fn, go){
	this.every(s * 1e9, fn, go)
}

T.prototype.every = function(ns, fn, go){

  var self = new T();
  var timer = new T();

  var inter = ns || 0
    , fn = fn || function(t,c){c()}
    ;   
      
  function tick(){

    var ns = nanos(self.sinceLast());
    self.beats.push(ns);
    loop()

  };

  function loop(){
    var d = inter - (nanos(process.hrtime()) - nanos(self.beat));

    if(d < 10000) {
      tock()
    }

    else if(self.skip) {
     setImmediate(loop)
    }

    else if(d < self.threshold) {
      // under the threshold, its nextTicks until the interval is up
      self.skip = true; setImmediate(loop) 
    }

    else {
      if(false || self.beats.length > 9) {
	var r = self.beats.length / self.averageSetSize;
        self.threshold = avg(self.beats) * .45 * r * 2
      }

      // for future reference:
      // console.log(avg(self.beats), self.beats.length, 'threshold = ' + self.threshold)

      self.skip = false; 
      setTimeout(loop, self.threshold / 1e6)
    }
  };

  function tock(){
    self.beat = process.hrtime();
    self.skip = false;
    fn(tick, nanos(timer.sinceLast()))
  };
  
  if(go) tock()

  else loop()

}

function millies(arr){
	return (arr[0] * 1e3) + (arr[1] * ns2ms)
}

function nanos(arr){
  return arr[0] * 1e9 + arr[1]
}

function add(a, b){
  var ns = a[1] + b[1];
  b[0] += a[0];
  b[1] = ns % 1e9;
  if(ns !== b[1]) b[0]++;
  return b
};

function avg(){

  return Array.prototype.slice.call(arguments[0]).reduce(function(a,i){return a += i },0) / arguments[0].length

}
