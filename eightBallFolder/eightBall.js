var net = require('net');

var port = 3000;

var randomArr = ["Yes", "It is certain", "It is decidely so", "No", "Maybe", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it, yes", "Most likely", "Outlook good", "Signs point to yes"];

var server = net.createServer(function(c){

  c.write("Ask me a question!\r\n");

  c.on('data', function(data){
    var input = data.toString().trim();

if (input){
  c.write(randomArr[(Math.floor((Math.random() * randomArr.length)))]+"\r\n");
} 
})
});

server.listen(port, function(){
    console.log('listening on ' + port);
});