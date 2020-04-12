var Estado = (function(){

	function Estado(){
		this.comboEstado = $('#combo-estado');
	}

	Estado.prototype.iniciar=function(){
	//	console.log('this prototype', this);
		$.ajax({	url:'http://localhost:8080/estados',
							method:'GET',
							dataType:'jsonp',
							success:onEstadosRetornados.bind(this),
							error: onError
						});
	}


	function onEstadosRetornados(estados){
	//console.log('this',this);
	this.comboEstado.html('<option>Selecione um estado</option>');
	estados.forEach(function(estado){
		//console.log('this no forEach', this);
		var optionEstado= $('<option>').val(estado.uf).text(estado.nome);
		this.comboEstado.append(optionEstado);
	}.bind(this));

	}

	function onError(){
	alert('erro carregando estados do servidor.');
	}

	return Estado;
})();

$(function(){
	var estado= new Estado();
	estado.iniciar();

});


