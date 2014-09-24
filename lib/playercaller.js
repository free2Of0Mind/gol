var rgba = require('./rgba.js')
var a,b,c,x,y,z,l;

module.exports = swich

function swich (player,ain){ 

  switch(player){
     case 0:
	 return x || (x = rgba(255,255,255,ain))	
	break;

    case 1:
	return l || (l = rgba(100,100,100,ain))

    case 10:
	return y || ( y = rgba(255,0,0,ain) )
    break;
    
    case 20:
	return z || (   z = rgba(0,0,255,ain) )
    break;
        
    case 30:     
      return a || (a = rgba(40,150,150,ain)) 
    break;

    case 40:
      return b || (b = rgba(200,40,100,ain) )
    break;

    default:
      return c || (c = rgba(0,0,0,ain)) 

  }

}
