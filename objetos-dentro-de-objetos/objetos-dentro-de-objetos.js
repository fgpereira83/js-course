var joao={
	nome:'João',
	idade:25,
	endereco: {	
		logradouro: 'Av Brasil',
		numero:100,
		complemento: 'Apto 202',
		cidade:'Rio de Janeiro',
		estado: 'RJ'
	}
}

console.log(joao);


console.log('cidade que o joao mora ', joao.endereco.cidade);
console.log('cidade que o joao mora ', joao['endereco']['cidade']);


joao.endereco.numero=101;

console.log(joao);


console.log(joao.endereco.cep);

console.log('estado que o joao mora ', joao['endereco']['estado']);
