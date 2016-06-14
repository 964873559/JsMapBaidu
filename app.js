var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/',function (req,res) {
	res.sendFile(__dirname + '/index.html');
});

var server = app.listen(2333,function () {
	var host = server.address().address;
	var port = server.address().port;

	console.log('应用实例，访问地址为http://%s:%s',host,port);
});
