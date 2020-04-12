var emails=[];

emails[0]='joao@email.com';
emails[1]='maria@email.com';

console.log(emails);

//inserindo no final do array
emails.push('pedro@email.com');
console.log(emails);

//removendo do final do array
var e= emails.pop(); //retorna o item removido
console.log('e',e );
console.log(emails);

//inserindo no inicio do array
emails.unshift('karina@email.com');
console.log(emails);


//removendo do inicio do array
var f= emails.shift(); //retorna o item removido
console.log('f',f );
console.log(emails);
