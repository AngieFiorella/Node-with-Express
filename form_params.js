var http = require("http"),
		fs = require("fs"),
		parser = require("./params_parser.js");
console.log(parser);

var p = parser.parse;

http.createServer(function(req, resp){
	if(req.url.indexOf('favicon.ico') > 0){return; }
	//console.log("===========\n\n\n\n\n\n\n\n\n\n\n\n");
	//console.log(req);
	//console.log("===========\n\n\n\n\n\n\n\n\n\n\n\n");
	fs.readFile('./index.html', function(error, html){

  	var parametro = p(req);
		var nombre = "";
		var html_string = html.toString();
		var variables = html_string.match(/[^\{\}]+(?=\})/g);
		for(var i = variables.length - 1; i >= 0; i--){
			var value = eval(variables[i]);
			html_string = html_string.replace('{'+ variables[i]+ '}', parametro);
		}
		resp.writeHead(200, {
 			'Content-Type': 'text/html'
 		});
 		resp.write(html_string);
 		resp.end();
	});
}).listen(8082);