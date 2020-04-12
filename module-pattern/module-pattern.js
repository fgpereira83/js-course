var contador= (function(){
	var valor=0; //privado

	var incrementar =function(){
		valor++;
	}
	var reset =function(){
		console.log('valor do contador',valor);
		valor=0;
	}

	return { // publico
			incrementar: incrementar,
		    reset: reset
			}
})();

contador.incrementar();
contador.incrementar();
contador.reset();



