
var volks={
	fabricante:'VW'
}


var fox={
	nome:'Fox',
	placa:'AAA-1111'
};


var gol={
	nome:'Gol',
	placa:'AAA-2222'
}

console.log(fox);
console.log(gol);


console.log(Object.getPrototypeOf(fox)===Object.getPrototypeOf(gol));


console.log(fox.fabricante);

//1 forma de setar o prototype
Object.setPrototypeOf(fox, volks);
console.log('->',fox.fabricante);

Object.setPrototypeOf(gol,volks);
console.log('->',gol.fabricante);

//2 forma de setar o prototype
var fusca=Object.create(volks);
fusca.nome='Fusca';
fusca.placa='AAA-3333';


console.log('fusca ->',fusca.fabricante);

//3 forma de setar o prototype
var parati={
	nome:'Parati',
	placa:'AAA-4444',
	__proto__:volks
}

console.log(parati.fabricante);