var net = require('net');

var port = 3000;

var randomArr = ["Yes", "No", "Maybe"];

var server = net.createServer(function(c){

  c.write("Ask me a question!\r\n");

  c.on('data', function(data){
    var input = data.toString().trim();

if (input){
  c.write(randomArr[(Math.floor((Math.random() * randomArr.length)))]);
} 
})
});

server.listen(port, function(){
    console.log('listening on ' + port);
});