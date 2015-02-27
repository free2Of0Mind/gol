module.exports.stemp = dStemp
module.exports.building = dBuilding
var energyzer = require ('energyzer.js')


/*
this is the module that draw the huvering stemp on the mouse canvas
(hopfully)
it runs on.mousmove.
and draw itb on the mous canvas.
*/
var ex,ey;
var rgba = require('./rgba.js')
var sx=0,sy=0;
//saved x and y..
 function dStemp (dMouse,h,w,ePoint,scrool,lifeSize,stamp){


dMouse.fillStyle = rgba(200,200,200,0.5);
ex = ePoint.x;
ey = ePoint.y; 

ex = workebize(ex,scrool.left,scrool.right,lifeSize,w)// locate the mouse spot on the canvas.
ey = workebize(ey,scrool.top,scrool.bottom,lifeSize,h)
/*
ex = ePoint.x + window.scrollX;
ex -= ex % lifeSize;

ey = ePoint.y + window.scrollY;
ey -= ey % lifeSize;
*/


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
/*
and this one just draw a building-like rect
*/
function dBuilding  (dMouse,h,w,ePoint,scrool,lifeSize,action){
dMouse.fillStyle = rgba(200,200,200,0.5);
console.log("!");
ex = ePoint.x;
ey = ePoint.y;
ex = workebize(ex,scrool.left,scrool.right,lifeSize,w)// locate the mouse spot on the canvas.
ey = workebize(ey,scrool.top,scrool.bottom,lifeSize,h)



if(sx != ex || sy != ey){ // no need to do anithing if we are on the same sqwer
//we are all ready to run throw the stamp array
sx = ex
sy = ey

dMouse.clearRect(0,0,h,w);

dMouse.fillRect(ex + lifeSize / 4 , ey + lifeSize / 4, lifeSize / 2 , lifeSize / 2)

}
}

function workebize (ex,cx1,cx2,lifestyle,reff){
var first = (ex-cx1)/(cx2-cx1)*reff;
return first -= first%lifestyle;
}


