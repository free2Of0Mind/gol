var color = require('./playercaller.js');
var x1,y1,x2,y2
module.exports = function(drawL,h,w,pices,playerT,lifeSize){
drawL.clearRect(0,0,h,w);

drawL.lineWidth = 1

drawL.strokeStyle = color(playerT,1)
drawL.lineCup = "round";
drawL.beginPath();


for(i=0;i<pices.length;i++){

	if(pices[i].player == playerT){
		for(j=0;j<pices.length;j++){
			if(playerT == pices[j].player && pices[i].isInBuildRang(pices[j].x,pices[j].y)){
				x1 = pices[i].x * lifeSize + lifeSize/2
				y1 =pices[i].y * lifeSize + lifeSize/2
				x2 =pices[j].x * lifeSize  + lifeSize/2
				y2 =pices[j].y * lifeSize + lifeSize/2
				drawL.moveTo(x1,y1);
				drawL.lineTo(x2,y2);	
				
			}			
		}
	}
}
drawL.stroke();
}
