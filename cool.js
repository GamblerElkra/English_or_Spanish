//for loop -> neg codiig olon olon dahin ashiglahad
//for(hedees_ehleh; hed_hurtel, nemegdeh/hasagdah){}
for(var i=10; i>=1;i--){
	console.log(i+' B.A.T');
}
for(var i=1; i<=20;i++){
	if(i%2==0){
		console.log('tegsh'+i)
	}else{
		console.log('sondgoi'+i)
	}
}
for(var i=10; i>=1;i--){
	console.log(i+' B.A.T');
}
for(var i=1; i<=100;i++){
	if(i%3==0 && i%5==0){
		console.log(i)
	}
}
var too=8;
for(var i=1; i<=10;i++){
	console.log(too+"X"+i+'='+i*too);
}
var niilber = 0;
for(var i=1; i<=10; i++){
	niilber = niilber+i;
}
console.log(niilber)
var urjiver = 1;
for(var i=1; i<=10; i++){
	urjiver = urjiver*i;
}
console.log(urjiver );
for(var i=1; i<=3; i++){
	var random = Math.floor(Math.random()*10)+1;
	console.log(random);
	var too1 = +prompt('1-10 hoorond too taana uu');
	if(too1==random && i==1){
		alert('Excellent. First try');
		break;
	}else if(too1==random && i==2){
		alert('Good. Second try');
		break;
	}else if(too1==random && i==3){
		alert('Not bat. Third try')
		break;
	}else if(too1>random && 0<too1 && 11>too1){
		alert('Buruu taalaa. Too high');
	}else if(too1<random && 0<too1 && 11>too1){
		alert('Buruu taalaa. Too low');
	}else if(too1<0){
		alert('Mehh');
	}else if(too1>=11){
		alert('Nahh');
	}else if(too1==""){
		alert('Pak u')
	}
	if(i==3){
		alert('Defeat')
	}
}