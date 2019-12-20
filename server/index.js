const express = require('express');
var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

const PORT = process.env.PORT || 3001;
require("dotenv").config()

// Define middleware here
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

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
    console.log('listening on *:3001');
});

