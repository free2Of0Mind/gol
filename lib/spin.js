module.exports = spin

function spin(stemp){
var tempArry = new Array();
var n = 0
for(i = 0; i < stemp.shape[0] ; i ++){

	for(j = 0 ; j < stemp.shape[1] ; j ++){
		tempArry[n] = stemp.get(i,j)		
		n++
	}

}
n = 0
for(i = stemp.shape[0]-1 ; i > -1 ; i --){

	for(j = 0 ; j < stemp.shape[1]  ; j ++){
		stemp.set(j,i,tempArry[n])//silly dibbaging		
		n ++
	}
}
}
