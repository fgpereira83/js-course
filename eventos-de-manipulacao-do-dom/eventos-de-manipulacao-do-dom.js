$(function(){

	$('#botao1').on('click',function(e){
		console.log('botao 1 clicado');

	});

	$('#link1').on('click', function(e){
		e.preventDefault(); //evita o comportamento default do link
		console.log('link1 clicado')
	});


	$('#input1').on('keyup',function(e){
		console.log(e.keyCode);
		if(e.keyCode ===13){
			alert('tecla enter pressionada');
		}
	});
});