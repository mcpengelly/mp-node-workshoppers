var net = require('net');
var port = Number(process.argv[2]);

//create sever and write the current date
net.createServer(function(socket){
	var date = new Date();
	//construct date object
	socket.end(
		zeroFill(date.getFullYear()) + '-' +
		zeroFill(date.getMonth() + 1) + '-' + // month is 0 indexed so add 1
		zeroFill(date.getDate()) + ' ' +
		zeroFill(date.getHours()) + ':' +
		zeroFill(date.getMinutes() + '\n'));
}).listen(port);


//fill in 0's whenever the value returned is < 10
function zeroFill (i) {
	if (i < 10){
		return '0' + i;
	} else {
		return '' + i;
	}
}
