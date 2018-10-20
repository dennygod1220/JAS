var express = require('express');
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var Port = 9998;

var socketio = require('./Socket/io');


app.use(express.static('public'));

app.get('/', function (req, res) {
    res.sendfile('./index.html');
})

//使用socketio 連線
socketio(server);

server.listen(Port);