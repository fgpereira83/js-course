var acessorio ={som:'pioneer', banco:'couro'};

var ligar=function(a){
	console.log('ligando o carro...', a)
}
var fox=['fox', 4,acessorio, ligar];

console.log(fox);

console.log(fox[2].som);

fox[3]('agora');