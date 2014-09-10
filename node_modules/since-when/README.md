##since-when?##

General purpose timing functions that use process.hrtime()
Now with process.hrtime shim for working in browsers with [browserify](https://github.com/substack/node-browserify) (which shims process itself).

__Method Overview__
* time.sinceBegin - call to get time since time was constructed
* time.sinceLast - call to get time since last call
* time.every - call a function every interval in nanoseconds
* time.loop // same as above
* time.avg - call to get average interval between all calls to same

```
npm install since-when
```

These timing functions give you more precise readings by using Node's [Process.hrtime()](http://nodejs.org/docs/latest/api/process.html#process_process_hrtime). 
hrtime() returns an array like this:

    [seconds, partial nanoseconds]

where nanoseconds is in __addition__ to seconds, like so:
```js
    var time = process.hrtime()
    var totalNanoSeconds = (time[0] * 1e9) + time[1]
```
Although it returns nanoseconds, it can only really be considered accurate to the millisecond when used in the browser.

If you pass the return value of a previous hrtime() to process.hrtime(lastTime), you are returned a delta array. 

## Example, from examples/fib.js

```js
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
```
    
##METHODS

**Time.sinceBegin()**

Returns an hrtime array [seconds, nanoseconds] of time since new Time() was called

```js
var Time = require('since-when');
var time = new Time();
  
setInterval(tick, 500);

function tick(){
  console.log(time.sinceBegin())  
};
```
**Time.sinceBeginNS()**
same as above, but returns total time in nanoseconds

**Time.sinceLast()**
Returns hrtime array of time since last sinceLast().

```js
var Time = require('since-when');
var time = new Time();

setInterval(tick, 0);

function tick(){
  console.log(time.sinceLast())
};
```
**Time.sinceLastNS()**
same as above, but returns total time in nanoseconds

**Time.loop(nanoseconds, fn, boolean)** ||
**Time.every(...)***
This calls your __fn__ every __nanoseconds__.
The boolean argument decides whether to call yr function immediately,
or wait the __nanoseconds__ first. Defaults to the waiting the interval. 
Your function is called with two arguments, loop[function] and interval[number].
Call __loop()__  to keep the loop going! Don't call it and it stops!
Interval is the actual time since the last cycle, and
should be close to the value __nanoseconds__ you passed.

This method is somewhat optimized. It does a little math, naively, you might say,
to keep polling to a minimum, and not fill Node's event cue
with a million process.nextTick()s.

```js
var Time = require('since-when');
var time = new Time();

// every billion nanoseconds tock()

time.every(1e9, tock);

function tock(tick, interval){
  console.log(interval + ' time in nanoseconds passed')
  tick()
};
```

**Time.avg()**

Call this and it returns the average interval between all such calls.

```js
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
```
