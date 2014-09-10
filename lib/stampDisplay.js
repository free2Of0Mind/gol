/*
this is the module that draw the huvering stemp on the mouse canvas
(hopfully)
*/
var rgba = require('./rgba.js')
var sx=0,sy=0;
//saved x and y..
module.exports= function(dMouse,h,w,ePoint,lifeSize,stamp){


dMouse.fillStyle = rgba(200,200,200,0.5);

var ex,ey;
ex = ePoint.x + window.scrollX;
ex -= ex % lifeSize;

ey = ePoint.y + window.scrollY;
ey -= ey % lifeSize;
if(sx != ex || sy != ey){
//we are all ready to run throw the stamp array
sx = ex
sy = ey

dMouse.clearRect(0,0,h,w);

for(i = 0 ; i < stamp.shape[0];i++){
	for(j = 0 ; j < stamp.shape[1]; j ++ ){

		if(stamp.get(i,j) == 0 ){
		
			dMouse.fillRect((ex + lifeSize * i) , (ey + lifeSize * j) ,lifeSize,lifeSize)


		}

	}
}
}
}
