const express = require('express');
var app = express()
var http = require('http').createServer(app);
var io = require('socket.io')(http);

const PORT = process.env.port || 5001

app.get('/', function(req, res){
    res.send('<h1>hello world</h1>');
});

io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('chat message', function(msg){
        console.log('message: ' + JSON.stringify(msg));
        io.emit('chat message', msg);
        // io.emit('nickname', nickname)
    });  
    // socket.on('send-nickname', function(nickname) {
    //     socket.nickname = nickname;
    //     users.push(socket.nickname);
    //     console.log(users);
    // });
});


http.listen(PORT, function(){
    console.log(`listening on ${PORT} `);
});

