//function declaration
function somar(a,b){
	console.log('arguments->',arguments); // interessante para avaliar eventos - quais sao os argumentos.
	return a+b;
}


//function expression
var subtrair=function(a,b){
	return a-b;
}


var soma= somar(2,3);
console.log('2+3=',soma);

var subtraido=subtrair(6,2);
console.log('6-2=', subtraido);

console.log('typeof subtrair:', typeof subtrair);