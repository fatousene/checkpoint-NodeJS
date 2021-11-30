var  net = require('net');
var strftime = require('strftime');
var port = Number(process.argv[2]);
    //console.log(strftime(' %Y-%m-%d %H:%M'));
var server = net.createServer(function(socket){
    var data = strftime(' %Y-%m-%d %H:%M');
    socket.write(data);
    socket.end();
})
console.log(data);
//server.listen(port);
   