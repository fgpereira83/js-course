var fox={
	cor:'prata',
	modelo:'fox',
	marca:'vw'
};

console.log(fox);
console.log(typeof fox);

console.log('cor do fox', fox.cor);
//pintando o fox
fox.cor='branco';
console.log('fox depois de pintado', fox);

console.log(fox['modelo']); //muito utilizado em forma dinamicas


//adicionando uma propriedade apos de criado
fox.peso=1100;

console.log(fox);

console.log('Potência' ,fox.potencia);

fox.ligar=function(){
	console.log('ligando o fox');
}

console.log(fox);

fox.ligar();


var celta={
	cor:'branco',
	modelo:'celta',
	marca:'GM',
	ligar:function(){
		console.log('ligando o celta');
	}
}

console.log(celta);
celta.ligar();