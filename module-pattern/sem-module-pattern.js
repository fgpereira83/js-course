var contador={
	valor:0,
	incrementar: function(){
		this.valor++;
	},
	reset:function(){
		console.log('valor do contador', this.valor);
		this.valor=0;
	}
}


contador.incrementar();
contador.incrementar();
contador.reset();

contador.incrementar();
contador.reset();