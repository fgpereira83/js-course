var joao={
	nome:'João',
	idade: 25,
	email:'teste@email.com',
	igualA:function(obj){
		return this.email === obj.email; //this- definindo escopo dentro do objeto

	}
};

var maria={
	nome:'Maria',
	idade: 27,
	email:'teste@email.com',
	igualA:function(obj){
		return this.email === obj.email; //this- definindo escopo dentro do objeto

	}
}

console.log('JOão e Maria tem os mesmos e-mails ?',joao.igualA(maria));