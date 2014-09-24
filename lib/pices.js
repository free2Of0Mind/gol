module.exports.set = pice
module.exports.ICanPlay = ICanPlay
module.exports.ICanBuild = ICanBuild
var rgba = require('./rgba.js')
var color = require('./playercaller.js')
var ides = 0

function ICanBuild(x,y,player,allPices){
  for(rr=0;rr<allPices.length;rr++){
    if((allPices[rr].player === player) && allPices[rr].isInBuildRang(x,y)){
      return true
    }
  }
}

function ICanPlay(x,y,player,allPices){
	for(z=0;z<allPices.length;z++){
		if((allPices[z].player === player) && allPices[z].isInRang(x,y)){
			return true
    }
  }
}

function pice(type,x,y,player){
  this.x = x;
  this.y = y;
  this.player = player;
  this.energy = 0 ;
  this.type = type
  this.mark = mark;
  this.markB = markB;
  this.isInRang = isInRang;
  this.capture = capture;
  this.isInBuildRang = isInBuildRang;
  switch(type){
    case "base" : this.influens = 5 ; this.buildRang = 15;
     break;
    case "station": this.influens = 0 ; this.buildRang = 15;
     break;
    case "turent": this.influens = 3 ; this.buildRang = 0;
     break;
    case "fort": this.influens = 7 ;this.buildRang = 0;
     break;
  }
 
  function isInRang(x,y){
    if((Math.abs(this.x-x)+Math.abs(this.y-y)) <= this.influens) return true
	}
  
  function isInBuildRang(x,y){
    if((Math.abs(this.x-x)+Math.abs(this.y-y)) <= this.buildRang) return true
	}




  function capture(next){
    var it = next.get(this.x,this.y) 
    if(it != 100 && it != this.player){
      this.player = next.get(this.x,this.y)
      this.energy = 0
    }
  }
  
  function markB(P,lifeSize,draw){
    if(P === this.player){
      draw.strokeStyle = color(1,1)
      var dub = 0
      var swich = 0
      for(c = -this.buildRang; c <= this.buildRang ; c++){
        for(d = dub; d>=-dub;d--){
          draw.strokeRect((this.x+c)*lifeSize , (this.y+d)*lifeSize, lifeSize, lifeSize)
        }
        if(dub === this.buildRang) swich = 1
        if( swich === 0 )	dub++
        else dub --
      }
	}
   }

  function mark(P,lifeSize,draw){
   	draw.fillStyle = color(this.player,1) 
    draw.fillRect ((this.x*lifeSize)+(lifeSize/4),(this.y*lifeSize)+(lifeSize/4),lifeSize/2,lifeSize/2)
  if(P === this.player){

      draw.strokeStyle = color(this.player,1)
      var dub = 0
      var swich = 0
      for(c = this.influens; c >= -this.influens ; c--){
        for(d = dub; d>=-dub;d--){
          draw.strokeRect((this.x+c)*lifeSize , (this.y+d)*lifeSize, lifeSize, lifeSize)
        }
        if(dub === this.influens) swich = 1
        if( swich === 0 )	dub++
        else dub --
      }

    }
  }

}

