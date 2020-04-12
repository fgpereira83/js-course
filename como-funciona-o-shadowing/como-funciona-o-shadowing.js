
var volks={
	fabricante:'VW'
}


var fox={
	nome:'Fox',
	placa:'AAA-1111',
	fabricante:'GM'
};


var gol={
	nome:'Gol',
	placa:'AAA-2222'
}

console.log('fox.fabricante',fox.fabricante);
Object.setPrototypeOf(fox, volks);
console.log('fox.fabricante->',fox.fabricante);
console.log('fox',fox);

delete fox.fabricante;
console.log('fox.fabricante->>',fox.fabricante);//'VW'
console.log('fox->>',fox);


// navega em todas a propriedades inclusive de seus prototipos
for(propriedade in fox){
	console.log(propriedade, fox.hasOwnProperty(propriedade));
}

