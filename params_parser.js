function parse(req){

	var parametros = [];
		
	if(req.url.indexOf("?") >0 ){
		var parametros_total = req.url.split("?");
		var parametros = parametros_total[1];
		var parametro = parametros.split("=");
		parametro = parametro[1];
		console.log(parametro);
	}
	return parametro;
}

module.exports.parse = parse;