var T = require('../');
var time = new T();
  
setInterval(tick, 0);

function tick(){
  console.log(time.sinceLast())  
};



