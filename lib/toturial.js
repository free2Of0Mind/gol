var pice = require('./pices.js')
var victory = "victory"
var notYet = "notyet"
module.exports = toturial

function toturial(pices,ui,chapter){
var enemy = 0;
var task = 0;

for(i=0 ; i < pices.length ; i++){
	if(pices[i].player != 10) enemy++;
	if(pices[i].type == "station") task = 1;
}

switch (chapter){
case 0:
ui.messeges.value = "ok so this is the game of life ceos toutorial. I am now going to attempt and teach you how to play it.first of all this red squre on the screen is your base . looke at it, love it, feel protective over it. now what if i tell you your base is under an unemaginable danger?. to the right you can see the blue  rectangle. thats your enemy and i'v been told he is planing on taking your base away from you!. RELAX GOD DEAM IT! we still have time! the first thing we need to do is give you ALL the power ok? just press next and its done"

break;
case 1:
if(enemy != 0)
	ui.messeges.value="allright so now you are the one how controlles your base. the squeres how are serounded by red are your influens squeres -> this is wher you deploy energy. the gray area's perpus is on a need to know basic, and you DO NOT NEED TO KNOW nothing. so befor thous blue rats execute ther offensive plot we mast send our defensive counterstrike. i desinged too crusiors for you to use, you can see theyr sceches to the left. what you need to do is to draw one of them on your stemp creator (under the menue). then press stemp and crash the blue infidels by deploing it on the red influense zone. COME ON! we have so little time left now...."
else{

	 if(task == 0)
		ui.messeges.value="yess! that will show them wat it means to be diffrent. lets take a moment to look at our too marvelos bases. ah whait, this isent a base at all, its just a turent, you can tell becus of the smaller influens zone and the luck of gray stuff. a turent is like a base only it dos not produse any energy(witch is what you used to deploy that cruzer). so if you want to use it you will need to build a station about half way betwin it and your base so you can use your base's energy at the turent. go ahed and do it now."
	else{
		ui.messeges.value="allright, hopfully everithing worked out well and everithing is connected, you might notice some more gray on the screen. that is your building zone in witch you can build stuff like a turent or a station. just to make sure you get it, stationtrannsfer your energy and strech your building erea while turents let you deplow energy in the form of vicios stemps and base's provides the energy for the whole oporation. as you cant build a new base the only way to get energy floing faster is to take somone else's base. now you need to be cerfull becuse you have just started a war, i think ther are more blue fucks below you and they seem to be getting ready for real this time. press next and we will see how real battle take place."


 	return victory
	}

}

break
case 2:
	if(enemy != 0)
		ui.messeges.value="ok, so if you scroll down a bit you could see the enemy seting up theyr pathetic defenses. your orders remain the same -> destroy. you allready have some weponse but you will need to learn how to use them better. first of all if you want your cruzer moving in a diffrent direction (wich you do) you will need to press the 90* button to rotate it. secondly you can use a more powerfull tool then the cruzer. i draw the 'CEOTIC PATTERN OF DOOM' on the left for you, just becuse i like you. it woled be pritty silly and anoing to undraw the cruzer so just press the '2' button. this will let you draw a new stamp while still saving your cruzer at the '1' thing. now you know all you need to know, go ahed and do as i commanded you."

	else{
		ui.messeges.value="wow, that was pritty unexpected ha? good job ther! i bet that by now you started to wonder what make things act the way they do around hear, well, dont look at me i'm just the toturial guy. google 'conway's game of life' and wiki will explain everithing. i hope i'l get atound making jonny make it a fully fanctioning multy player game so you can actually play it. thenx for playng!"
	return victory
	}

}
return notYet
}
