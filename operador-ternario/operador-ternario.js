var temFoto=false;

/*
se tem foto: perfil.jpg
senao mock-perfil.jpg
<img src="pathFoto">
*/

/*
var pathFoto='';

if (temFoto){
	pathFoto='maria-perfil.jpg'
}
else{
	pathFoto='mock-perfil.jpg'
}
console.log('pathFoto' , pathFoto);
*/

var pathFoto= temFoto?'maria-perfil.jpg': 'mock-perfil.jpg';

console.log('pathFoto' , pathFoto);