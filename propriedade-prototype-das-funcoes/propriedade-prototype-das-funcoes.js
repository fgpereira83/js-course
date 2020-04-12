var Carro = function(nome, placa){
this.nome =nome;
this.placa=placa;
//this.fabricante='VW';	
}

Carro.prototype.fabricante='VW'; //adicionou no object existente na function
Carro.prototype.ligar=function(){
	console.log('ligando o carro', this.nome);
}

var fox = new Carro('Fox','AAA-1111');
console.log('fox', fox);

var gol = new Carro('Gol','AAA-2222');
console.log('gol', gol  );


console.log(Object.getPrototypeOf(fox) === Object.getPrototypeOf(gol) );


console.log(fox.fabricante);
console.log(gol.fabricante);

fox.ligar();
gol.ligar();