var T = require('../');
var time = new T();
  
setInterval(tick, 500);

function tick(){
  console.log(time.sinceBegin())  
};
