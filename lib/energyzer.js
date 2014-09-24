var tools = require('./pices.js')

module.exports = function(pices,P,x,y,cost,act){
var buyers = new Array();
var conected = new Array();
var atTest = new Array();
var returns = new Array();
 returns[1] = new Array();
var bacecount = 0 
var T=new Array()
var tik=0


for(pi = 0; pi < pices.length ; pi ++){      
	if(pices[pi].player === P){
		atTest.push(pices[pi])      //////////// all of the players pices are at test
		if(pices[pi].type === "base"){

			conected[bacecount]=pices[pi]//every bace  gets an arry
			conected[bacecount].tree = new Array(pices[pi])
			bacecount++
		}
		else
			returns[1].push(pices[pi])

	}
	else
		returns[1].push(pices[pi])
}

for(root = 0 ; root<conected.length; root ++){         //// run on all of the baces
  for(branch = 0 ; branch < conected[root].tree.length ; branch ++){///run on branches	
	
    for(pi = 0 ; pi < atTest.length ; pi ++){
     if(conected[root].tree[branch].isInBuildRang(atTest[pi].x,atTest[pi].y)){
	conected[root].tree.push(atTest.splice(pi,1)[0])	/// conect new branches 
	pi -- 	
     }	
    }
  }
  switch(act){
	
	case "build":
	if(tools.ICanBuild(x,y,P,conected[root].tree))
		buyers.push(conected[root])	/////chek if the tree can build at xy	
	else
		returns[1].push(conected[root])
	break;					//// then add the root to the buyers
	case "spun":
	if(tools.ICanPlay(x,y,P,conected[root].tree))
		buyers.push(conected[root])//////chek if the tree can spun at x y
	else
		returns[1].push(conected[root])
  }						///// then add the root to the buyers
}
var total = 0
var onMe = 0 
var topBit = 0

if(buyers.length > 0){
for(bit = 0 ; bit < buyers.length ; bit ++){
	total = total + buyers[bit].energy//// cheak all of the conected baces total	
	if(topBit < buyers[bit].energy){	/// amount of energy. and wich have the most
		onMe = bit
		topBit = buyers[bit].energy
	}
}

  

if(total > cost){ /////   cheak if all of them have enugh
	if(buyers[onMe].energy >= cost){////chek if one can buy it all
		buyers[onMe].energy = buyers[onMe].energy - cost
	}
	else{
		
		var lop = cost + 1
		while(cost > 0 || lop > 0){///// if not, they all sher equly. -this isnt ideal-
			for(cycle = 0 ; cycle < buyers.length ; cycle ++){
				if(buyers[cycle].energy > 0 && cost > 0){
					cost --
					buyers[cycle].energy --
				}
			}
			lop -- ///// jast pranoid about whiles....
		}
		if(lop < 1)
			console.log("arr in the while of the energyzer")
	}

	returns[0] = true   //// if they have enugh energy
}
else	returns[0]= false
}
else
	returns[0] = false	//// if not...


for(bac = 0 ; bac < buyers.length ; bac ++)
	returns[1].push(buyers[bac])   //////// returns the changd buyers to the pices stuk
return returns  /// and sendem home

}



