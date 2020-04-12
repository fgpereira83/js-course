var nome='AlgaWorks'; //variavel global



var capitalizar=function(){
	//variavel local a funcao capitalizar
	var nome = 'AlgaWorks'.toUpperCase()

}

capitalizar();

console.log('nome',nome); //seria a variavel nome global


var capitalizar2=function(){
	nome='AlgaWorks'.toUpperCase(); //estou mexendo na variavel global
}

capitalizar2();
console.log('nome2',nome); 
