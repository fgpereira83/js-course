$(function(){

	var resposta= $.ajax({	url:'http://localhost:8080/estados',
							method:'GET',
							dataType:'jsonp'
						});

	resposta.done(function(estados){
		var comboEstado = $('#combo-estado');
		//comboEstado.empty();
		comboEstado.html('<option>Selecione um estado</option>');
		estados.forEach(function(estado){
			var optionEstado= $('<option>').val(estado.uf).text(estado.nome);
			comboEstado.append(optionEstado);

		});
	});


	resposta.fail(function(estados){
		alert('erro carregando estados do servidor.');
	});
});