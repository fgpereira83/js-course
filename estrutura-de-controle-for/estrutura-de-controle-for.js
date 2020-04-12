for (var i=0; i<5;i++){
	console.log('i',i);
}


var s='Algaworks';

for(var k=0,tamanho=s.length;k<tamanho;k++){
	console.log('k',k);
}

for(var j=0; j<s.length;j++){
	console.log('j',j);
}

var l=5;
for (;l<s.length;l++){
	console.log('l',l);
}



var z=0;
for(;z<4;z++){
	console.log('z',z);
}


//loop infinito
var n=0;
for (;;){
	console.log(n++);
	if(n>100){
		break;
	}
}